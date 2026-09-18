'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Man from "@/public/images/Oscar.jpeg"

export const initHeroAnimation = () => {
  // Check prefers-reduced-motion for accessibility
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Ensure elements are immediately visible without animation
      gsap.set(['#hero-navbar', '#hero-left-content', '#hero-portrait-frame', '#hero-right-content', '#hero-badge', '#hero-toggle'], {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      })
      return
    }
  }

  // Set initial hidden/offset states (autoAlpha used only for text columns, opacity 1 for portrait & badge)
  gsap.set('#hero-navbar', { autoAlpha: 0, y: -10 })
  gsap.set('#hero-left-content', { autoAlpha: 0, x: -25 })
  gsap.set('#hero-portrait-frame', { autoAlpha: 1, scale: 0.88 })
  gsap.set('#hero-right-content', { autoAlpha: 0, x: 25 })
  gsap.set('#hero-badge', { autoAlpha: 1, scale: 0.6 })

  // Master entrance timeline — smooth, elegant timing
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

  tl.to('#hero-navbar', {
    autoAlpha: 1,
    y: 0,
    duration: 0.55,
  })
    .to(
      '#hero-left-content',
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.55,
      },
      '-=0.35'
    )
    .to(
      '#hero-portrait-frame',
      {
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.3)',
      },
      '-=0.4'
    )
    .to(
      '#hero-right-content',
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.55,
      },
      '-=0.4'
    )
    .to(
      '#hero-badge',
      {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.5)',
      },
      '-=0.3'
    )

  // Subtle continuous yoyo floating animation on "Hi" badge
  gsap.to('#hero-badge', {
    y: -4,
    duration: 2.0,
    ease: 'sine.easeInOut',
    yoyo: true,
    repeat: -1,
  })

  return tl
}

export const Hero = () => {
  const [isLightMode, setIsLightMode] = useState(false)
  const [showWave, setShowWave] = useState(false)

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => {
      const nextState = !prev
      if (nextState) {
        document.documentElement.classList.add('light-mode-override')
      } else {
        document.documentElement.classList.remove('light-mode-override')
      }
      return nextState
    })
  }, [])

  useEffect(() => {
    // Run entrance animation sequence on mount
    const timer = setTimeout(() => {
      initHeroAnimation()
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  // Automatically cycle badge state between "Hi" and "👋" on a fast 2-second timer
  useEffect(() => {
    const badgeInterval = setInterval(() => {
      setShowWave((prev) => !prev)
    }, 2000)
    return () => clearInterval(badgeInterval)
  }, [])

  return (
    <div className="min-h-screen bg-[#252526] text-white transition-colors duration-500 flex flex-col justify-between">
      {/* Main Hero Container */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto w-full">
        {/* Split Typography & Portrait Layout */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 lg:items-center">
          
          {/* Left Column: Name Label + DIGITAL Headline */}
          <div
            id="hero-left-content"
            className="w-full lg:w-auto flex-1 flex flex-col items-center text-center sm:items-start sm:text-left lg:items-start lg:text-left z-10 lg:pr-2 xl:pr-4 relative"
          >
            <span className="text-base sm:text-[24px] lg:text-[28px] font-heading text-white tracking-wider font-light uppercase mb-3 sm:mb-0 block sm:absolute sm:bottom-full sm:left-0 sm:pb-4 text-center sm:text-left">
              Oscar Christopher
            </span>
            <h1 className="font-condensed text-[20vw] sm:text-[16vw] lg:text-[6.5rem] xl:text-[8rem] font-normal leading-[0.82] tracking-wide text-white uppercase select-none text-center sm:text-left">
              DIGITAL
            </h1>
          </div>

          {/* Center Column: Portrait Image & Accent Badge */}
          <div className="shrink-0 my-4 lg:my-0 relative flex justify-center items-center z-20">
            <div
              id="hero-portrait-frame"
              className="relative w-[230px] sm:w-[270px] md:w-[300px] lg:w-[310px] xl:w-[340px] aspect-[3/4] rounded-[2.2rem] sm:rounded-[2.6rem] bg-[#333336] border border-white/10 overflow-hidden"
            >
              <Image
                src={Man}
                alt="Oscar Christopher - Digital Designer Portrait"
                fill
                priority
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 310px, 340px"
                className="object-cover object-center transform scale-[1.02] hover:scale-[1.05] transition-transform duration-700"
              />
            </div>

            {/* Circular Accent Badge ("Hi" <-> 👋 Fast Auto Timer Toggle) */}
            <div
              id="hero-badge"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              title="Click to get in touch!"
              className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 lg:-bottom-6 lg:-left-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-lemon flex items-center justify-center font-bold text-xl sm:text-2xl lg:text-3xl z-30 select-none text-black cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
                <span
                  className={`transition-all duration-200 ease-out transform ${
                    showWave ? 'opacity-0 scale-50 rotate-12 absolute' : 'opacity-100 scale-100 rotate-0'
                  }`}
                >
                  Hi
                </span>
                <span
                  className={`transition-all duration-200 ease-out transform ${
                    showWave
                      ? 'opacity-100 scale-100 rotate-0 animate-wave'
                      : 'opacity-0 scale-50 -rotate-12 absolute'
                  }`}
                >
                  👋
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: DESIGNER Headline + Short Description */}
          <div
            id="hero-right-content"
            className="w-full lg:w-auto flex-1 flex flex-col items-center text-center sm:items-end sm:text-right lg:items-start lg:text-left z-10 lg:pl-2 xl:pl-4"
          >
            <h1 className="font-condensed text-[20vw] sm:text-[16vw] lg:text-[6.5rem] xl:text-[8rem] font-normal leading-[0.82] tracking-wide text-white uppercase select-none text-center sm:text-right lg:text-left">
              DESIGNER
            </h1>
            <p className="text-gray-300 text-base sm:text-[24px] font-normal max-w-[240px] leading-relaxed mt-2 sm:mt-4 lg:mt-5 text-center sm:text-right lg:text-left mx-auto sm:ml-auto sm:mr-0 lg:mx-0">
              I'm a digital designer and Video Editor
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
