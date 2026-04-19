import Link from "next/link";
import { motion } from "framer-motion";

export const PostCard = ({ post }: { post: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="bento-card group"
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff]/70">Tech Insight</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#00f2ff] transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-white/40 leading-relaxed mb-8 line-clamp-3">
          {post.body}
        </p>
      </div>
      <Link href={`/posts/${post.id}`} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/btn">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Details</span>
        <svg className="w-4 h-4 text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  </motion.div>
);
