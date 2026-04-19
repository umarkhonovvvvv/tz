"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="max-w-[1500px] mx-auto py-24 px-10 relative">
      <div className="aura-bg"></div>
      
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <h1 className="text-[12vw] font-black tracking-tighter leading-[0.8] text-master uppercase italic mb-8">
          Darian<br/>Stations.
        </h1>
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-transparent mt-10 shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
      </motion.header>
      
      {isLoading ? (
        <div className="text-cyan-400 font-mono tracking-widest text-xs uppercase animate-pulse">SYNCHRONISING_SYSTEM_NODES...</div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {posts?.map((post: any) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  );
}
