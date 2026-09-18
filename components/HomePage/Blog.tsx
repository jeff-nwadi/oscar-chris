'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

interface BlogPost {
  id: string
  title: string
  description: string
  category: string
  date: string
  image: string
  link: string
}

const POSTS: BlogPost[] = [
  {
    id: 'trends-2024',
    title: '5 DESIGN TRENDS THAT WILL DEFINE 2024',
    description:
      'Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.',
    category: 'Insights',
    date: 'Apr 30, 2025',
    image: '/images/blog1.png',
    link: '#',
  },
  {
    id: 'workflow-streamline',
    title: 'HOW TO STREAMLINE YOUR DESIGN WORKFLOW',
    description:
      'Discover practical strategies to improve your design process, save time, and deliver quality work more efficiently.',
    category: 'Tutorials',
    date: 'Apr 27, 2025',
    image: '/images/blog2.png',
    link: '#',
  },
]

export const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.fromTo(
              '.blog-header',
              { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 0.8 }
            )
              .fromTo(
                '.blog-card',
                { autoAlpha: 0, y: 35 },
                { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15 },
                '-=0.4'
              )
              .fromTo(
                '.blog-cta-btn',
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
    <section id="blog" ref={sectionRef} className="w-full bg-[#252526] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="blog-header mb-10 sm:mb-14">
          <h2 className="font-condensed text-2xl sm:text-3xl md:text-5xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            DESIGN INSIGHTS & IDEAS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed font-normal">
            From design trends to creative processes, these articles offer insights to help you elevate your craft, solve challenges, and spark new ideas for your projects.
          </p>
        </div>

        {/* 2-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {POSTS.map((post) => (
            <article key={post.id} className="blog-card group cursor-pointer flex flex-col justify-between">
              <div>
                {/* Article Cover Image Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/40 border border-white/10 mb-5 sm:mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* Category Pill Tag & Date */}
                <div className="flex items-center gap-3 mb-3 text-xs sm:text-sm">
                  <span className="px-3 py-0.5 rounded-full border border-white/20 text-zinc-300 font-medium group-hover:border-lemon group-hover:text-lemon transition-colors duration-300">
                    {post.category}
                  </span>
                  <span className="text-zinc-400 font-normal">{post.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-condensed text-2xl sm:text-2xl font-normal text-white uppercase tracking-wide leading-snug mb-3 group-hover:text-lemon transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Article Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button: BROWSE ALL INSIGHTS */}
        <div className="flex justify-center">
          <Link href="#insights">
            <InteractiveHoverButton
              text="Browse All"
              className="blog-cta-btn w-44 py-2.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
