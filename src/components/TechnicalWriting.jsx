export default function TechnicalWriting() {
  const blogs = [
    {
      title: "Why Accuracy is a Misleading Metric in Real-World ML Systems",
      description:
        "Accuracy alone often hides critical model weaknesses. This article breaks down when accuracy fails and why precision, recall, and business context matter more in production systems.",
      link: "#",
    },
    {
      title: "Feature Engineering Techniques That Actually Work",
      description:
        "A practical guide to feature engineering strategies that genuinely improve model performance, focusing on real datasets rather than textbook examples.",
      link: "#",
    },
    {
      title: "From Data to Decisions: What Makes a Good Dashboard?",
      description:
        "Explains why most dashboards fail and what actually makes a dashboard useful for decision-making, focusing on clarity, context, and actionable insights.",
      link: "#",
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 SAME HERO BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          ✍️ Technical Writing
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40 transition"
            >
              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6">
                    {blog.description}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40 transition"
                >
                  <span className="block bg-[#1a1a1a] px-4 py-2 rounded-lg text-center">
                    📖 Read Article
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}