"use client"
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchPostById } from "@/shared/api/index";

export default function PostDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id as string),
    enabled: !!id,
  });

  if (isLoading) return <div className="p-20 text-center text-white text-xl animate-bounce">Завантаження...</div>;
  if (isError) return (
    <div className="p-20 text-center">
      <h1 className="text-4xl text-red-500 mb-6 font-bold">Пост не знайдено!</h1>
      <button onClick={() => router.push("/")} className="bg-gray-700 text-white px-6 py-2 rounded">Назад до головної</button>
    </div>
  );

  return (
    <main className="container mx-auto py-16 px-4 max-w-4xl">
      <button onClick={() => router.push("/")} className="mb-8 text-blue-400 hover:text-blue-300 flex items-center gap-2">
        ← Назад
      </button>
      <div className="card-custom border-l-4 border-l-blue-600">
        <h1 className="text-4xl font-bold mb-6 text-white">{post?.title}</h1>
        <div className="h-1 bg-gray-800 mb-8 w-1/4"></div>
        <p className="text-gray-300 text-xl leading-relaxed">{post?.body}</p>
      </div>
    </main>
  );
}
