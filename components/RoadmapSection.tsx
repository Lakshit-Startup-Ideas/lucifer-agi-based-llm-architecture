"use client"

import { motion } from "framer-motion"
import { Check, Circle } from "lucide-react"
import { roadmapItems } from "@/data/roadmap"

export default function RoadmapSection() {
  const completedCount = roadmapItems.filter((item) => item.status === "done").length
  const progressPercentage = (completedCount / roadmapItems.length) * 100

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From milestone M0 through M9, building sovereign intelligence infrastructure.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-medium text-muted-foreground">Overall Progress</span>
              <span className="text-lg font-bold text-primary">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 4, backgroundColor: "hsl(var(--secondary) / 0.7)" }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-all"
            >
              {/* Status Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05 + 0.1, type: "spring", damping: 15 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                {item.status === "done" && (
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"
                  >
                    <Check size={18} className="text-green-700 dark:text-green-300" />
                  </motion.div>
                )}
                {item.status === "progress" && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Circle size={18} className="text-blue-700 dark:text-blue-300 fill-current" />
                    </motion.div>
                  </div>
                )}
                {item.status === "upcoming" && (
                  <div className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <Circle size={14} className="text-muted-foreground" />
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                    item.status === "done"
                      ? "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100"
                      : item.status === "progress"
                        ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                        : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                  }`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
