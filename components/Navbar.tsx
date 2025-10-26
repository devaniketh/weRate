"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300)
  }, [])

  return (
    <nav
      className={`fixed top-[20px] left-1/2 -translate-x-1/2 z-50 w-11/12 sm:w-4/5 max-w-[1200px] rounded-[18px] border border-[rgba(243,236,254,0.1)] backdrop-blur-[15px] bg-[rgba(10,5,20,0.55)] flex justify-center overflow-hidden shadow-[0_0_20px_rgba(160,160,255,0.08)] transition-all duration-700 ${loaded
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-0 -translate-y-4 scale-95 blur-sm"
        } animate-glowPulse`}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#9FA5F1,rgba(124,227,250,0.2),#A39FF0)] opacity-20 animate-gradientSweep rounded-[18px]" />

      <div className="absolute -inset-[1px] rounded-[18px] bg-[radial-gradient(circle_at_50%_0%,rgba(163,159,240,0.35)_0%,transparent_70%)] blur-xl opacity-40 animate-floatGlow -z-10" />

      <div className="relative w-full max-w-[1200px] h-[70px] flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 px-5">
        <div className="h-[40px] flex-shrink-0 transition-transform duration-700 hover:scale-110 hover:rotate-[2deg]">
          <Link href="/">
            <Image src="/logo1.png" alt="Logo" className="h-[40px] w-auto" width={100} height={60} />
          </Link>
        </div>

        <ul className="flex flex-col sm:flex-row gap-5 sm:gap-9 items-center text-center sm:text-left">
          {["Features", "Reviews", "FAQ"].map((item, i) => (
            <li key={i} className="group relative transition-all duration-300">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#e7e3f9] font-medium transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(160,160,255,0.7)]"
              >
                {item}
              </a>
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#7CE3FA] to-[#A39FF0] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <a
          href="./#download"
          className="text-[#090D20] bg-gradient-to-r from-[#A39FF0] to-[#7CE3FA] px-5 sm:px-6 py-2.5 rounded-[22px] font-semibold mt-2 sm:mt-0 shadow-[0_0_10px_rgba(163,159,240,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(163,159,240,0.8)] hover:brightness-110 animate-buttonPulse"
        >
          Download App
        </a>
      </div>

      <style jsx global>{`
        @keyframes gradientSweep {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 15px rgba(160, 160, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 25px rgba(160, 160, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 15px rgba(160, 160, 255, 0.1);
          }
        }
        @keyframes floatGlow {
          0% {
            opacity: 0.3;
            transform: translateY(0px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-4px);
          }
          100% {
            opacity: 0.3;
            transform: translateY(0px);
          }
        }
        @keyframes buttonPulse {
          0% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
          100% {
            filter: brightness(1);
          }
        }
        .animate-gradientSweep {
          background-size: 200% 200%;
          animation: gradientSweep 8s ease-in-out infinite;
        }
        .animate-glowPulse {
          animation: glowPulse 5s ease-in-out infinite;
        }
        .animate-floatGlow {
          animation: floatGlow 6s ease-in-out infinite;
        }
        .animate-buttonPulse {
          animation: buttonPulse 4s ease-in-out infinite;
        }
      `}</style>
    </nav>
  )
}
