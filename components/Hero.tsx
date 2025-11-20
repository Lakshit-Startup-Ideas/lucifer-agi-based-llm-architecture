"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonHover } from "@/lib/motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-8 px-4 py-2 bg-secondary rounded-full text-sm font-medium"
        >
          ✨ Sovereign Intelligence Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          <span className="text-balance">
            Sovereign Intelligence.
            <br />
            Locally Trained.
            <br />
            Globally Scaled.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The Lucifer LLM Platform is a self-contained, sovereign-grade transformer stack designed for
          trillion-parameter training, real-time inference, edge cognition and national-scale AI infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div {...buttonHover}>
            <Link
              href="#docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Read Docs
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div {...buttonHover}>
            <Link
              href="#roadmap"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Roadmap
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
