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

  if (!post) return <div className="h-screen flex items-center justify-center font-mono text-cyan-400 animate-pulse tracking-widest text-xs uppercase">BOOTING_SYSTEM...</div>;

  return (
    <main className="min-h-screen p-8 md:p-24 overflow-hidden relative">
      <div className="fixed inset-0 bg-[#020408] z-[-2]"></div>
      <div className="aura-bg"></div>
      
      <div className="max-w-[1400px] mx-auto">
        <button onClick={() => router.back()} className="mb-20 text-white/30 hover:text-white transition-colors flex items-center gap-3 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 12H5m7-7l-7 7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Core Terminal
        </button>
        
        <motion.article 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="space-y-12"
        >
          <header className="space-y-6">
            <div className="text-cyan-400 font-black tracking-[0.5em] uppercase text-xs mb-8">System_Case_Study / Phase {id}</div>
            <h1 className="text-6xl md:text-8xl font-black text-white text-premium tracking-tighter leading-[0.85] uppercase italic">
              {post.title}
            </h1>
          </header>
          
          <div className="h-px w-full bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.02)]" />
          
          <p className="text-white/60 text-2xl md:text-4xl font-light leading-snug max-w-4xl italic">
            "{post.body}"
          </p>

          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row gap-10">
             <div className="glass-panel p-8 bg-white/[0.01]">
                <span className="block text-[11px] font-black text-white/20 uppercase mb-3">Protocol</span>
                <span className="text-sm font-mono text-cyan-500">JSON_FETCH_POST_{id}</span>
             </div>
             <div className="glass-panel p-8 bg-white/[0.01]">
                <span className="block text-[11px] font-black text-white/20 uppercase mb-3">Status</span>
                <span className="text-sm font-mono text-green-500">VERIFIED_ENTRY</span>
             </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
