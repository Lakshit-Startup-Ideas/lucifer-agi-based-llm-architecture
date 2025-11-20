"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import UpdateCard from "./UpdateCard"
import { updates } from "@/data/updates"

type TagFilter = "All" | "Research" | "Training" | "Architecture" | "Edge" | "RLHF" | "DevLog"

const TAGS: TagFilter[] = ["All", "Research", "Training", "Architecture", "Edge", "RLHF", "DevLog"]

export default function UpdatesSection() {
  const [selectedTag, setSelectedTag] = useState<TagFilter>("All")

  const filteredUpdates = useMemo(() => {
    if (selectedTag === "All") return updates
    return updates.filter((update) => update.tag === selectedTag)
  }, [selectedTag])

  return (
    <section id="updates" className="py-24 px-4 sm:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Latest Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-time insights into our development progress and platform evolution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {TAGS.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              }`}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update, index) => (
              <motion.div
                key={`${update.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
                layout
              >
                <UpdateCard {...update} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12 text-muted-foreground"
            >
              No updates found for this category.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
