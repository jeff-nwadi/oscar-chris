'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { useMenuStore } from '@/store/useMenuStore'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

import Man from "@/public/images/Oscar.jpeg"

export const Navbar = () => {
  const { toggleMenu, isOpen } = useMenuStore()
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 80)
    }

    handleScroll() // initial check

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 pt-4 pb-2 px-4 bg-hero-bg">
        <div
          id="hero-navbar"
          className="flex items-center justify-between gap-3 md:gap-4 bg-[#1a1a1b]/90 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 sm:px-4 w-full max-w-[500px] lg:max-w-[560px] mx-auto transition-all duration-300"
        >

          {/* Avatar / Logo */}
          <div className="shrink-0 flex items-center">
            <Image
              src={Man}
              alt="Oscar Chris Avatar"
              width={44}
              height={44}
              className="w-10 h-10 rounded-full object-cover object-top border border-white/20"
            />
          </div>

          {/* Center content — nav links OR available for work */}
          <div className="flex-1 flex items-center justify-center min-w-0 transition-all duration-300">
            {!scrolledDown ? (
              /* Nav links — desktop only */
              <nav className="animate-fadeIn">
                <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-zinc-300">
                  <li><Link href="/" className="hover:text-lemon transition-colors duration-200">Home</Link></li>
                  <li><Link href="#about" className="hover:text-lemon transition-colors duration-200">About</Link></li>
                  <li><Link href="#projects" className="hover:text-lemon transition-colors duration-200">Projects</Link></li>
                  <li><Link href="#blogs" className="hover:text-lemon transition-colors duration-200">Blogs</Link></li>
                </ul>
              </nav>
            ) : (
              /* Available for Work badge */
              <div className="flex items-center gap-2 animate-fadeIn">
                <span className="w-2 h-2 shrink-0 rounded-full bg-lemon animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-lemon tracking-wide whitespace-nowrap select-none">
                  Available for Work
                </span>
              </div>
            )}
          </div>

          {/* Right side — Contact (scrolled up, desktop) or hamburger */}
          <div className="shrink-0 flex items-center gap-2">
            {!scrolledDown ? (
              <>
                <div className="hidden md:block">
                  <Link href="#contact">
                    <InteractiveHoverButton text="Contact" className="w-28 py-2" />
                  </Link>
                </div>
                <button
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation Menu"
                  aria-expanded={isOpen}
                  className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-lemon hover:text-black text-white transition-all duration-300 cursor-pointer border border-white/10"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </>
            ) : (
              <button
                onClick={toggleMenu}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
                className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-lemon hover:text-black text-white transition-all duration-300 cursor-pointer border border-white/10"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  )
}
