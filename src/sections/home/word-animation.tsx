"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  "Freelancers",
  "Agencies",
  "Consultants",
  "Startups",
  "Entrepreneurs",
  "Founders",
];

function useWordCycle(words: string[], interval: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return words[index];
}

export function WordAnimation() {
  const word = useWordCycle(words, 2100);

  return (
    <span className="text-primary inline-block">
      {word.split("").map((char, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.15,
            delay: i * 0.015,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
