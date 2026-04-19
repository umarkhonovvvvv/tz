"use client"
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/shared/api";

export default function PostDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const post = posts?.find((p: any) => p.id.toString() === id);

  if (!post) return <div className="p-20 text-white/20">Loading...</div>;

  return (
    <main className="max-w-4xl mx-auto py-40 px-6">
      <button onClick={() => router.back()} className="text-white/20 hover:text-white mb-20 transition-all text-xs tracking-widest uppercase">← Back</button>
      <div className="space-y-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">{post.title}</h1>
        <div className="h-px w-full bg-white/10" />
        <p className="text-white/60 text-2xl font-light leading-relaxed">{post.body}</p>
      </div>
    </main>
  );
