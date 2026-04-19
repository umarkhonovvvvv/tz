export const BASE_URL = "https://jsonplaceholder.typicode.com";

const ukrainianContent = [
  { title: "Створення застосунку на Next.js", body: "Цей пост розповідає про переваги використання Next.js 15 для сучасних вебрешень." },
  { title: "Основи React Query", body: "Дізнайтеся, як ефективно керувати станом запитів за допомогою TanStack Query." },
  { title: "Архітектура FSD", body: "Feature-Sliced Design допомогає зробити ваш проект структурованим." },
  { title: "Стилізація з Tailwind CSS", body: "Швидка розробка інтерфейсів за допомогою утилітарних класів CSS." },
  { title: "Робота з API", body: "Як правильно організувати запити do сервера та обробляти помилки." }
];

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts?_limit=9`);
  const data = await res.json();
  return data.map((post: any, index: number) => ({
    ...post,
    title: ukrainianContent[index % ukrainianContent.length].title,
    body: ukrainianContent[index % ukrainianContent.length].body
  }));
}

export async function fetchPostById(id: string) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await res.json();
  const uk = ukrainianContent[parseInt(id) % ukrainianContent.length] || ukrainianContent[0];
  return { ...post, title: uk.title, body: uk.body };
}
