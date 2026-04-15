export const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Помилка завантаження");
  return res.json();
}

export async function fetchPostById(id: string | number) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Пост не знайдено");
  return res.json();
}
