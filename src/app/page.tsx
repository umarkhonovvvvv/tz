"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="max-w-[1400px] mx-auto py-24 px-8">
      <header className="mb-32">
        <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] mb-8">
          SFA<br/><span className="text-cyan-400">SYSTEM.</span>
        </h1>
        <p className="text-white/20 text-xl font-mono tracking-widest uppercase">B2B Ecosystem / Deployment: 2026</p>
      </header>

      {isLoading ? (
        <div className="text-cyan-400 animate-pulse font-mono tracking-widest text-xs uppercase">Initialising_Protocol...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
