'use client'

import React from 'react'
import Image from 'next/image'

export interface Project {
  title: string
  category?: string
  description: string
  src: string
  link: string
  color: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Matthias Leidinger',
    category: 'Graphic Design',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leidinger is a young creative brimming with talent and ideas.',
    src: 'project1.png',
    link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
    color: '#2A2A2B',
  },
  {
    title: 'Clément Chapillon',
    category: 'UI/UX Design',
    description:
      'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves.',
    src: 'project2.png',
    link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
    color: '#333335',
  },
  {
    title: 'Zissou',
    category: 'Branding',
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: 'project3.png',
    link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
    color: '#252628',
  },
  {
    title: 'Summer Vibes Festival Campaign',
    category: 'Web Design',
    description:
      'Created promotional materials for the "Summer Vibes Festival," including posters, flyers, and social media graphics.',
    src: 'project4.png',
    link: '#',
    color: '#1E1F21',
  },
]

const Card = ({
  title,
  category,
  description,
  src,
  link,
  color,
  i,
}: Project & { i: number }) => {
  return (
    <div className="sticky top-20 sm:top-28 flex items-center justify-center mb-8 sm:mb-12">
      <div
        className="relative w-full max-w-4xl rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/10 overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: color,
          top: `calc(${i * 24}px)`,
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <h3 className="font-condensed text-xl sm:text-2xl md:text-3xl font-normal uppercase text-white tracking-wide">
            {title}
          </h3>
          {category && (
            <span className="shrink-0 px-3.5 py-1 rounded-full bg-white/10 text-lemon text-xs sm:text-sm font-medium tracking-wide">
              {category}
            </span>
          )}
        </div>

        {/* Body Grid: Description + Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Left Column: Description & See More Link */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              {description}
            </p>

            <div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-lemon hover:text-lemon text-xs sm:text-sm font-medium transition-colors group cursor-pointer"
              >
                <span className="underline underline-offset-4">See more</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Project Image */}
          <div className="md:col-span-7 relative min-h-[220px] sm:min-h-[280px] w-full rounded-[20px] overflow-hidden bg-black/40 border border-white/5">
            <Image
              src={`/images/${src}`}
              alt={title}
              fill
              className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="w-full bg-[#252526] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-condensed text-2xl sm:text-3xl md:text-5xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-zinc-400 text-base sm:text-[18px] max-w-md leading-relaxed font-normal">
            These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col pb-24">
          {PROJECTS.map((project, i) => (
            <Card key={project.title} {...project} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
