"use client"

import React from "react"

export default function PostFaqBlock() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div
        className="rounded-3xl p-10 h-[650px] w-full mb-20"
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
      ></div>
    </section>
  )
}