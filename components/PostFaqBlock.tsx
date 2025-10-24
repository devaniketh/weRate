"use client"

import React from "react"

export default function PostFaqBlock() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div
        className="rounded-3xl p-10 h-[650px] w-full mb-20 relative overflow-hidden flex items-center justify-between"
        style={{
          backgroundImage: `
            linear-gradient(to right, #081115, #283033),
            repeating-linear-gradient(
              100deg,
              rgba(59,130,246,0.05) 0%,
              rgba(165,180,252,0.05) 5%,
              rgba(147,197,253,0.05) 10%,
              rgba(221,214,254,0.05) 15%,
              rgba(96,165,250,0.05) 20%
            ),
            repeating-linear-gradient(
              100deg,
              rgba(0,0,0,0.1) 0%,
              rgba(0,0,0,0.2) 7%,
              transparent 10%,
              transparent 12%,
              rgba(0,0,0,0.2) 16%
            )
          `,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-10 max-w-xl">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Continue<br />exploring. Start<br />earning.
          </h3>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Your city is waiting. Check in, leave reviews, and unlock real<br />
            rewards — all from one sleek app.
          </p>

          <div className="flex gap-4">
            <img
              src="/a.png"
              alt="App Store"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="/p.png"
              alt="Play Store"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        <div className="absolute right-0 bottom-0 md:bottom-[-40px] md:right-[20px] z-0">
          <img
            src="/tilted.png"
            alt="App Preview"
            className="w-[200px] md:w-[800px] rotate-[-4deg] translate-x-[100px] translate-y-[215px] object-contain"

          />
        </div>
      </div>
    </section>
  )
}