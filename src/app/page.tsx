"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <main className="max-w-[1400px] mx-auto py-24 px-8">
      <div className="mesh-bg"></div>
      <header className="mb-32">
        <h1 className="text-[8vw] font-black tracking-tighter leading-none mb-10 italic">
          DIGITAL<br/><span className="text-cyan-400">ARCHIVE.</span>
        </h1>
        <p className="text-white/30 text-xl max-w-xl font-light">Ekotizim boshqaruv tizimi va B2B savdo platformasi modullari.</p>
      </header>
      
      {isLoading ? (
        <div className="text-white/10 text-4xl font-black italic animate-pulse">SYSTEM_LOADING...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
