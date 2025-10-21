"use client"

import React from "react"

export default function FeatureCards() {
    return (
        <section className="mt-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">

                <div className="bg-[#040404] rounded-lg w-full md:w-[600px] flex flex-col overflow-hidden p-9">
                    <div className="flex-1 overflow-hidden rounded-lg border border-[#101010]  ">
                        <img
                            src="/i1.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-white font-semibold text-2xl text-left">
                        Claim your spots
                    </div>
                    <div className="text-[#959398] text-lg font-normal text-left mt-2">
                        Complete weekly quests by checking in everywhere
                    </div>
                </div>

                <div className="bg-[#040404] rounded-lg w-full md:w-[600px] flex flex-col overflow-hidden p-9">
                    <div className="flex-1 overflow-hidden rounded-lg border border-[#101010]  ">
                        <img
                            src="/I2.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-white font-semibold text-2xl text-left">
                        We Reward Quality
                    </div>
                    <div className="text-[#959398] text-lg font-normal text-left mt-2">
                        Our AI boosts authentic reviews. Earn more when you keep it real.
                    </div>
                </div>

                <div className="bg-[#040404] rounded-lg w-full md:w-[600px] flex flex-col overflow-hidden p-9">
                    <div className="flex-1 overflow-hidden rounded-lg border border-[#101010]  ">
                        <img
                            src="/i3.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-white font-semibold text-2xl text-left">
                        Climb the leaderboard
                    </div>
                    <div className="text-[#959398] text-lg font-normal text-left mt-2">
                        Beat your friends and claim awesome prizes
                    </div>
                </div>


                <div className="bg-[#040404] rounded-lg w-full md:w-[600px] flex flex-col overflow-hidden p-9">
                    <div className="flex-1 overflow-hidden rounded-lg border border-[#101010]  ">
                        <img
                            src="/i4.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-4 text-white font-semibold text-2xl text-left">
                        Build your Terry
                    </div>
                    <div className="text-[#959398] text-lg font-normal text-left mt-2">
                     Maximize rewards and progress
                    </div>
                </div>

            </div>
        </section>
    )
}
