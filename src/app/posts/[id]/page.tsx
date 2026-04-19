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
    <main className="min-h-screen bg-[#050b14] p-6 md:p-24 flex items-center justify-center relative overflow-hidden text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent)] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl aspect-video bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] p-12 md:p-24 relative shadow-2xl"
      >
        <button onClick={() => router.back()} className="absolute top-12 left-12 text-cyan-400 font-black tracking-widest text-[10px] uppercase hover:opacity-50 transition-all">
          ← Back
        </button>

        <div className="h-full flex flex-col justify-center">
          <div className="text-cyan-400/50 font-black tracking-[0.5em] uppercase text-[10px] mb-8">Node_System / {id}</div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase italic">
            {post.title}
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mb-16 shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
          <p className="text-white/60 text-2xl md:text-3xl font-light leading-snug max-w-4xl">
            {post.body}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
