"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Wait until after mount to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Dynamic height tracking after mount
  useEffect(() => {
    if (!mounted || !timelineRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height || 0);
    });
    observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Scroll progress for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg font-extrabold md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Experience
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Here&apos;s what I&apos;ve been doing
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const itemRef = useRef<HTMLDivElement>(null);
          const rawInView = useInView(itemRef, { amount: 0.4 });
          const inView = mounted ? rawInView : false; // disable until mounted

          return (
            <div
              key={index}
              ref={itemRef}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Sticky title + circle */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${inView ? "bg-gradient-to-tr from-purple-500 to-blue-500 scale-110" : "bg-white dark:bg-black scale-100"}`}
                >
                  <div
                    className={`h-4 w-4 rounded-full border p-2 transition-all duration-300
                      ${inView
                        ? "bg-white border-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                        : "bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"}`}
                  />
                </div>
                <h3
                  className={`hidden md:block text-[2rem] md:pl-20 font-bold transition-colors duration-300
                    ${inView ? "text-purple-500" : "text-neutral-500 dark:text-neutral-500"}`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3
                  className={`md:hidden block text-[2rem] mb-4 text-left font-bold transition-colors duration-300
                    ${inView ? "text-purple-500" : "text-neutral-500 dark:text-neutral-500"}`}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Vertical line */}
        {mounted && height > 0 && (
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
              bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
              from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
              [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] 
                bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
                from-[0%] via-[10%] rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
