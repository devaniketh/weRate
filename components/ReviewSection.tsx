"use client"

import React, { useState, useEffect } from "react"

export default function ReviewSection() {
  const words = ["anything", "bars", "cafés", "clubs", "rooftops", "gyms", "hotels", "bakeries", "park"]
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000) 
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center mt-24 px-4">
      <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[#faf7ff] flex justify-center items-center gap-2">
        <span>Check-in and review</span>
        <span className="relative h-[2.5rem] w-[120px] inline-flex items-center overflow-hidden">
          {words.map((word, index) => (
            <span
              key={word}
              className={`absolute left-0 w-full text-[#98adf1] transition-transform duration-500 ${
                index === currentWord ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {word}
            </span>
          ))}
        </span>
      </h2>

      <p className="mt-4 text-[1.1rem] text-[rgba(243,236,254,0.7)] max-w-2xl mx-auto">
        Earn rewards as you uncover new places.
      </p>
    </section>
  )
}