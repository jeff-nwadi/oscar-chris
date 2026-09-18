'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronUp } from 'lucide-react'
import { gsap } from 'gsap'

interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  skills?: string[]
}

const SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux',
    number: '1.',
    title: 'UI/UX DESIGN',
    description:
      'Creating intuitive, user-centered web and mobile interfaces that balance sleek aesthetics with seamless functionality. Focused on user research, wireframing, high-fidelity interactive prototyping, and design systems.',
    skills: ['User Research', 'Wireframing', 'Figma Prototyping', 'Design Systems'],
  },
  {
    id: 'graphic-design',
    number: '2.',
    title: 'GRAPHIC DESIGN',
    description:
      'Crafting compelling visual assets, digital artwork, publication designs, and social media media that command attention and communicate brand narratives effectively.',
    skills: ['Visual Storytelling', 'Poster & Print', 'Social Media Assets', 'Vector Illustration'],
  },
  {
    id: 'web-design',
    number: '3.',
    title: 'WEB DESIGN',
    description:
      'Designing and developing modern, responsive, high-converting websites enriched with dynamic micro-interactions, smooth GSAP animations, and optimized performance.',
    skills: ['Responsive Layouts', 'Framer & Webflow', 'Next.js & React', 'GSAP & Framer Motion'],
  },
  {
    id: 'branding',
    number: '4.',
    title: 'BRANDING',
    description:
      'Building memorable brand identities from the ground up, including logo design, typography curation, cohesive color palettes, brand guidelines, and comprehensive design tokens.',
    skills: ['Logo & Mark Design', 'Typography & Color Systems', 'Brand Strategy', 'Brand Guidelines'],
  },
]

export const WhatICanDo = () => {
  const [openId, setOpenId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              '.service-item',
              { autoAlpha: 0, y: 15 },
              { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06 }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="services" ref={sectionRef} className="w-full bg-[#252526] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="service-item mb-8 sm:mb-12">
          <h2 className="font-condensed text-2xl sm:text-3xl md:text-5xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="text-zinc-400 text-base sm:text-[18px] max-w-md leading-relaxed font-normal">
            As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id

            return (
              <div
                key={service.id}
                className="service-item border-b border-white/10 transition-colors duration-300"
              >
                {/* Header Bar */}
                <button
                  onClick={() => toggleItem(service.id)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-condensed text-lg sm:text-2xl md:text-3xl font-normal text-white uppercase select-none group-hover:text-lemon transition-colors duration-300">
                      {service.number}
                    </span>
                    <h3 className="font-condensed text-base sm:text-xl md:text-2xl font-normal text-white uppercase select-none tracking-wider group-hover:text-lemon transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="shrink-0 ml-4 p-1.5 rounded-full border border-white/10 group-hover:border-lemon text-white group-hover:text-lemon transition-all duration-300">
                    <ChevronUp
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-4 sm:pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 sm:pl-10 max-w-2xl">
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                        {service.description}
                      </p>

                      {service.skills && (
                        <div className="flex flex-wrap gap-2">
                          {service.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
