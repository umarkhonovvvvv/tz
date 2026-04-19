"use client"
import Link from "next/link";
export const PostCard = ({ post }: { post: any }) => (
  <Link href={`/posts/${post.id}`} className="premium-card block group">
    <div className="flex flex-col gap-6">
      <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase italic">Project_{post.id}</span>
      <h2 className="text-3xl font-medium text-white group-hover:text-cyan-400 transition-colors">{post.title}</h2>
      <p className="text-white/40 leading-relaxed font-light">{post.body.substring(0, 100)}...</p>
    </div>
  </Link>
);
