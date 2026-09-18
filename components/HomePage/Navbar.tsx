'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'
import { useMenuStore } from '@/store/useMenuStore'

import Man from "@/public/images/Oscar.jpeg"

export const Navbar = () => {
  const { toggleMenu, isOpen } = useMenuStore()

  return (
    <>
      <header id="hero-navbar" className="pt-6 pb-2 text-white relative z-40 px-4">
        <div className="flex justify-between items-center gap-3 md:gap-6 bg-[#1a1a1b] border border-white/10 rounded-full py-2 px-3 sm:px-5 w-full max-w-[500px] lg:max-w-[560px] mx-auto transition-all duration-300">
          
          {/* Avatar / Logo */}
          <div className="shrink-0 flex items-center">
            <Image 
              src={Man}
              alt="Duncan Robert Avatar"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover aspect-square border border-white/20"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-300">
              <li><Link href="/" className="hover:text-[#D0FF71] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#D0FF71] transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-[#D0FF71] transition-colors">Projects</Link></li>
              <li><Link href="#blogs" className="hover:text-[#D0FF71] transition-colors">Blogs</Link></li>
            </ul>
          </nav>

          {/* Desktop Contact CTA Button */}
          <div className="hidden md:block shrink-0">
            <Link href="#contact">
              <Button className="bg-white text-black hover:bg-[#D0FF71] hover:text-black px-6 py-2 rounded-full cursor-pointer transition-all duration-300 text-sm border-0">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-[#D0FF71] hover:text-black text-white transition-all duration-300 cursor-pointer border border-white/10"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* GSAP Fullscreen Mobile Menu Overlay */}
      <MobileMenu />
    </>
  )
}


