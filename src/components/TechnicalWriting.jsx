import { motion } from "framer-motion";

export default function TechnicalWriting() {
  const blogs = [
    {
      title: "Why Accuracy is a Misleading Metric in Real-World ML Systems",
      description:
        "Accuracy alone often hides critical model weaknesses. This article explains why better metrics like precision, recall, and business context matter more.",
      tag: "Machine Learning",
      time: "6 min read",
      link: "#",
    },
    {
      title: "Feature Engineering Techniques That Actually Work",
      description:
        "A practical breakdown of feature engineering strategies that improve model performance in real-world datasets.",
      tag: "Data Science",
      time: "5 min read",
      link: "#",
    },
    {
      title: "From Data to Decisions: What Makes a Good Dashboard?",
      description:
        "Explains what separates dashboards that look good from those that actually drive business decisions.",
      tag: "Analytics",
      time: "4 min read",
      link: "#",
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* ✨ SOFT GLOBAL GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/5 blur-[140px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
           Technical Writing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Writing about machine learning, analytics, and real-world data problems — 
          focusing on what actually works beyond theory.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1200px]">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotateX: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 1.1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative group rounded-2xl p-[1px] bg-white/10 transition-all duration-500"
            >
              {/* 🔥 BRIGHT WARM WHITE GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/20 blur-md"></div>

              {/* ✨ EDGE GLOW */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 transition duration-500"></div>

              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between relative z-10">

                <div>
                  {/* TAG + TIME */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                      {blog.tag}
                    </span>
                    <span>{blog.time}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm mb-6">
                    {blog.description}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-4 py-2 text-center text-sm 
                  bg-white/5 hover:bg-white/10 border border-white/10 
                  transition-all duration-300
                  hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                >
                  Read Article →
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}