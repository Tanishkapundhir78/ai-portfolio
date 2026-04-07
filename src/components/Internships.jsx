import { motion } from "framer-motion";

export default function Internships() {
  const internships = [
    {
      title: "Data Analytics Internship",
      org: "LnB (Learn n Build)",
      duration: "15 June 2025 – 12 July 2025",
      points: [
        "Completed a 45-day structured training focused on core data analytics concepts.",
        "Learned data cleaning, transformation, and visualization techniques.",
        "Worked with Excel and Python for analyzing datasets.",
        "Built a strong foundation in extracting insights from real-world data.",
      ],
    },
    {
      title: "AI & Cloud Internship",
      org: "IBM SkillsBuild",
      duration: "17 July 2025 – 1 September 2025",
      points: [
        "Worked on AI and cloud-based projects using IBM Cloud.",
        "Built an AI chatbot using conversational logic.",
        "Performed cloud experiments and deployments.",
        "Explored ML workflows and model experimentation.",
        "Applied AI concepts in real-world scenarios.",
      ],
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 MATCHED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
           Internships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          Hover to explore my experience and work.
        </motion.p>

        <div className="flex flex-col gap-10">

          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-2xl p-[1px] bg-white/10"
            >
              {/* ✨ SUBTLE WHITE GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-md"></div>

              <div className="relative bg-[#0f0f0f]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]">

                {/* HEADER */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.org}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    {item.duration}
                  </span>
                </div>

                {/* 🔥 SMOOTH HOVER CONTENT */}
                <div
                  className="mt-4 overflow-hidden transition-all duration-500 ease-in-out
                  max-h-0 opacity-0
                  group-hover:max-h-[300px] group-hover:opacity-100"
                >
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}