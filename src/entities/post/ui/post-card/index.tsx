"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export const PostCard = ({ post, index }: { post: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
    className="card-layer rounded-[80px] p-20 flex flex-col justify-between min-h-[700px] group"
  >
    <div className="relative z-10">
      <div className="flex items-center gap-8 mb-20">
        <span className="text-[var(--secondary)] text-sm font-black tracking-[0.8em] uppercase">Architecture Phase 0{index + 1}</span>
      </div>
      
      <h2 className="text-6xl md:text-8xl font-black mb-16 leading-[0.9] tracking-tighter text-white">
        {post.title}
      </h2>
      
      <p className="text-white/60 text-3xl font-light leading-snug max-w-4xl group-hover:text-white/100 transition-all duration-700">
        {post.body}
      </p>
    </div>

    <Link href={`/posts/${post.id}`} className="mt-24 flex items-center gap-10 group/btn">
      <div className="h-32 w-32 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all duration-700">
        <svg className="w-12 h-12 text-white group-hover/btn:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-white text-xl font-bold uppercase tracking-[0.4em]">Initialize Discovery</span>
    </Link>
  </motion.div>
);
