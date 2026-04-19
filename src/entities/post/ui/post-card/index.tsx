import Link from "next/link";
export const PostCard = ({ post }: { post: any }) => (
  <div className="glass-card p-6 rounded-2xl flex flex-col h-full group">
    <div className="mb-4">
      <span className="text-xs font-medium tracking-wider text-blue-400 uppercase italic">Стаття</span>
    </div>
    <h2 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h2>
    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{post.body}</p>
    <Link href={`/posts/${post.id}`} className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
      Детальніше
    </Link>
  </div>
);
