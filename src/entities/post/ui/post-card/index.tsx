"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useRef, useState } from "react"

export const PostCard = ({ post }: { post: any }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` } as any}
      whileHover={{ y: -8 }}
      className="premium-glass p-8 group cursor-pointer"
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <header className="flex justify-between items-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
              Node_Protocol_{post.id}
            </span>
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_#00f2ff]" />
          </header>
          <h2 className="font-extrabold tracking-[-0.05em] leading-[1.1] text-3xl mb-4 text-white/90 group-hover:text-white">
            {post.title}
          </h2>
          <p className="font-light leading-relaxed text-white/60 text-base line-clamp-3">
            {post.body}
          </p>
        </div>
        <Link 
          href={`/posts/${post.id}`}
          className="mt-12 inline-flex items-center justify-center py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group/btn overflow-hidden relative"
        >
          <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover/btn:text-white">
            Analyze Details
          </span>
        </Link>
      </div>
    </motion.div>
  );
