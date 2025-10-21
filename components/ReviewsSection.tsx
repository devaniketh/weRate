"use client"

import React from "react"

export default function ReviewsSection() {
  return (
    <section className="mt-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Reviews of the week
      </h2>
      <p className="text-white/70 text-sm">
        Get featured as reviewer of the week and earn awesome prizes!
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52"></div>
      </div>
    </section>
  )
}
