"use client"

import React from "react"
import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="w-screen  rounded-[30px] overflow-hidden flex justify-center items-center bg-[linear-gradient(180deg,#090c22_1%,#030709_80%,#03070900_100%)] ">
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