"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const PostCard = ({ post, index }: { post: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    whileHover={{ scale: 1.01 }}
    className="glass-card p-12 rounded-[50px] relative overflow-hidden group min-h-[500px] flex flex-col justify-between"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-16 bg-cyan-400"></div>
        <span className="text-cyan-400 text-[10px] font-black tracking-[0.5em] uppercase">Tech Unit 0{index + 1}</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.05] tracking-tighter text-white">
        {post.title}
      </h2>
      
      <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl opacity-60 group-hover:opacity-100 transition-all duration-500">
        {post.body}
      </p>
    </div>

    <Link href={`/posts/${post.id}`} className="relative z-10 flex items-center gap-5 mt-16 group/btn">
      <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white transition-all duration-700">
        <svg className="w-8 h-8 text-white group-hover/btn:text-black transform group-hover/btn:rotate-[-45deg] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-white text-sm font-black uppercase tracking-[0.2em]">View Full Case</span>
    </Link>
  </motion.div>
);
