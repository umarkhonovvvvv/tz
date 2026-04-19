"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <main className="max-w-[1800px] mx-auto py-32 px-10">
      <header className="mb-40 flex justify-between items-end">
        <div>
          <h1 className="text-[10vw] font-black leading-[0.8] tracking-tighter text-white">TECH<br/>STATION</h1>
        </div>
        <div className="text-right text-cyan-400 font-mono text-xs tracking-widest uppercase pb-4">
          Status: Online<br/>System: Next.js 15
        </div>
      </header>
      {isLoading ? (
        <div className="text-white/10 text-5xl font-black italic">LOADING...</div>
      ) : (
        <div className="luxury-grid">
          {posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
