"use client";

import React from 'react'
import { motion } from "framer-motion";
import { IconCalendar, IconMapPin, IconCode, IconBrowser, IconCpu } from "@tabler/icons-react";
import Image from 'next/image'
import { Meteors } from "@/components/MeteorsDemo/ui/meteors";

const Experience = () => {
  const skills = [
    "React","Express","TypeScript", "Tailwind CSS","GraphQL","Responsive Design", "Performance Optimization"
  ];

  return (
    <div className="w-full text-white pb-20 px-4 sm:px-8 flex flex-col justify-center items-center relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden group"
        >
          {/* Meteors Effect Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
            <Meteors number={20} />
          </div>

          {/* Subtle Hover Glow Effect */}
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10 w-full mb-8">
            {/* Company Logo - Bulletproof Square Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="shrink-0 bg-white shadow-xl border border-zinc-700/50 rounded-xl p-2"
            >
              <div className="relative w-20 h-20 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden">
                 <Image src="/acabes.jpg" alt="Acabes" width={100} height={100} className="w-full h-full object-contain" />
              </div>
            </motion.div>

            <div className="flex-1 w-full md:pt-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-4"
              >
                <div className="text-2xl sm:text-3xl lg:text-2xl font-bold tracking-tight text-white flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                  <span>Acabes International</span>
                  <span className="hidden lg:inline-block text-zinc-600 font-light">|</span>
                  <span className="text-xl sm:text-2xl lg:text-2xl font-medium text-blue-200">
                    Product Engineer - Frontend
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-3 text-xs md:text-sm font-medium text-zinc-400"
              >
                <span className="flex items-center gap-1.5 bg-zinc-800/60 px-3 py-1.5 rounded-md border border-zinc-700/50 shadow-sm backdrop-blur-md">
                  <IconCalendar className="w-4 h-4 text-zinc-300" />
                  2023 - Present
                </span>
                <span className="flex items-center gap-1.5 bg-zinc-800/60 px-3 py-1.5 rounded-md border border-zinc-700/50 shadow-sm backdrop-blur-md">
                  <IconMapPin className="w-4 h-4 text-zinc-300" />
                 Kochi, Kerala
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base relative z-10"
          >
            <p>
              As a key driver of UI architecture at <strong className="text-white font-medium">Acabes International</strong>, I specialize in crafting performant, scalable, and highly interactive digital experiences. My workflow revolves around turning complex product requirements into modular frontend systems using modern web frameworks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3 items-start p-4 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
                <div className="mt-0.5 bg-blue-500/20 p-1.5 rounded-lg text-blue-400 ring-1 ring-blue-500/30">
                  <IconBrowser className="w-5 h-5" />
                </div>
                <div className="text-sm">Developing Core Banking Solution Portals / Optimizing existing codebases.</div>
              </div>
              <div className="flex gap-3 items-start p-4 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
                <div className="mt-0.5 bg-purple-500/20 p-1.5 rounded-lg text-purple-400 ring-1 ring-purple-500/30">
                  <IconCode className="w-5 h-5" />
                </div>
                <div className="text-sm">Writing code which comes under the coding standards of ArabBank</div>
              </div>
              <div className="flex gap-3 items-start p-4 rounded-xl bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors md:col-span-2">
                <div className="mt-0.5 bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 ring-1 ring-emerald-500/30">
                  <IconCpu className="w-5 h-5" />
                </div>
                <div className="text-sm">Optimizing component re-renders, core web vitals, and overarching app performance while maintaining a state-of-the-art UI/UX.</div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 pt-6 border-t border-zinc-800/50 relative z-10"
          >
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Tech Stack & Masteries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="px-3 py-1.5 bg-zinc-800/30 border border-zinc-700/50 rounded-md text-xs md:text-sm font-medium text-zinc-300 cursor-default hover:border-zinc-500/50 hover:text-white transition-all shadow-sm backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Experience