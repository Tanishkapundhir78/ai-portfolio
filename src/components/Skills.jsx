import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const skills = [
    { title: "Languages", items: ["Python", "R", "SQL"] },
    { title: "Data Handling", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { title: "Data Visualization", items: ["Power BI", "Looker Studio", "Excel"] },
    { title: "AI & Machine Learning", items: ["Predictive Analysis", "Feature Engineering", "Model Building"] },
    { title: "Web Scraping", items: ["BeautifulSoup", "Selenium", "Requests"] },
    { title: "Databases", items: ["MySQL", "MariaDB", "PostgreSQL"] },
    { title: "Frameworks & Tools", items: ["Linux", "Git", "GitHub", "Streamlit", "FastAPI"] },
    { title: "Cloud Platforms", items: ["Azure", "IBM Cloud", "Watsonx"] },
  ];

  const ref = useRef(null);

  // 🔥 SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 LINE HEIGHT ANIMATION
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative text-white py-24 px-6 overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          Skills 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Hover over each step to explore my technical stack.
        </motion.p>

        {/* TIMELINE */}
        <div className="relative">

          {/* 🔥 STATIC LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-white/10"></div>

          {/* 🔥 ANIMATED LINE */}
          <motion.div
            style={{ height }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-white"
          />

          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative flex items-center mb-20"
              >
                {/* NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-white/40"></div>
                </div>

                {/* CARD */}
                <div
                  className={`group w-full md:w-[42%] ${
                    isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div className="relative p-[1px] rounded-2xl bg-white/10">

                    {/* ✨ SUBTLE GLOW */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-md"></div>

                    {/* 💎 GLASS CARD */}
                    <div
                      className="rounded-2xl p-5 relative z-10 border border-white/15"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                      }}
                    >
                      {/* REFLECTION */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl"></div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        {skill.title}
                      </h3>

                      {/* HOVER CONTENT */}
                      <div className="opacity-0 max-h-0 overflow-hidden 
                        group-hover:opacity-100 group-hover:max-h-40 
                        transition-all duration-500">

                        <div className="flex flex-wrap gap-2 mt-3">
                          {skill.items.map((item, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}