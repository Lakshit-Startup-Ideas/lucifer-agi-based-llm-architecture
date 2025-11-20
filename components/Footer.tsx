"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer id="contact" className="border-t border-border py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-3">Lucifer</h3>
            <p className="text-muted-foreground">Sovereign AI Research Platform</p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:lucifer2025@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                <Mail size={18} />
                lucifer2025@gmail.com
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/lucifer-ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="#home"
                className="block text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                Home
              </Link>
              <Link
                href="#updates"
                className="block text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                Updates
              </Link>
              <Link
                href="#roadmap"
                className="block text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
              >
                Roadmap
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border my-12 origin-left"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Lucifer AI. Sovereign Intelligence Infrastructure. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
