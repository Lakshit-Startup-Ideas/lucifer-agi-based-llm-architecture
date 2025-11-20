"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface UpdateCardProps {
  title: string
  date: string
  tag: string
  description: string
  link?: string
}

const tagColors: Record<string, string> = {
  Research: "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
  Training: "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100",
  Architecture: "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
  Edge: "bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100",
  RLHF: "bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100",
  DevLog: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
}

export default function UpdateCard({ title, date, tag, description, link }: UpdateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3, type: "spring", damping: 20 }}
      viewport={{ once: true }}
      className="h-full p-6 bg-card border border-border rounded-lg hover:shadow-xl transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[tag] || tagColors.DevLog}`}
            >
              {tag}
            </motion.span>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>

      {/* Link */}
      {link && (
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          Read More
          <ArrowUpRight size={16} />
        </Link>
      )}
    </motion.div>
  )
}
