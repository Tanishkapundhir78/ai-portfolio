import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="h-[200vh] relative overflow-hidden flex items-center justify-center bg-black"
    >

      {/* 🌌 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <ThreeScene />
      </div>

      {/* 🌟 TEXT CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="flex flex-col items-center text-center px-6 z-10"
      >

        <p className="text-gray-400 mb-3">
          👋 Hello, I'm
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tanishka
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
          Data Analyst 📊
        </h2>

        <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
          Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
          and craft data stories that actually drive action.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
            Contact Me
          </button>
        </div>

      </motion.div>

    </section>
  );
};

export default Hero;