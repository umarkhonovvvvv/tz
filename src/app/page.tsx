"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api/index";
import { PostCard } from "@/entities/post/ui/post-card/index";
import { PostSkeleton } from "@/shared/ui/skeleton/post-skeleton";

export default function HomePage() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isError) return <div className="text-red-500 p-10 text-center text-2xl font-bold">Xatolik yuz berdi! Postlar topilmadi.</div>;

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-white text-center">Next.js 15+ Postlar Blogi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading 
          ? Array(9).fill(0).map((_, i) => <PostSkeleton key={i} />)
          : posts?.map((post: any) => <PostCard key={post.id} post={post} />)
        }
      </div>
    </main>
  );
}
