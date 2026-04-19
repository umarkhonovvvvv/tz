"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="relative min-h-screen p-10 md:p-32 overflow-hidden">
      <div className="ultra-bg"></div>
      
      <div className="max-w-[1800px] mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="mb-64"
        >
          <h1 className="text-[15vw] font-black leading-[0.8] tracking-tight text-white uppercase italic">
            CORE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">STATIONS</span>
          </h1>
          <p className="mt-20 text-slate-500 text-3xl font-light tracking-tight max-w-2xl leading-snug">
            SFA Marketplace — innovatsion savdo va boshqaruv tizimi.
          </p>
        </motion.header>

        {isLoading ? (
          <div className="text-white/10 text-[10vw] font-black italic animate-pulse tracking-widest text-center py-40">INITIALIZING...</div>
        ) : (
          <div className="flex flex-col gap-40">
            {posts?.map((post: any, i: number) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
