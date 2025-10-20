"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 w-4/5 max-w-[1200px] rounded-[15px] border-b border-[rgba(243,236,254,0.05)] backdrop-blur-[10px] bg-[rgba(5,0,8,0.4)] flex justify-center"
      data-border="true"
      data-framer-name="Tablet"
      data-hide-scrollbars="true"
    >
      <div className="w-full max-w-[1200px] h-[70px] flex items-center justify-between">
        <div className="h-[40px]">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className="h-[40px] w-auto" width={100} height={60} />
          </Link>
        </div>

        <ul className="flex gap-8 list-none m-0">
          <li>
            <a
              href="#projects"
              className="text-[#f3ecfe] font-medium transition-colors hover:text-white"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#f3ecfe] font-medium transition-colors hover:text-white"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#f3ecfe] font-medium transition-colors hover:text-white"
            >
              FAQ
            </a>
          </li>
        </ul>

        <a
          href="./#download"
          className="text-[#090D20] bg-gradient-to-r from-[#9FA5F1] to-[#9FA5F1] px-5 py-2.5 rounded-[20px] font-medium mr-5 shadow-[rgba(114,69,186,0.03)_0px_0.5px_0.5px,rgba(114,69,186,0.25)_0px_4px_4px,rgba(255,255,255,0.25)_0px_4px_4px_inset] transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7CE3FA] hover:to-[#A39FF0] hover:text-white"
        >
          Download App
        </a>
      </div>
    </nav>
  )
}
