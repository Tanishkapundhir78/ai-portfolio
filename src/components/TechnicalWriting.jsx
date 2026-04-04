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
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-4">
          ✍️ Technical Writing
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Writing about machine learning, analytics, and real-world data problems — 
          focusing on what actually works beyond theory.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] 
              bg-gradient-to-r from-white/10 to-white/10
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
              hover:from-purple-400/50 hover:to-blue-400/50"
            >
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">

                <div>
                  {/* TAG + TIME */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                      {blog.tag}
                    </span>
                    <span>{blog.time}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-white">
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
                  className="relative rounded-lg p-[1px] 
                  bg-gradient-to-r from-white/10 to-white/10
                  transition-all duration-300
                  hover:from-purple-400/50 hover:to-blue-400/50"
                >
                  <span className="block bg-[#1a1a1a] px-4 py-2 rounded-lg text-center text-sm">
                    Read Article →
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