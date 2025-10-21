"use client"

import React from "react"

export default function Partnership() {
  const logos = [
    "/superteam.png",
    "/solanafoundation.png",
    "/bonk.png",
    "/monkeydao.png",
    "/logo5.png",
  ]

  return (
    <section className="text-center mt-16">
      <p className="text-[#FAF7FF] text-lg font-medium tracking-wide mb-6">
        In Partnership With
      </p>

      <div className="marquee-container">
        <div className="marquee gap-20">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
