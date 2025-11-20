"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { dailyLogs } from "@/data/logs"

export default function DailyLogSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="logs" className="py-24 px-4 sm:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Engineering Logs</h2>
          <p className="text-lg text-muted-foreground">
            Daily progress and technical insights from our development team.
          </p>
        </motion.div>

        {/* Logs List */}
        <div className="space-y-4">
          {dailyLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-4 sm:p-6 flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={expandedIndex === index}
              >
                <div className="flex items-center gap-3 flex-wrap flex-1 text-left">
                  <span className="font-mono text-sm font-semibold text-primary">{log.date}</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    {log.category}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-muted-foreground" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="p-4 sm:p-6 text-base text-foreground leading-relaxed whitespace-pre-wrap bg-background/50">
                      {log.detail}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
