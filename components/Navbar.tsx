"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 w-11/12 sm:w-4/5 max-w-[1200px] rounded-[15px] border-b border-[rgba(243,236,254,0.05)] backdrop-blur-[10px] bg-[rgba(5,0,8,0.4)] flex justify-center"
      data-border="true"
      data-framer-name="Tablet"
      data-hide-scrollbars="true"
    >
      <div className="w-full max-w-[1200px] h-[70px] flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
        <div className="h-[40px] flex-shrink-0">
          <Link href="/">
            <Image src="/logo1.png" alt="Logo" className="h-[40px] w-auto" width={100} height={60} />
          </Link>
        </div>

        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 list-none m-0 items-center text-center sm:text-left">
          <li>
            <a
              href="#features"
              className="text-[#f3ecfe] font-medium transition-colors hover:text-white"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#reviews"
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
          className="text-[#090D20] bg-gradient-to-r from-[#9FA5F1] to-[#9FA5F1] px-4 sm:px-5 py-2 sm:py-2.5 rounded-[20px] font-medium mt-2 sm:mt-0 shadow-[rgba(114,69,186,0.03)_0px_0.5px_0.5px,rgba(114,69,186,0.25)_0px_4px_4px,rgba(255,255,255,0.25)_0px_4px_4px_inset] transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#7CE3FA] hover:to-[#A39FF0] hover:text-white"
        >
          Download App
        </a>
      </div>
    </nav>
  )
}