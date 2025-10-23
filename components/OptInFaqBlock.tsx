"use client"

import React, { useState } from "react"
import { faqs } from "../data/faqsData"

export default function OptInFaqBlock() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
    } else {
      setError("")
    }
  }

  return (
    <section className="mt-16 py-16 max-w-6xl mx-auto px-4">
      <div
        className="rounded-3xl p-10 h-[650px] w-full flex flex-col md:flex-row items-center mb-20"
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
        <div className="flex flex-col justify-center items-center text-center h-full w-full gap-8">
          <div>
            <h2 className="text-[#faf7ff] text-4xl font-extrabold mb-6">
              Don’t miss a check-in
            </h2>
            <p className="text-[#85838b] text-lg">
              Get updates, app drops, and community rewards, straight to your inbox
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col sm:flex-row gap-1">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-2xl border border-[#373f42] bg-transparent text-white placeholder-[#85838b] focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-white text-black font-semibold rounded-r-2xl hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
      <h1 className="text-white text-4xl font-extrabold text-center mt-10 mb-12">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#050e12] rounded-2xl p-6 transition-all duration-500 ease-in-out border-b border-[#373f42]"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-[#faf7ff] text-xl font-semibold">
                {faq.question}
              </h2>
              <button
                className={`text-[#faf7ff] text-2xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                ×
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#85838b] text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



