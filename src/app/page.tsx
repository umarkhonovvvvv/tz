"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <main className="max-w-7xl mx-auto py-20 px-6">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter premium-text">
          LATEST<br/>UPDATES
        </h1>
        <div className="h-1 w-20 bg-[#00f2ff] mt-8"></div>
      </header>
      {isLoading ? (
        <div className="text-white/20 font-black animate-pulse">SYNCING...</div>
      ) : (
        <div className="bento-container">
          {posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
