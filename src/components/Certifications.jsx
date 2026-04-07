import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      description:
        "Built foundational understanding of AI concepts including machine learning workflows, real-world applications, and ethical considerations.",
      link: "#",
    },
    {
      title: "Linux Essentials",
      issuer: "LnB (Learn n Build)",
      description:
        "Gained hands-on exposure to Linux commands, file systems, and system operations essential for development and data workflows.",
      link: "#",
    },
    {
      title: "Data Analytics Fundamentals",
      issuer: "AWS",
      description:
        "Learned core analytics concepts including data collection, processing, visualization, and decision-making using cloud-based tools.",
      link: "#",
    },
    {
      title: "Introduction to Amazon Athena",
      issuer: "AWS",
      description:
        "Explored serverless querying of data using SQL on AWS Athena, focusing on efficient analysis of large-scale datasets.",
      link: "#",
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      description:
        "Validated expertise in tracking user behavior, analyzing traffic sources, and deriving actionable insights from web data.",
      link: "#",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* ✨ GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/5 blur-[140px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
           Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          A collection of certifications validating my skills across AI, cloud, analytics, and systems.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certs.map((cert, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  whileHover={{
    rotateY: 20,
    scale: 1.04,
  }}

  transition={{
    duration: 0.35,
    delay: index * 0.15,
    ease: "easeOut",
  }}

  className="relative group rounded-2xl p-[1px] bg-white/10"
  style={{ transformStyle: "preserve-3d" }}
>
              {/* ✨ WHITE GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-md"></div>

              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between relative z-10">

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-gray-400 text-sm mb-6">
                    {cert.description}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-4 py-2 text-center text-sm 
                  bg-white/5 border border-white/10 
                  hover:bg-white/10 transition-all duration-300
                  hover:shadow-[0_0_14px_rgba(255,255,255,0.3)]"
                >
                  🎓 View Certificate
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}