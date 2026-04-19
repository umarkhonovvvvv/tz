"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="relative min-h-screen px-6 py-24 md:px-20">
      <div className="mesh-bg"></div>
      
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-32">
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter text-gradient uppercase">
            Data<br/>Evolution
          </h1>
          <p className="mt-12 text-slate-500 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
            S SF Marketplace — keyingi avlod B2B platformasi.
          </p>
        </header>

        {isLoading ? (
          <div className="h-96 flex items-center justify-center text-cyan-500 animate-pulse text-4xl font-black italic">LOADING SYSTEM...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts?.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
