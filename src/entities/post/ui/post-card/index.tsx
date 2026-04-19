import Link from "next/link";

export const PostCard = ({ post }: { post: any }) => (
  <div className="premium-card p-7 rounded-3xl flex flex-col h-full group">
    <div className="flex items-center gap-2.5 mb-5 text-[#38bdf8] italic font-semibold text-xs tracking-wider">
      <div className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full animate-pulse"></div>
      TECHNOLOGY
    </div>
    <div className="flex-grow">
      <h2 className="text-2xl font-black mb-4 group-hover:text-[#38bdf8] transition-colors leading-tight tracking-tighter">
        {post.title}
      </h2>
      <p className="text-slate-400 text-sm leading-relaxed mb-8">
        {post.body}
      </p>
    </div>
    <Link href={`/posts/${post.id}`} className="inline-flex items-center justify-center w-fit px-6 py-3 bg-[#38bdf8]/5 text-[#38bdf8] border border-[#38bdf8]/20 rounded-xl hover:bg-[#38bdf8] hover:text-white transition-all active:scale-95 text-xs font-bold uppercase tracking-widest">
      Детальніше
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </Link>
  </div>
);
