'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'
import { useMenuStore } from '@/store/useMenuStore'

import Man from "@/public/images/Man.png"

export const Navbar = () => {
  const { toggleMenu, isOpen } = useMenuStore()

  return (
    <>
      <div className='py-6 md:py-8 text-text relative z-40 px-4'>
        <div className='flex justify-between items-center gap-4 md:gap-12 bg-[#1a1a1b] rounded-full py-2 px-4 sm:px-6 w-full max-w-[70%] sm:max-w-[60%] md:max-w-[600px] lg:max-w-[720px] mx-auto transition-all duration-300'>
          
          {/* Avatar / Logo */}
          <div className="shrink-0">
            <Image 
              src={Man}
              alt='Avatar'
              width={50}
              height={50}
              className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover aspect-square border border-white/20'
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-5 lg:gap-8 text-[14px] text-zinc-300'>
              <Link href="/" className="hover:text-[#D0FF71] transition-colors">Home</Link>
              <Link href="#about" className="hover:text-[#D0FF71] transition-colors">About</Link>
              <Link href="#projects" className="hover:text-[#D0FF71] transition-colors">Projects</Link>
              <Link href="#blogs" className="hover:text-[#D0FF71] transition-colors">Blogs</Link>
            </ul>
          </nav>

          {/* Desktop Contact CTA Button */}
          <div className='hidden md:block shrink-0'>
            <Button className="bg-white text-black px-6 py-4 rounded-full hover:bg-[#D0FF71] cursor-pointer transition-all duration-300 font-extrabold text-base font-heading tracking-wide">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button (Hidden on Desktop) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center p-2.5 rounded-full bg-white/10 hover:bg-[#D0FF71] hover:text-black text-white transition-all duration-300 cursor-pointer border border-white/10"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* GSAP Fullscreen Mobile Menu Overlay */}
      <MobileMenu />
    </>
  )
}
