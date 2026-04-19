"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const PostCard = ({ post }: { post: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="luxury-card p-10 flex flex-col justify-between h-[450px]"
  >
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400/50 uppercase">Data node</span>
      </div>
      <h2 className="text-3xl font-bold leading-tight mb-6 text-white/90">
        {post.title}
      </h2>
      <p className="text-white/40 font-light leading-relaxed line-clamp-3">
        {post.body}
      </p>
    </div>
    
    <Link href={`/posts/${post.id}`} className="inline-flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-widest hover:text-cyan-400 transition-colors">
      Explorer Project 
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </Link>
  </motion.div>
);
