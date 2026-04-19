"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <main className="p-10 md:p-24">
      <header className="mb-40">
        <h1 className="text-[15vw] font-black leading-none tracking-tighter title-gradient">DARIAN.</h1>
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400/50 to-transparent mt-10"></div>
      </header>
      
      {isLoading ? (
        <div className="text-cyan-400 font-black animate-pulse tracking-[2em]">SYNCING...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts?.slice(0, 6).map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
