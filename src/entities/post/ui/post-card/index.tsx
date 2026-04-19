"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export const PostCard = ({ post }: { post: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="modern-card group overflow-hidden"
  >
    <Link href={`/posts/${post.id}`} className="p-8 block h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold">SF</div>
          <span className="text-xs font-semibold text-white/50 tracking-tight">System_Architect</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-white/40 leading-relaxed font-normal line-clamp-2 text-sm">
          {post.body}
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/20">
        <span>Node_ID: {post.id}</span>
        <span className="group-hover:text-cyan-400 transition-colors">View Details →</span>
      </div>
    </Link>
  </motion.div>
);
