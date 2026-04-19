"use client"
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";
import { motion } from "framer-motion";

export default function PostDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const post = posts?.find((p: any) => p.id.toString() === id);

  if (!post) return null;

  return (
    <main className="min-h-screen flex flex-col p-10 md:p-20 justify-between relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,242,255,0.1),transparent)]" />
      
      <button onClick={() => router.back()} className="z-10 text-white/20 hover:text-cyan-400 font-black tracking-[0.5em] text-[10px] uppercase transition-all">
        [ Esc_Back ]
      </button>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-6xl"
      >
        <span className="text-cyan-400 text-xs font-bold tracking-[1em] uppercase mb-10 block">System_Node_Data</span>
        <h1 className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter title-gradient uppercase mb-20">
          {post.title}
        </h1>
        <p className="text-white/40 text-2xl md:text-4xl font-light leading-tight max-w-4xl italic">
          "{post.body}"
        </p>
      </motion.div>

      <div className="flex justify-between items-end border-t border-white/5 pt-10">
        <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
          Build: 2026.04.19 // Sector: {id}
        </div>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </main>
  );
}
