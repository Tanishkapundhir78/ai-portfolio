import { useState } from "react";

export default function SkillsRoadmap() {
  const [activeIndex, setActiveIndex] = useState(null);

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

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills Roadmap
        </h2>

        <p className="text-center text-gray-400 mb-20">
          A visual journey of my technical growth.
        </p>

        {/* ROADMAP */}
        <div className="relative w-full h-[500px]">

          {/* 🐍 S-SHAPED PATH */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            height="200"
            viewBox="0 0 1200 200"
            fill="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            <path
              d="
                M 50 100
                C 200 0, 400 200, 600 100
                S 1000 0, 1150 100
              "
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              opacity="0.5"
            />
          </svg>

          {/* 🔘 NODES + CARDS */}
          {skills.map((skill, index) => {
            const positions = [
              { x: "5%", y: "50%" },
              { x: "18%", y: "20%" },
              { x: "32%", y: "75%" },
              { x: "48%", y: "40%" },
              { x: "62%", y: "75%" },
              { x: "76%", y: "20%" },
              { x: "88%", y: "55%" },
              { x: "96%", y: "40%" },
            ];

            const pos = positions[index];

            return (
              <div key={index}>
                {/* NODE */}
                <div
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="absolute z-20 cursor-pointer"
                  style={{ left: pos.x, top: pos.y }}
                >
                  <div
                    className={`w-5 h-5 rounded-full transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-purple-500 scale-125 shadow-lg shadow-purple-500/60 animate-pulse"
                          : "bg-white/30"
                      }`}
                  ></div>
                </div>

                {/* CARD */}
                <div
                  className={`absolute w-56 p-[1px] rounded-2xl transition-all duration-300
                    ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-purple-400/50 to-blue-400/50 scale-105"
                        : "bg-gradient-to-r from-white/10 to-white/10"
                    }`}
                  style={{
                    left: pos.x,
                    top:
                      index % 2 === 0
                        ? "calc(" + pos.y + " + 40px)"
                        : "calc(" + pos.y + " - 180px)",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 text-center">

                    <h3 className="text-sm font-semibold mb-2">
                      {skill.title}
                    </h3>

                    {/* EXPAND */}
                    {activeIndex === index && (
                      <div className="mt-2 animate-slideDown">
                        <div className="flex flex-wrap justify-center gap-2">
                          {skill.items.map((item, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}