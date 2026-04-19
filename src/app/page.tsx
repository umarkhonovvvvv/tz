"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="relative px-6 py-32 md:px-24">
      <div className="live-bg"></div>
      
      <div className="max-w-[1600px] mx-auto">
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-48"
        >
          <div className="text-cyan-400 font-bold tracking-[0.6em] uppercase mb-10 text-xs">Future of Data</div>
          <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
            Visual<br/>Intelligence
          </h1>
        </motion.header>

        {isLoading ? (
          <div className="h-screen flex items-start justify-start">
             <div className="text-white/20 text-5xl font-black animate-pulse">BOOTING_SYSTEM...</div>
          </div>
        ) : (
          <div className="flex flex-col gap-24">
            {posts?.map((post: any, i: number) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
