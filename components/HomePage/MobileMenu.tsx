'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { X, ArrowUpRight } from 'lucide-react'
import { useMenuStore } from '@/store/useMenuStore'
import { Button } from '../ui/button'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#blogs' },
]

export const MobileMenu = () => {
  const { isOpen, closeMenu } = useMenuStore()
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([])
  const footerRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    // Ensure initial off-screen state on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.set(overlay, { yPercent: -100, autoAlpha: 0 })
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Animate full menu overlay in
      tl.to(overlay, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.5,
      })
      // Stagger animate nav links
      .fromTo(
        linksRef.current.filter(Boolean),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out' },
        '-=0.2'
      )
      // Animate footer CTA
      .fromTo(
        footerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        '-=0.2'
      )
    } else {
      document.body.style.overflow = ''

      const tl = gsap.timeline({ defaults: { ease: 'power3.in' } })

      tl.to(linksRef.current.filter(Boolean), {
        y: -20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.04,
      })
      .to(overlay, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 0.4,
      }, '-=0.1')
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div
      ref={overlayRef}
      aria-label="Navigation Menu Overlay"
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#1a1a1b] text-white p-8 md:p-16 border-b border-white/10 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#D0FF71] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Navigation</span>
        </div>
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#D0FF71] hover:text-black transition-all duration-300 cursor-pointer"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="my-auto w-full max-w-5xl mx-auto py-8">
        <nav className="flex flex-col gap-4 md:gap-6">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              ref={(el) => {
                linksRef.current[idx] = el
              }}
              onClick={closeMenu}
              className="group flex items-center justify-between text-4xl sm:text-6xl font-bold tracking-tight text-zinc-300 hover:text-[#D0FF71] transition-colors duration-300 border-b border-white/5 pb-4"
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-sm font-normal text-zinc-500 group-hover:text-[#D0FF71] transition-colors">
                  0{idx + 1}
                </span>
                {link.label}
              </span>
              <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D0FF71] transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Footer Section */}
      <div ref={footerRef} className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-white/10">
        <p className="text-zinc-400 text-sm">
          Crafting exceptional digital experiences.
        </p>

        <div className="flex items-center gap-4">
          <Button
            onClick={closeMenu}
            className="bg-[#D0FF71] text-black hover:bg-white font-semibold rounded-full px-6 py-3 transition-colors cursor-pointer"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
