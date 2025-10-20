"use client"

import React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav
      className="navbar"
      data-border="true"
      data-framer-name="Tablet"
      data-hide-scrollbars="true"
    >
      <div className="navbar-content">
        {/* Left - Logo */}
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo-image" width={100} height={60}/>
        </div>

        {/* Center - Links */}
        <ul className="navbar-links">
          <li><a href="#projects">Features</a></li>
          <li><a href="#about">Reviews</a></li>
          <li><a href="#contact">FAQ</a></li>
        </ul>

        {/* Right - Download Button */}
        <a href="./#download" className="download-btn">
          Download App
        </a>
      </div>
    </nav>
  )
}
