export default function TechnicalWriting() {
  const featured = {
    title: "Why Accuracy is a Misleading Metric in Real-World ML Systems",
    description:
      "In real-world machine learning systems, accuracy often creates a false sense of performance. This article explores why relying solely on accuracy can lead to poor decisions and how better metrics align models with actual business outcomes.",
    tag: "Machine Learning",
    time: "6 min read",
    link: "#",
  };

  const blogs = [
    {
      title: "Feature Engineering Techniques That Actually Work",
      description:
        "A practical breakdown of feature engineering strategies that consistently improve model performance in messy, real-world datasets.",
      tag: "Data Science",
      time: "5 min read",
      link: "#",
    },
    {
      title: "From Data to Decisions: What Makes a Good Dashboard?",
      description:
        "Not all dashboards drive decisions. This piece explains how to design dashboards that are actually used by stakeholders.",
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
          I write about machine learning, analytics, and real-world data problems — 
          focusing on what actually works beyond theory.
        </p>

        {/* 🌟 FEATURED ARTICLE */}
        <div className="relative group rounded-2xl p-[1px] mb-12 bg-gradient-to-r from-purple-400/40 via-blue-400/40 to-pink-400/40">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                {featured.tag}
              </span>
              <span>{featured.time}</span>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {featured.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {featured.description}
            </p>

            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg p-[1px] bg-gradient-to-r from-purple-400/40 to-blue-400/40"
            >
              <span className="block bg-[#1a1a1a] px-5 py-2 rounded-lg">
                📖 Read Featured Article
              </span>
            </a>
          </div>
        </div>

        {/* 🧾 OTHER ARTICLES */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40 transition"
            >
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">

                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                      {blog.tag}
                    </span>
                    <span>{blog.time}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6">
                    {blog.description}
                  </p>
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40"
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