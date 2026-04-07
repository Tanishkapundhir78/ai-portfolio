import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* 🌌 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c0c] to-black z-0" />

      {/* ✨ SOFT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl text-center z-10"
      >
        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </motion.h2>

        {/* 📝 FIRST PARA */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          I’m a Data Analyst who enjoys turning complex, unstructured data into
          clear insights that drive decisions. I focus on building intuitive dashboards,
          analyzing patterns, and using data to uncover meaningful stories that create impact.
        </motion.p>

        {/* 📝 SECOND PARA */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6"
          style={{ fontFamily: "Bodoni MT, serif" }}
        >
          My work sits at the intersection of data, AI, and design — where I not only analyze data,
          but also make it accessible and actionable through clean visualizations and smart systems.
        </motion.p>

        {/* 💡 QUOTE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <p
            className="text-gray-300 text-lg"
            style={{ fontFamily: "Bodoni MT, serif" }}
          >
            💡 I believe data is not just numbers — it’s a powerful tool to solve problems,
            tell stories, and make smarter decisions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;