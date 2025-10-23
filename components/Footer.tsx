"use client"

import React from "react"
import Image from "next/image"
import { CiTwitter, CiLinkedin } from "react-icons/ci"
import { FaTelegramPlane } from "react-icons/fa"
import { AiOutlineDiscord } from "react-icons/ai"

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[#2f2f2f] py-20"
      style={{
        background: "linear-gradient(to right, #040404, #040404)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-start items-start text-[#85838b] min-h-[300px] px-6 md:px-10 gap-10 md:gap-32">

        {/* Left Section */}
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex gap-4 mb-10">
            <a
              href="https://x.com/weRate_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85838b] text-2xl hover:text-white transition-colors"
            >
              <CiTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/werate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85838b] text-2xl hover:text-white transition-colors"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://t.me/WeRate_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85838b] text-2xl hover:text-white transition-colors"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://discord.com/invite/zypdgGMVu5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85838b] text-2xl hover:text-white transition-colors"
            >
              <AiOutlineDiscord />
            </a>
          </div>
        </div>

        {/* Menu / Legal / Socials Section */}
        <div className="flex flex-col md:flex-row items-start md:items-start gap-10 md:gap-20 w-full">

          {/* Menu */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-3 text-[#85838b]">
              <li className="hover:text-white transition-colors cursor-pointer">Features</li>
              <li className="hover:text-white transition-colors cursor-pointer">Reviews</li>
              <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-[#85838b]">
              <li>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://whitepaper.werate.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-semibold mb-4">Socials</h3>
            <ul className="space-y-3 text-[#85838b]">
              <li>
                <a
                  href="https://discord.com/invite/zypdgGMVu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/weRate_Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@werateofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
