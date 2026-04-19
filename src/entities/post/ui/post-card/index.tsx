"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const PostCard = ({ post, index }: { post: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    className="luxury-card rounded-[60px] p-16 flex flex-col justify-between h-full relative group overflow-hidden"
  >
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-6 mb-16">
        <span className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent"></span>
        <span className="text-cyan-400 text-xs font-black tracking-[0.6em] uppercase">Module 0{index + 1}</span>
      </div>
      
      <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-[0.95] tracking-tighter text-white text-glow">
        {post.title}
      </h2>
      
      <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-3xl opacity-50 group-hover:opacity-100 transition-all duration-500">
        {post.body}
      </p>
    </div>

    <Link href={`/posts/${post.id}`} className="mt-20 inline-flex items-center gap-8 group/btn">
      <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:w-32 group-hover/btn:bg-cyan-400 group-hover/btn:border-cyan-400 transition-all duration-700">
        <svg className="w-10 h-10 text-white group-hover/btn:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-white text-lg font-black uppercase tracking-[0.3em]">Project Details</span>
    </Link>
  </motion.div>
);
