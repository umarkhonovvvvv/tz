"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="p-8 md:p-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center relative">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            БЛОГ ТЕХНОЛОГІЙ
          </h1>
          <div className="h-1.5 w-24 bg-[#38bdf8] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Сучасний погляд на розробку програмного забезпечення, ІТ-тенди та інновації.
          </p>
        </header>

        {isLoading ? (
          <div className="text-white text-center py-20 animate-pulse text-lg">Завантаження...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
