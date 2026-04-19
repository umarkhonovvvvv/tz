import Link from "next/link";

export const PostCard = ({ post }: { post: any }) => (
  <div className="premium-card p-8 rounded-[2rem] flex flex-col h-full group">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-2 h-2 bg-[#38bdf8] rounded-full shadow-[0_0_10px_#38bdf8]"></div>
      <span className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em]">Data Integration</span>
    </div>
    
    <div className="flex-grow">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-[#38bdf8] transition-colors">
        {post.title}
      </h2>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
        {post.body}
      </p>
    </div>

    <Link href={`/posts/${post.id}`} className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#38bdf8] hover:border-[#38bdf8] transition-all group/btn">
      <span>Детальніше</span>
      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  </div>
);
