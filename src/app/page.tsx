"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ 
    queryKey: ["posts"], 
    queryFn: fetchPosts 
  });

  return (
    <main className="p-8 bg-[#020617] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white text-center mb-12 uppercase tracking-tighter">
          Блог Технологій
        </h1>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-64 bg-slate-900 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts?.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
