"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Updates", href: "#updates" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#docs" },
  { label: "Contact", href: "#contact" },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with smooth animation */}
          <motion.div
            id="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.nav
            id="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-16 bottom-0 w-full sm:w-80 bg-background border-l border-border z-40 overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 p-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
