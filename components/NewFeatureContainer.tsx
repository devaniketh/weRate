"use client"

import React from "react"
import { IoTrophyOutline } from "react-icons/io5"
import { FaGift , FaStar } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function NewFeatureContainer() {
  return (
    <section className="mt-16 py-16 max-w-6xl mx-auto px-4">
      <div
        className="bg-[#050e12] rounded-3xl p-10 h-[650px] flex flex-col md:flex-row items-center mb-20"
        data-framer-name="Container"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-2">
          <h2 className="text-white text-4xl font-extrabold mb-4 ">
            Claim your spots, earn from the crowd
          </h2>
          <p className="text-white/70 text-lg">
            Turn your favorite venues into your territory. Check in, claim spots, and earn passive rewards whenever others visit and review them.
          </p>
          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <IoTrophyOutline className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Become a Patron: Lock in your spot and start earning from every visit.
            </p>
          </div>
          <div className="border-b border-[#111a1e] mt-8 mb-8 w-full"></div>
          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <FaGift className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Earn passively: Get credit rewards as others check in at your venues.
            </p>
          </div>
          <div className="border-b border-[#111a1e] mt-8 mb-8 w-full"></div>
          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <FiCheck className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Stay competitive: Patron status can change, defend your spots and climb the ranks.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-0">
          <img
            src="/mobile.png"
            alt="Feature Graphic"
            className="w-full h-full object-contain rounded-3xl"
          />
        </div>
      </div>

      {/*second div */}


      <div
        className="bg-[#050e12] rounded-3xl p-10 h-[650px] flex flex-col md:flex-row-reverse items-center"
        data-framer-name="Container"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-2">
          <h2 className="text-white text-4xl font-extrabold mb-4">
            Build your in-app avatar
          </h2>
          <p className="text-white/70 text-lg">
            Customize your avatar and level up as you explore and review.
          </p>

          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <IoIosColorPalette className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Unlock traits: Earn hats, outfits, accessories and more from quests or events.
            </p>
          </div>
          <div className="border-b border-[#111a1e] mt-8 mb-8 w-full"></div>

          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <BsFillLightningChargeFill className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Trait packs: Collect themed sets that boost your profile’s look and rarity.
            </p>
          </div>
          <div className="border-b border-[#111a1e] mt-8 mb-8 w-full"></div>

          <div className="flex items-center mt-6">
            <div className="bg-[#99aef2] rounded-lg p-1 inline-flex items-center justify-center">
              <FaStar className="text-black text-3xl" />
            </div>
            <p className="text-white text-lg ml-4">
              Evolve over time: Each review and check-in grows your Terry’s level and flair.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-0">
          <img
            src="/mobile1.png"
            alt="Feature Graphic"
            className="w-full h-full object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}