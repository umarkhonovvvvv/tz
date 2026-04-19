import Link from "next/link";

export const PostCard = ({ post }: { post: any }) => (
  <div className="premium-card p-10 flex flex-col h-full group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
        <div className="w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full"></div>
    </div>
    
    <div className="relative z-10">
      <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
        Future Tech
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.1] tracking-tighter text-gradient">
        {post.title}
      </h2>
      
      <p className="text-slate-400 text-lg leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-all">
        {post.body}
      </p>

      <Link href={`/posts/${post.id}`} className="inline-flex items-center gap-4 group/link">
        <span className="text-white font-bold text-sm tracking-widest uppercase">Explore Project</span>
        <div className="w-12 h-[1px] bg-white/20 group-hover/link:w-20 group-hover/link:bg-cyan-400 transition-all duration-500"></div>
      </Link>
    </div>
  </div>
);
