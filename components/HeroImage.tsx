"use client"

import React from "react"
import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="w-screen h-[750px] rounded-[20px] overflow-hidden flex justify-center items-center">
      <Image
        src="/werate.png"
        alt="Image of Mobile Phones"
        width={1200}       
        height={750}       
        className="rounded-[20px] object-contain object-center"
      />
    </div>
  )
}
