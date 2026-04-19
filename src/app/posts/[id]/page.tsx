"use client"
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";

export default function PostDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const post = posts?.find((p: any) => p.id.toString() === id);

  if (!post) return <div className="bg-black min-h-screen p-20 text-cyan-400">SYNCING_DATA...</div>;

  return (
    <main className="min-h-screen bg-[#020408] text-white p-8 md:p-24 flex items-center justify-center">
      <div className="max-w-5xl w-full border border-white/5 bg-white/[0.01] rounded-[48px] p-12 md:p-24 shadow-2xl">
        <button onClick={() => router.back()} className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-16 hover:opacity-50">
          [ go_back ]
        </button>
        <div className="space-y-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
            {post.title}
          </h1>
          <div className="h-1 w-20 bg-cyan-400 shadow-[0_0_20px_#00f2ff]"></div>
          <p className="text-white/40 text-xl md:text-3xl font-light leading-relaxed">
            {post.body}
          </p>
        </div>
      </div>
    </main>
  );
}
