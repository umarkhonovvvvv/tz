"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "@/shared/api"
import { PostCard } from "@/entities/post/ui/post-card"
import { motion } from "framer-motion"

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="aura-container" />
      <div className="max-w-[1440px] mx-auto px-8 py-24 relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[#00f2ff] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            Operational Intelligence System v1.0
          </div>
          <h1 className="font-extrabold tracking-[-0.05em] leading-[1.1] text-6xl md:text-8xl mb-10">
            Darian <span className="text-white/20 italic font-light">Ecosystem.</span>
          </h1>
          <p className="font-light leading-relaxed text-white/60 text-xl max-w-xl">
            Next-generation IT outsourcing management. Orchestrating complex backend systems with precision.
          </p>
        </motion.header>

        {isLoading ? (
          <div className="flex items-center space-x-4 animate-pulse">
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-[#00f2ff]">Initialising...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.slice(0, 9).map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
