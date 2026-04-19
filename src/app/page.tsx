"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { PostCard } from "@/entities/post/ui/post-card";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <main className="relative min-h-screen p-12 md:p-40 overflow-hidden">
      <div className="master-bg"></div>
      <div className="glow-orb top-[-10%] left-[-10%]"></div>
      <div className="glow-orb bottom-[-10%] right-[-10%] bg-purple-500/5"></div>
      
      <div className="max-w-[1920px] mx-auto">
        <header className="mb-80">
          <motion.h1 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[18vw] font-black leading-[0.75] tracking-tighter text-white uppercase italic text-master"
          >
            SFA<br/>STATION
          </motion.h1>
          <p className="mt-32 text-white/30 text-4xl font-light tracking-tight max-w-3xl">
            B2B Marketplace & Ecosystem — kelajakning yangi standarti.
          </p>
        </header>

        {isLoading ? (
          <div className="text-white/5 text-[15vw] font-black animate-pulse">SYNCING_DATA...</div>
        ) : (
          <div className="flex flex-col gap-32">
            {posts?.map((post: any, i: number) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
