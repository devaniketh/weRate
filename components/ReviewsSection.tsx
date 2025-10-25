"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="mt-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Reviews of the week
      </h2>
      <p className="text-white/70 text-sm">
        Get featured as reviewer of the week and earn awesome prizes!
      </p>

      {/* Animation Wrapper */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {[
          {
            img: "/a1.png",
            name: "Jessica M.",
            tag: "Coffee shop curator ☕️",
            text: "“Morning rush but worth the wait. Oat latte on point, and the barista had jokes for days.”",
          },
          {
            img: "/a2.png",
            name: "Malik D.",
            tag: "Local Legend – Lisbon",
            text: "“Caught the sunset at Rooftop 22. Perfect drinks, good crowd, zero pretense.”",
          },
          {
            img: "/a3.png",
            name: "@blurredlines",
            tag: "Food • Tech • Vibes",
            text: "“Late-night sushi spot that actually delivers past midnight. Fresh rolls, low lights, 10/10.”",
          },
          {
            img: "/a4.png",
            name: "Sienna R.",
            tag: "Freelancer & Full-Time Explorer",
            text: "“Jazz night at the lounge hit different. Live sax, dim lights, and energy you can’t fake.”",
          },
          {
            img: "/a5.png",
            name: "Luna 🌒",
            tag: "Based reviewer",
            text: "“Sunday brunch ran long, but the pancakes hit, and the playlist carried the vibe.”",
          },
          {
            img: "/a6.png",
            name: "notjames.sol",
            tag: "Crypto nomad",
            text: "“Unexpectedly found this thrift shop downtown, left with a jacket and a story.”",
          },
        ].map((r, i) => (
          <motion.div
            key={i}
            className="relative bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start border border-transparent 
            before:absolute before:inset-0 before:rounded-2xl 
            before:bg-[linear-gradient(135deg,rgba(140,170,255,0.25),rgba(255,255,255,0.08))] 
            before:opacity-70 before:blur-[20px] before:-z-10 before:transition-all before:duration-300
            hover:before:opacity-100 hover:before:blur-[24px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-4">
              <Image
                src={r.img}
                alt={r.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col text-left">
                <h2 className="text-[#faf7ff] text-lg font-semibold">{r.name}</h2>
                <p className="text-[#8e9096] text-sm">{r.tag}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-5 ml-[0px]">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>

            <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
              {r.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}



// "use client"

// import React from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function ReviewsSection() {
//   return (
//     <section id = "reviews" className="mt-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
//       <h2 className="text-4xl font-extrabold text-white mb-4">
//         Reviews of the week
//       </h2>
//       <p className="text-white/70 text-sm">
//         Get featured as reviewer of the week and earn awesome prizes!
//       </p>

//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a1.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">Jessica M.</h2>
//               <p className="text-[#8e9096] text-sm">Coffee shop curator ☕️</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Morning rush but worth the wait. Oat latte on point, and the barista had jokes for days.”
//           </p>
//         </div>
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a2.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">Malik D.</h2>
//               <p className="text-[#8e9096] text-sm">Local Legend – Lisbon</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Caught the sunset at Rooftop 22. Perfect drinks, good crowd, zero pretense.”
//           </p>
//         </div>
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a3.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">@blurredlines</h2>
//               <p className="text-[#8e9096] text-sm">Food • Tech • Vibes</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Late-night sushi spot that actually delivers past midnight. Fresh rolls, low lights, 10/10.”
//           </p>
//         </div>
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a4.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">Sienna R.</h2>
//               <p className="text-[#8e9096] text-sm">Freelancer & Full-Time Explorer</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Jazz night at the lounge hit different. Live sax, dim lights, and energy you can’t fake.”
//           </p>
//         </div>
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a5.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">Luna 🌒</h2>
//               <p className="text-[#8e9096] text-sm">Based reviewer</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Sunday brunch ran long, but the pancakes hit, and the playlist carried the vibe.”
//           </p>
//         </div>
//         <div className="bg-[#050e12] rounded-2xl p-6 h-52 flex flex-col items-start">
//           <div className="flex items-center gap-4">
//             <Image src="/a6.png" alt="" width={50} height={50} className="rounded-full" />
//             <div className="flex flex-col text-left">
//               <h2 className="text-[#faf7ff] text-lg font-semibold">notjames.sol</h2>
//               <p className="text-[#8e9096] text-sm">Crypto nomad</p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-5 ml-[0px]">
//             <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
//           </div>
//           <p className="text-[#faf7ff] text-base mt-4 ml-[0px] text-left">
//             “Unexpectedly found this thrift shop downtown, left with a jacket and a story.”
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

