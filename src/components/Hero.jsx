import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const ref = useRef(null);

  const [scrollValue, setScrollValue] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🎯 Text animation
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // 🔥 Sync scroll → state
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollValue(v);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // 🖱️ Mouse tracking
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    setMouse({ x, y });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-screen relative bg-black overflow-hidden"
    >

      {/* 🌌 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ThreeScene scrollProgress={scrollValue} mouse={mouse} />
      </div>

      {/* 🌟 TEXT */}
      <motion.div
  style={{ y: textY }}
  className="absolute top-[25%] w-full flex flex-col items-center text-center z-10 px-6"
>

  <p className="text-gray-400 mb-4 text-lg md:text-xl">
    👋 Hello, I'm
  </p>

  {/* BIGGER NAME */}
  <h1
    className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white leading-tight"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    Tanishka
  </h1>

  {/* ROLE */}
  <h2
    className="text-3xl md:text-4xl mt-6 text-gray-300"
    style={{ fontFamily: "Bodoni MT, Times New Roman, serif" }}
  >
    Data Analyst 
  </h2>

  {/* TAGLINE */}
  <p
    className="mt-8 text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
    style={{ fontFamily: "Bodoni MT, Times New Roman, serif" }}
  >
    Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
    and craft data stories that actually drive action.
  </p>

  <div className="mt-10 flex gap-6">
    <button className="px-8 py-4 text-lg bg-white text-black rounded-full hover:bg-gray-300 transition">
      View Projects
    </button>

    <button className="px-8 py-4 text-lg border border-white/20 rounded-full hover:bg-white/10 transition">
      Contact Me
    </button>
  </div>

      </motion.div>

    </section>
  );
};

export default Hero;