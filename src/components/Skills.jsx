import { useState } from "react";

export default function SkillsRoadmap() {
  const [activeSkill, setActiveSkill] = useState(null);

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
      items: ["Predictive Analysis", "Model Building", "Feature Engineering"],
    },
    {
      title: "Web Scraping",
      items: ["BeautifulSoup", "Selenium", "Requests"],
    },
    {
      title: "Databases (DBMS)",
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

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills Explorer
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Click on a skill to explore tools and technologies I’ve worked with.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveSkill(
                  activeSkill?.title === skill.title ? null : skill
                )
              }
              className="relative group cursor-pointer rounded-2xl p-[1px] 
              bg-gradient-to-r from-white/10 to-white/10
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
              hover:from-purple-400/50 hover:to-blue-400/50"
            >
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6">

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">
                  {skill.title}
                </h3>

                {/* MINI PREVIEW */}
                <p className="text-gray-400 text-sm">
                  {skill.items.slice(0, 2).join(", ")}...
                </p>

                {/* 🔥 EXPANDED VIEW */}
                {activeSkill?.title === skill.title && (
                  <div className="mt-4 animate-fadeIn">
                    <div className="flex flex-wrap gap-2 mt-3">
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
          ))}
        </div>

      </div>
    </section>
  );
}