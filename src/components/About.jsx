import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 bg-[#111111] relative"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h2>

        {/* Main Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          I’m a Data Analyst who enjoys turning complex, unstructured data into
          clear insights that drive decisions. I focus on building intuitive dashboards,
          analyzing patterns, and using data to uncover meaningful stories that create impact.
        </p>

        {/* Secondary Description */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          My work sits at the intersection of data, AI, and design — where I not only analyze data,
          but also make it accessible and actionable through clean visualizations and smart systems.
        </p>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <p className="text-gray-300">
            💡 I believe data is not just numbers — it’s a powerful tool to solve problems,
            tell stories, and make smarter decisions.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "SQL",
            "Power BI",
            "Machine Learning",
            "Data Visualization",
            "React"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;