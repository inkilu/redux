"use client";

import React from 'react'
import Galaxy from './Galaxy'
import Experience from '@/app/experience/experience'
import { motion } from 'framer-motion'
import TextPressure from '../TextPressure/TextPressure';
const GalaxySection = () => {
  return (
    <div className='relative w-full min-h-[100vh] bg-black overflow-hidden'>
      {/* Background layer explicitly catches mouse events */}
      <div className='absolute inset-0 z-0'>
        <Galaxy />
      </div>
      {/* Content wrapper switched to justify-start to stop bottom content from pushing top content off-screen when overflowing */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full min-h-screen pt-24 md:pt-32 pb-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-start w-full max-w-7xl mx-auto px-4 pointer-events-auto"
        >
          <div >
           
              <TextPressure
                text="Hello!"
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic
                textColor="#ffffff"
                strokeColor="#5227FF"
                minFontSize={36}
              />
           
            <Experience />
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default GalaxySection