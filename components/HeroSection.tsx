"use client"

import React from "react"

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center pt-[150px] px-5 pb-[100px] bg-[#090D20] min-h-[80vh] gap-7 animate-fadeUp"
    >
      <div className="hero-text">
        <h2 className="text-[3rem] font-bold text-[#f3ecfe] m-0">
          <strong>Turn reviews into</strong>{" "}
          <span className="text-[#98adf1]"><strong>rewards</strong></span>
        </h2>
        <h3 className="text-[1.8rem] font-medium text-[rgba(243,236,254,0.87)] mt-2">
          Discover. Share. <span className="text-[#98adf1]">Earn.</span>
        </h3>
      </div>

      <div className="flex gap-5 mt-7">
        <a
          href="#download"
          className="text-[#090D20] bg-gradient-to-r from-[#9FA5F1] to-[#9FA5F1] px-7 py-3 rounded-[20px] font-medium shadow-[rgba(114,69,186,0.03)_0px_0.5px_0.5px,rgba(114,69,186,0.25)_0px_4px_4px,rgba(255,255,255,0.25)_0px_4px_4px_inset] transition-transform duration-200 ease-out hover:scale-105"
        >
          Download App
        </a>
        <a
          href="https://discord.com/invite/zypdgGMVu5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#faf7ff] border-2 border-[#98adf1] px-7 py-3 rounded-[20px] font-medium transition-all duration-200 ease-out hover:bg-[rgba(152,173,241,0.1)] hover:scale-105"
        >
          Join Discord
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
