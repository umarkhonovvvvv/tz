export const BASE_URL = "https://jsonplaceholder.typicode.com";

const ukrainianPosts = [
  { title: "Створення застосунку на Next.js", body: "Цей пост розповідає про переваги використання Next.js 15 для сучасних вебрешень." },
  { title: "Основи React Query", body: "Дізнайтеся, як ефективно керувати станом запитів за допомогою TanStack Query." },
  { title: "Архітектура FSD", body: "Feature-Sliced Design допомагає зробити ваш проект структурованим та масштабованим." },
  { title: "Стилізація з Tailwind CSS", body: "Швидка та зручна розробка інтерфейсів за допомогою утилітарних класів CSS." },
  { title: "Робота з API", body: "Як правильно організувати запити до сервера та обробляти помилки завантаження." }
];

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts?_limit=10`);
  const data = await res.json();
  // Real IDlarni saqlab qolgan holda matnlarni ukrainchaga almashtiramiz
  return data.map((post: any, index: number) => ({
    ...post,
    title: ukrainianPosts[index % ukrainianPosts.length].title,
    body: ukrainianPosts[index % ukrainianPosts.length].body
  }));
}

export async function fetchPostById(id: string) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await res.json();
  const ukPost = ukrainianPosts[parseInt(id) % ukrainianPosts.length] || ukrainianPosts[0];
  return { ...post, title: ukPost.title, body: ukPost.body };
}
