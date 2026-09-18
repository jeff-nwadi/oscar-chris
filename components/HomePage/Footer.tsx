'use client'

import React from 'react'
import Image from 'next/image'

import Man from '@/public/images/Oscar.jpeg'

// Social Icons (SVG-based, no purple)
const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const BehanceIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 7h-7V5h7v2zm-1.7 6.4c-.2-.6-.6-1.1-1.1-1.4-.5-.3-1.2-.5-1.9-.5-1 0-1.8.3-2.5.9-.6.6-1 1.5-1 2.6 0 1.1.3 2 1 2.6.7.6 1.5 1 2.6 1 1.2 0 2.2-.4 2.8-1.2h-2.1c-.2.3-.6.5-1.1.5-.5 0-.9-.2-1.2-.5-.3-.3-.4-.8-.4-1.3h6c0-.2.1-.5.1-.7 0-.7-.1-1.4-.3-2zm-4.7.7c.1-.4.3-.7.6-.9.3-.2.6-.3 1-.3.4 0 .8.1 1.1.3.3.2.4.6.5 1h-3.2zM8.7 13.5c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.4-.4H4.5v3.5h4.2zm.3-6c.6 0 1.1-.2 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.1-.3-.2-.8-.4-1.4-.4H4.5v3.1H9zm2.4 3.7c.6.4 1 1.1 1 1.9 0 1.1-.4 1.9-1.1 2.5-.7.6-1.7.9-3 .9H1v-12h7c1.2 0 2.2.3 2.9.8.7.5 1 1.2 1 2.1 0 .7-.2 1.3-.7 1.8-.3.3-.8.6-1.4.8z" />
  </svg>
)

const DribbbleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#1a1a1b] border-t border-white/10 text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Top Bar: Email | Phone | Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          {/* Email */}
          <div>
            <span className="text-zinc-500 text-xs font-medium block mb-1">Email :</span>
            <a
              href="mailto:designer@example.com"
              className="text-sm font-medium text-white hover:text-lemon transition-colors"
            >
              designer@example.com
            </a>
          </div>

          {/* Call Today */}
          <div>
            <span className="text-zinc-500 text-xs font-medium block mb-1">Call Today :</span>
            <a
              href="tel:+15551234567"
              className="text-sm font-medium text-white hover:text-lemon transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </div>

          {/* Social */}
          <div>
            <span className="text-zinc-500 text-xs font-medium block mb-2">Social :</span>
            <div className="flex items-center gap-3 text-zinc-300">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-lemon transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-lemon transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="hover:text-lemon transition-colors">
                <BehanceIcon />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="hover:text-lemon transition-colors">
                <DribbbleIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Bar: Copyright + Created By */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <span className="text-zinc-500 text-xs font-normal">
            © Copyright {year}. All Rights Reserved by Oscar.
          </span>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs">Created by</span>
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20">
              {/* <Image src={Man} alt="Oscar Chris" fill className="object-cover object-top" /> */}
            </div>
            <span className="text-sm font-medium text-white hover:text-lemon transition-colors cursor-default">
              Jefferson Nwadi
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
