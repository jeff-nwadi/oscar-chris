'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'

import Man from '@/public/images/Oscar.jpeg'

const SERVICES = [
  'UI/UX Design',
  'Graphic Design',
  'Web Design',
  'Branding',
  'Other',
]

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#252526] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Portrait + Hi Badge */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-56 sm:w-64 md:w-72">
            {/* Portrait Image */}
            <div className="relative w-full aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
              <Image
                src={Man}
                alt="Oscar — Designer Portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>

            {/* Hi Badge */}
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-lemon text-black flex items-center justify-center text-lg font-bold shadow-lg select-none">
              Hi
            </div>
          </div>
        </div>

        {/* Right Column: Heading + Form */}
        <div>
          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white uppercase leading-none select-none mb-3 sm:mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 font-normal">
            Let's build something impactful together—whether it's your brand, your website, or your next big idea.
          </p>

          {submitted ? (
            <div className="bg-lemon/10 border border-lemon/30 rounded-2xl p-8 text-center">
              <p className="text-lemon font-condensed text-2xl uppercase tracking-wide mb-2">Message Sent!</p>
              <p className="text-zinc-400 text-sm">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lemon/50 transition-colors duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johnsmith@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lemon/50 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Service Needed Select */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-zinc-400 font-medium">Service Needed ?</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lemon/50 transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#252526] text-zinc-400">Select...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#252526] text-white">{s}</option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-zinc-400 font-medium">What Can I Help You...</label>
                <textarea
                  name="message"
                  placeholder="Hello, I'd like to enquire about..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lemon/50 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <InteractiveHoverButton
                  type="submit"
                  text="Submit"
                  className="w-36 py-3"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
