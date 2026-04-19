"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="max-w-[1400px] mx-auto py-20 px-6">
      <header className="flex justify-between items-center mb-24">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Hello, User!</h1>
          <p className="text-white/30 font-medium tracking-wide uppercase text-[10px]">Your IT Ecosystem Dashboard</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-400 to-pink-500 border border-white/10 shadow-xl flex items-center justify-center font-bold italic">U</div>
      </header>

      {isLoading ? (
        <div className="flex gap-4 animate-pulse">
           {[1,2,3].map(i => <div key={i} className="h-64 flex-1 bg-white/5 rounded-[32px]"></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.slice(0, 9).map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
