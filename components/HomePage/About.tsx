'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

// Custom Twitter (X) Icon SVG Component
const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Custom Instagram Icon SVG Component
const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

// Custom Behance Icon SVG Component
const BehanceIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 7h-7V5h7v2zm-1.7 6.4c-.2-.6-.6-1.1-1.1-1.4-.5-.3-1.2-.5-1.9-.5-1 0-1.8.3-2.5.9-.6.6-1 1.5-1 2.6 0 1.1.3 2 1 2.6.7.6 1.5 1 2.6 1 1.2 0 2.2-.4 2.8-1.2h-2.1c-.2.3-.6.5-1.1.5-.5 0-.9-.2-1.2-.5-.3-.3-.4-.8-.4-1.3h6c0-.2.1-.5.1-.7 0-.7-.1-1.4-.3-2zm-4.7.7c.1-.4.3-.7.6-.9.3-.2.6-.3 1-.3.4 0 .8.1 1.1.3.3.2.4.6.5 1h-3.2zM8.7 13.5c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.4-.4H4.5v3.5h4.2zm.3-6c.6 0 1.1-.2 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.1-.3-.2-.8-.4-1.4-.4H4.5v3.1H9zm2.4 3.7c.6.4 1 1.1 1 1.9 0 1.1-.4 1.9-1.1 2.5-.7.6-1.7.9-3 .9H1v-12h7c1.2 0 2.2.3 2.9.8.7.5 1 1.2 1 2.1 0 .7-.2 1.3-.7 1.8-.3.3-.8.6-1.4.8z" />
  </svg>
)

// Custom Dribbble Icon SVG Component
const DribbbleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.fromTo(
              '.about-header',
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 0.8 }
            )
              .fromTo(
                '.about-stat-item',
                { autoAlpha: 0, y: 30, scale: 0.9 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
                '-=0.4'
              )
              .fromTo(
                '.about-contact-row',
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.6 },
                '-=0.3'
              )
              .fromTo(
                '.about-social-icon',
                { autoAlpha: 0, scale: 0.7, y: 15 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08 },
                '-=0.4'
              )
              .fromTo(
                '.about-cta-btn',
                { autoAlpha: 0, scale: 0.85, y: 15 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' },
                '-=0.3'
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

  return (
    <section id="about" ref={sectionRef} className="w-full bg-[#252526] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="about-header">
          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            ABOUT ME
          </h2>

          {/* Bio Subtitle */}
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg leading-relaxed font-normal mb-8 sm:mb-10">
            Hi, I'm Oscar — a digital designer and Framer developer passionate about crafting meaningful and impactful digital experiences.
          </p>
        </div>

        {/* Stat Counters Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mb-8 sm:mb-10">
          <div className="about-stat-item">
            <span className="font-condensed text-4xl sm:text-5xl md:text-6xl font-normal text-lemon block leading-none select-none">
              5
            </span>
            <span className="text-xs sm:text-sm text-zinc-300 font-medium block mt-1 leading-snug">
              Years of Experience
            </span>
          </div>

          <div className="about-stat-item">
            <span className="font-condensed text-4xl sm:text-5xl md:text-6xl font-normal text-lemon block leading-none select-none">
              20+
            </span>
            <span className="text-xs sm:text-sm text-zinc-300 font-medium block mt-1 leading-snug">
              Completed Projects
            </span>
          </div>

          <div className="about-stat-item">
            <span className="font-condensed text-4xl sm:text-5xl md:text-6xl font-normal text-lemon block leading-none select-none">
              30+
            </span>
            <span className="text-xs sm:text-sm text-zinc-300 font-medium block mt-1 leading-snug">
              Clients Worldwide
            </span>
          </div>
        </div>

        {/* Contact Details Row */}
        <div className="about-contact-row flex flex-col sm:flex-row gap-4 sm:gap-12 mb-8 text-xs sm:text-sm text-zinc-300">
          <div>
            <span className="text-zinc-400 block mb-0.5">Call Today :</span>
            <a
              href="tel:+15551234567"
              className="font-medium text-white hover:text-lemon transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </div>

          <div>
            <span className="text-zinc-400 block mb-0.5">Email :</span>
            <a
              href="mailto:designer@example.com"
              className="font-medium text-white hover:text-lemon transition-colors"
            >
              designer@example.com
            </a>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-4 mb-8 text-zinc-300">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="about-social-icon p-2 rounded-full border border-white/10 hover:border-lemon hover:text-lemon transition-all duration-300"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="about-social-icon p-2 rounded-full border border-white/10 hover:border-lemon hover:text-lemon transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="about-social-icon p-2 rounded-full border border-white/10 hover:border-lemon hover:text-lemon transition-all duration-300"
          >
            <BehanceIcon className="w-4 h-4" />
          </a>

          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="about-social-icon p-2 rounded-full border border-white/10 hover:border-lemon hover:text-lemon transition-all duration-300"
          >
            <DribbbleIcon className="w-4 h-4" />
          </a>
        </div>

        {/* CTA Button: MY STORY */}
        <div>
          <Link
            href="#story"
            className="about-cta-btn inline-block border border-white/20 hover:border-lemon hover:text-lemon text-zinc-300 font-condensed text-base tracking-wider rounded-full px-6 py-2 transition-all duration-300 uppercase cursor-pointer"
          >
            MY STORY
          </Link>
        </div>
      </div>
    </section>
  )
}
