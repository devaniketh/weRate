"use client"

import React from "react"
import Image from "next/image"
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
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a1.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">Jessica M.</h2>
              <p className="text-[#8e9096] text-sm">Coffee shop curator ☕️</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Morning rush but worth the wait. Oat latte on point, and the barista had jokes for days.”
          </p>
        </div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a2.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">Malik D.</h2>
              <p className="text-[#8e9096] text-sm">Local Legend – Lisbon</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Caught the sunset at Rooftop 22. Perfect drinks, good crowd, zero pretense.”
          </p>
        </div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a3.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">@blurredlines</h2>
              <p className="text-[#8e9096] text-sm">Food • Tech • Vibes</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Late-night sushi spot that actually delivers past midnight. Fresh rolls, low lights, 10/10.”
          </p>
        </div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a4.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">Sienna R.</h2>
              <p className="text-[#8e9096] text-sm">Freelancer & Full-Time Explorer</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Jazz night at the lounge hit different. Live sax, dim lights, and energy you can’t fake.”
          </p>
        </div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a5.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">Luna 🌒</h2>
              <p className="text-[#8e9096] text-sm">Based reviewer</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Sunday brunch ran long, but the pancakes hit, and the playlist carried the vibe.”
          </p>
        </div>
        <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image src="/a6.png" alt="" width={50} height={50} className="rounded-full" />
            <div className="flex flex-col text-left">
              <h2 className="text-[#faf7ff] text-lg font-semibold">notjames.sol</h2>
              <p className="text-[#8e9096] text-sm">Crypto nomad</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5 ml-[0px]">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
            “Unexpectedly found this thrift shop downtown, left with a jacket and a story.”
          </p>
        </div>

      </div>
    </section>
  )
}