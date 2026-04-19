"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export const PostCard = ({ post }: { post: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="food-card p-8 flex flex-col justify-between h-full group"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">
          Category_{post.id}
        </span>
        <div className="text-orange-400">★★★★★</div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors tracking-tight leading-tight">
        {post.title}
      </h2>
      
      <p className="text-white/40 font-normal leading-relaxed text-sm line-clamp-3 mb-8 italic">
        "{post.body}"
      </p>
    </div>
    
    <Link href={`/posts/${post.id}`} className="btn-primary w-full py-4 text-center text-xs uppercase tracking-widest shadow-lg shadow-orange-500/10">
      View Project Details
    </Link>
  </motion.div>
);
