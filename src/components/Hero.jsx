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

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      className="h-screen relative overflow-hidden"
    >
      {/* 🌌 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* 🌟 SPOTLIGHT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/10 blur-[120px] rounded-full z-0"></div>

      {/* 🌌 3D */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ThreeScene scrollProgress={scrollValue} />
      </div>

      {/* TEXT */}
      <motion.div
        style={{ y: textY }}
        className="absolute top-[42%] w-full flex flex-col items-center text-center z-20 px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-4 text-lg"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[110px] font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tanishka
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl mt-6 text-gray-300"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          Data Analyst 📊
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-400 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
          and craft data stories that actually drive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-6"
        >
          <button className="px-8 py-4 text-lg bg-white text-black rounded-full hover:bg-gray-300 transition">
            View Projects
          </button>

          <button className="px-8 py-4 text-lg border border-white/20 rounded-full hover:bg-white/10 transition">
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;