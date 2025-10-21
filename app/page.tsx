"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroImage from "@/components/HeroImage";
import Patnership from "@/components/Partnership";
import ReviewSection from "@/components/ReviewSection";
import FeatureCards from "@/components/FeatureCards";
import NewFeatureContainer from "@/components/NewFeatureContainer";
export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <HeroImage/>
    <Patnership/>
    <ReviewSection/>
    <FeatureCards/>
    <NewFeatureContainer/>
   </div>
  );
}
