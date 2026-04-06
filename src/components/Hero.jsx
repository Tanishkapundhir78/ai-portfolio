import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🎯 Text moves upward
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // 🤖 Robot moves more → "pushing" illusion
  const robotY = useTransform(scrollYProgress, [0, 1], [1.5, 3]);

  return (
    <section
      ref={ref}
      className="h-[200vh] relative bg-black overflow-hidden"
    >

      {/* 🌌 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ThreeScene robotY={robotY.get()} />
      </div>

      {/* 🌟 TEXT CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="absolute top-[30%] w-full flex flex-col items-center text-center z-10 px-6"
      >

        <p className="text-gray-400 mb-3">
          👋 Hello, I'm
        </p>

        {/* NAME */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tanishka
        </h1>

        {/* ROLE */}
        <h2
          className="text-2xl md:text-3xl mt-4 text-gray-300"
          style={{ fontFamily: "Bodoni MT, Times New Roman, serif" }}
        >
          Data Analyst 📊
        </h2>

        {/* TAGLINE */}
        <p
          className="mt-6 text-gray-400 max-w-lg"
          style={{ fontFamily: "Bodoni MT, Times New Roman, serif" }}
        >
          Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
          and craft data stories that actually drive action.
        </p>

        {/* BUTTONS */}
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