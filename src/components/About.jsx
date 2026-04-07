import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const fullText1 =
    "I’m a Data Analyst who enjoys turning complex, unstructured data into clear insights that drive decisions. I focus on building intuitive dashboards, analyzing patterns, and using data to uncover meaningful stories that create impact.";

  const fullText2 =
    "My work sits at the intersection of data, AI, and design — where I not only analyze data, but also make it accessible and actionable through clean visualizations and smart systems.";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    let j = 0;

    const typeFirst = setInterval(() => {
      i++;
      setText1(fullText1.slice(0, i));

      if (i === fullText1.length) {
        clearInterval(typeFirst);

        const typeSecond = setInterval(() => {
          j++;
          setText2(fullText2.slice(0, j));

          if (j === fullText2.length) {
            clearInterval(typeSecond);
            setDoneTyping(true);
          }
        }, 40);
      }
    }, 40);

    return () => clearInterval(typeFirst);
  }, [startTyping]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c0c] to-black z-0" />

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setStartTyping(true)}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center z-10"
      >
        {/* 🔥 SMALLER HEADING */}
        <motion.h2
          animate={{ scale: doneTyping ? 0.92 : 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </motion.h2>

        {/* Typing text */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto min-h-[120px]">
          {text1}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6 min-h-[120px]">
          {text2}
          {text1.length === fullText1.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>

        {doneTyping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <p className="text-gray-300 text-lg">
              💡 I believe data is not just numbers — it’s a powerful tool to solve problems,
              tell stories, and make smarter decisions.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default About;