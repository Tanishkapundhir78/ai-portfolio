import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND (MATCHED) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          🚀 Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12"
        >
          I’m open to internships, freelance work, and opportunities in 
          Data Analytics, AI, and Business Intelligence.  
          Let’s build something impactful together.
        </motion.p>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group rounded-2xl p-[1px] bg-white/10"
        >

          {/* ✨ SUBTLE WHITE GLOW */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-md pointer-events-none"></div>

          <div className="relative bg-[#0f0f0f]/60 backdrop-blur-md border border-white/10 rounded-2xl p-10">

            {/* EMAIL */}
            <p className="text-lg mb-8 tracking-wide">
              📩 tanishkapundhir8@gmail.com
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6 flex-wrap">

              <a
                href="https://github.com/Tanishkapundhir78"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-white/10 bg-white/5 
                hover:bg-white/10 transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-white/10 bg-white/5 
                hover:bg-white/10 transition-all duration-300"
              >
                LinkedIn
              </a>

              <a
                href="mailto:tanishkapundhir8@gmail.com"
                className="px-6 py-2 rounded-lg border border-white/20 
                hover:bg-white hover:text-black 
                transition-all duration-300"
              >
                Contact Me
              </a>

            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-10"
        >
          Built with passion for data, AI, and impactful solutions.
        </motion.p>

      </div>
    </section>
  );
}