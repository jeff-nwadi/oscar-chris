'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { gsap } from 'gsap'

interface Review {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'John Harris',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content:
      'Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Lee',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content:
      'He took the time to understand our goals and delivered a design that resonated perfectly with our audience.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content:
      'His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Laura Bennett',
    role: 'Small Business Owner',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    content:
      'As a small business owner, I appreciated how stress-free Duncan made the process.',
    rating: 5,
  },
]

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.fromTo(
              '.testimonials-header',
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 0.8 }
            ).fromTo(
              '.bento-card',
              { autoAlpha: 0, y: 30, scale: 0.95 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
              '-=0.4'
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
    <section id="testimonials" ref={sectionRef} className="w-full bg-[#252526] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="testimonials-header mb-8 sm:mb-12">
          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            WHAT MY CLIENTS SAY
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            Here's what my clients have shared about their experiences working with me. Their trust and satisfaction motivate me to continue delivering designs that make an impact.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Review 1 */}
          <div className="bento-card bg-zinc-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-lemon/40 transition-all duration-300">
            <div>
              <div className="flex gap-1 text-lemon mb-4">
                {[...Array(REVIEWS[0].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{REVIEWS[0].content}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src={REVIEWS[0].avatar} alt={REVIEWS[0].name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">{REVIEWS[0].name}</h4>
                <span className="text-xs text-zinc-400 font-normal">{REVIEWS[0].role}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Review 2 */}
          <div className="bento-card bg-zinc-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-lemon/40 transition-all duration-300">
            <div>
              <div className="flex gap-1 text-lemon mb-4">
                {[...Array(REVIEWS[1].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{REVIEWS[1].content}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src={REVIEWS[1].avatar} alt={REVIEWS[1].name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">{REVIEWS[1].name}</h4>
                <span className="text-xs text-zinc-400 font-normal">{REVIEWS[1].role}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Stat Highlight Card (Satisfaction Rate) */}
          <div className="bento-card bg-[#1E1F21] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] hover:border-lemon/40 transition-all duration-300">
            <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed">
              I've worked with 50+ happy clients
            </p>
            <div>
              <span className="font-condensed text-5xl sm:text-6xl md:text-7xl font-normal text-lemon block leading-none select-none mb-1 tracking-wide">
                100%
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal">Satisfaction Rate</span>
            </div>
          </div>

          {/* Card 4: Stat Highlight Card (Growth) */}
          <div className="bento-card bg-lemon text-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] shadow-lg hover:bg-lemon/90 transition-all duration-300">
            <p className="text-black/90 text-xs sm:text-sm font-medium leading-relaxed">
              My work helped clients grow their revenue by 200%
            </p>
            <div>
              <span className="font-condensed text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-black block leading-none select-none mb-1">
                200%
              </span>
              <span className="text-xs text-black/80 font-medium">Growth</span>
            </div>
          </div>

          {/* Card 5: Review 3 */}
          <div className="bento-card bg-zinc-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-lemon/40 transition-all duration-300">
            <div>
              <div className="flex gap-1 text-lemon mb-4">
                {[...Array(REVIEWS[2].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{REVIEWS[2].content}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src={REVIEWS[2].avatar} alt={REVIEWS[2].name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">{REVIEWS[2].name}</h4>
                <span className="text-xs text-zinc-400 font-normal">{REVIEWS[2].role}</span>
              </div>
            </div>
          </div>

          {/* Card 6: Review 4 */}
          <div className="bento-card bg-zinc-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-lemon/40 transition-all duration-300">
            <div>
              <div className="flex gap-1 text-lemon mb-4">
                {[...Array(REVIEWS[3].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{REVIEWS[3].content}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image src={REVIEWS[3].avatar} alt={REVIEWS[3].name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">{REVIEWS[3].name}</h4>
                <span className="text-xs text-zinc-400 font-normal">{REVIEWS[3].role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
