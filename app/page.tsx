"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import UpdatesSection from "@/components/UpdatesSection"
import RoadmapSection from "@/components/RoadmapSection"
import DailyLogSection from "@/components/DailyLogSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <UpdatesSection />
      <RoadmapSection />
      <DailyLogSection />
      <Footer />
    </main>
  )
}
