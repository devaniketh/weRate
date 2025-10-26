
"use client"

import React from "react"

export default function FeatureCards() {
  return (
    <section id="features" className="mt-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">

        {[
          {
            img: "/i1.png",
            title: "Claim your spots",
            desc: "Complete weekly quests by checking in everywhere",
          },
          {
            img: "/I2.png",
            title: "We Reward Quality",
            desc: "Our AI boosts authentic reviews. Earn more when you keep it real.",
          },
          {
            img: "/i3.png",
            title: "Climb the leaderboard",
            desc: "Beat your friends and claim awesome prizes",
          },
          {
            img: "/i4.png",
            title: "Build your Terry",
            desc: "Maximize rewards and progress",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-[#040404] rounded-lg w-full md:w-[600px] flex flex-col overflow-hidden p-9 border border-[#101010] 
            shadow-[0_0_15px_rgba(152,173,241,0.25)] hover:shadow-[0_0_25px_rgba(152,173,241,0.5)] transition-shadow duration-300"
          >
            <div className="flex-1 overflow-hidden rounded-lg border border-[#101010]">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="mt-4 text-white font-semibold text-2xl text-left">
              {card.title}
            </div>
            <div className="text-[#959398] text-lg font-normal text-left mt-2">
              {card.desc}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
