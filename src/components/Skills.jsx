import { useState } from "react";

export default function SkillsRoadmap() {
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    {
      title: "Languages",
      items: ["Python", "R", "SQL"],
    },
    {
      title: "Data Handling",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Data Visualization",
      items: ["Power BI", "Looker Studio", "Excel"],
    },
    {
      title: "AI & Machine Learning",
      items: ["Predictive Analysis", "Feature Engineering", "Model Building"],
    },
    {
      title: "Web Scraping",
      items: ["BeautifulSoup", "Selenium", "Requests"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MariaDB", "PostgreSQL"],
    },
    {
      title: "Frameworks & Tools",
      items: ["Linux", "Git", "GitHub", "Streamlit", "FastAPI"],
    },
    {
      title: "Cloud Platforms",
      items: ["Azure", "IBM Cloud", "Watsonx"],
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills Roadmap
        </h2>

        <p className="text-center text-gray-400 mb-16">
          A structured journey of my technical growth.
        </p>

        {/* ROADMAP */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>

          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-20 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* NODE */}
                <div
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="absolute left-1/2 -translate-x-1/2 cursor-pointer z-20"
                >
                  <div
                    className={`w-6 h-6 rounded-full transition-all duration-300
                    ${
                      activeIndex === index
                        ? "bg-purple-500 scale-125 shadow-lg shadow-purple-500/60 animate-pulse"
                        : "bg-white/30"
                    }`}
                  ></div>
                </div>

                {/* CARD */}
                <div
                  className={`w-[42%] p-[1px] rounded-2xl transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-purple-400/50 to-blue-400/50 scale-105"
                      : "bg-gradient-to-r from-white/10 to-white/10"
                  }`}
                >
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5">

                    <h3 className="text-lg font-semibold mb-2">
                      {skill.title}
                    </h3>

                    {/* EXPAND */}
                    {activeIndex === index && (
                      <div className="mt-3 animate-slideDown">
                        <div className="flex flex-wrap gap-2">
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