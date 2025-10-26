"use client"

import React from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center pt-[150px] px-5 pb-[80px] bg-[#090D20] gap-7 animate-fadeUp"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <h2 className="text-[3rem] font-extrabold m-0 relative inline-block 
               bg-clip-text text-transparent
               bg-gradient-to-r from-[#f3ecfe] via-[#98adf1] to-[#ffffff]
               drop-shadow-[0_0_4px_rgba(243,236,254,0.3)]
               animate-gradientText">
            <strong>Turn reviews into</strong>{" "}
            <span className="bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#ffffff] via-[#98adf1] to-[#f3ecfe]
                   drop-shadow-[0_0_3px_rgba(243,236,254,0.2)]">
              <strong>rewards</strong>
            </span>
          </h2>

          <h3 className="text-[1.8rem] font-medium text-[rgba(243,236,254,0.87)] mt-2">
            Discover. Share. <span className="text-[#98adf1]">Earn.</span>
          </h3>
        </div>
        <div className="flex gap-3 mt-6 justify-center">
          <a
            href="#download"
            className="text-[#090D20] bg-gradient-to-r from-[#9FA5F1] to-[#9FA5F1] px-3 py-1.5 rounded-[20px] font-medium shadow-[rgba(114,69,186,0.03)_0px_0.5px_0.5px,rgba(114,69,186,0.25)_0px_4px_4px,rgba(255,255,255,0.25)_0px_4px_4px_inset] transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7CE3FA] hover:to-[#A39FF0] hover:text-white"
          >
            Download App
          </a>
          <a
            href="https://discord.com/invite/zypdgGMVu5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#faf7ff] border border-[#98adf1] px-3 py-1.5 rounded-[20px] font-medium transition-all duration-200 ease-out hover:bg-[rgba(152,173,241,0.1)] hover:scale-105"
          >
            Join Discord
          </a>
        </div>

      </motion.div>
    </section>
  )
}

