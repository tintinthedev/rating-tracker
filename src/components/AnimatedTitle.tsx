"use client";

type AnimateCount = {
  count: number;
  transition: { duration: number };
};

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedTitle() {
  const [count, setCount] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          count: 30,
          transition: { duration: 5 },
        } as AnimateCount);
        await controls.start({
          count: 1,
          transition: { duration: 5 },
        } as AnimateCount);
      }
    };
    animate();
  }, [controls]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
      See your chess.com rating progress in{" "}
      <motion.span
        className="text-primary"
        animate={controls}
        onUpdate={(latest) => setCount(Math.round(Number(latest.count)))}
      >
        {count !== 30 ? count : `${count}+`}
      </motion.span>{" "}
      days range
    </h1>
  );
}
