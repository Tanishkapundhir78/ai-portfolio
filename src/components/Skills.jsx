import { motion } from "framer-motion";

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

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 MATCHING BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
           Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Hover over each step to explore my technical stack.
        </motion.p>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>

          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-20 ${
                  isLeft ? "justify-start pl-10" : "justify-end pr-10"
                }`}
              >
                {/* NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-white/30 group-hover:bg-white transition"></div>
                </div>

                {/* CARD */}
                <div className="group w-[42%]">

                  <div className="relative p-[1px] rounded-2xl bg-white/10 transition-all duration-500">

                    {/* ✨ WHITE GLOW */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-md"></div>

                    {/* GLASS CARD */}
                    <div 
                    className="rounded-2xl p-5 relative z-10 border border-white/20"
                    style={{
                      background: "rgba(255,255,255,0.02)", // 🔥 almost invisible
                      backdropFilter: "blur(2px)",          // very light blur (glass feel)
                      WebkitBackdropFilter: "blur(2px)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                      }}
                      >

                      {/* MAIN SKILL */}
                      <h3 className="text-lg font-semibold mb-2">
                        {skill.title}
                      </h3>

                      {/* HOVER CONTENT */}
                      <div className="opacity-0 max-h-0 overflow-hidden 
                        group-hover:opacity-100 group-hover:max-h-40 
                        transition-all duration-500 ease-in-out">

                        <div className="flex flex-wrap gap-2 mt-3">
                          {skill.items.map((item, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
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