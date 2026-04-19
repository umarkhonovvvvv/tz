import Link from "next/link";
export const PostCard = ({ post }: { post: any }) => (
  <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col h-full">
    <div className="flex-grow">
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h2>
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{post.body}</p>
    </div>
    <div className="mt-6">
      <Link href={`/posts/${post.id}`} className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
        Детальніше
      </Link>
    </div>
  </div>
);
