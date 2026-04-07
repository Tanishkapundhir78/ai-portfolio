import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const ref = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🔥 Smooth upward movement
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden">
      
      {/* 🌌 BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* ✨ Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/10 blur-[120px] rounded-full z-0"></div>

      {/* 🌌 3D */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ThreeScene scrollProgress={scrollValue} />
      </div>

      {/* TEXT */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute top-[45%] w-full flex flex-col items-center text-center z-20 px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-400 mb-4 text-lg"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tanishka
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl mt-6 text-gray-300"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          Data Analyst 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
          and craft data stories that actually drive action.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;