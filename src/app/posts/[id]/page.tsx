"use client"
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";

export default function PostDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const post = posts?.find((p: any) => p.id.toString() === id);

  if (!post) return <div className="h-screen flex items-center justify-center font-mono text-white/10 italic tracking-widest">LOADING_SYSTEM_RESOURCES...</div>;

  return (
    <main className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => router.back()} className="mb-16 text-white/30 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Overview
        </button>
        
        <article className="space-y-10">
          <header className="space-y-6">
            <div className="flex items-center gap-4 text-cyan-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Live Database Entry
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient leading-[1.1]">
              {post.title}
            </h1>
          </header>
          
          <div className="h-px w-full bg-white/5" />
          
          <p className="text-white/60 text-xl md:text-2xl font-normal leading-relaxed">
            {post.body}
          </p>

          <footer className="pt-20 border-t border-white/5 grid grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] font-bold text-white/20 uppercase mb-2">Protocol</span>
              <span className="text-sm font-mono text-white/60">JSON_FETCH_POST_{id}</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] font-bold text-white/20 uppercase mb-2">Status</span>
              <span className="text-sm font-mono text-green-500">VERIFIED_ENTRY</span>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
