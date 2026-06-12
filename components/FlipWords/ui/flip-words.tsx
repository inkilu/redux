"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  const nextWord = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words]);

  useEffect(() => {
    const timer = setTimeout(nextWord, duration);
    return () => clearTimeout(timer);
  }, [index, duration, nextWord]);

  return (
    <div
      className={cn(
        "relative inline-flex flex-col justify-center overflow-hidden align-middle min-h-[1.5em]",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 15, filter: "blur(6px)" }} // same direction!
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-neutral-900 dark:text-neutral-100 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
