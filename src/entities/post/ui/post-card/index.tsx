"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export const PostCard = ({ post }: { post: any }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.01 }}
    transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
    className="glass-card p-10 flex flex-col justify-between h-[480px] group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 text-cyan-500/10 font-mono text-[10vw] font-black group-hover:text-cyan-500/20 transition-colors">
        {post.id}
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f2ff]"></div>
        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">Architecture Node</span>
      </div>
      
      <h2 className="text-3xl font-bold leading-tight mb-6 text-white text-master group-hover:text-cyan-400 transition-colors tracking-tighter">
        {post.title}
      </h2>
      
      <p className="text-white/40 font-light leading-relaxed max-w-xl text-lg">
        {post.body}
      </p>
    </div>
    
    <Link href={`/posts/${post.id}`} className="relative z-10 flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all active:scale-95 group/btn">
      <span className="text-white text-[11px] font-black uppercase tracking-widest opacity-60 group-hover/btn:opacity-100 transition-opacity">Explore details_protocol</span>
      <svg className="w-5 h-5 text-white/60 group-hover/btn:text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </Link>
  </motion.div>
);
