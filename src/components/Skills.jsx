export default function SkillsRoadmap() {
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

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills Roadmap
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Hover over each step to explore my technical stack.
        </p>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>

          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-20 ${
                  isLeft ? "justify-start pl-10" : "justify-end pr-10"
                }`}
              >
                {/* NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-white/30 group-hover:bg-purple-500 transition"></div>
                </div>

                {/* CARD */}
                <div className="group w-[42%]">

                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/10 
                    hover:from-purple-400/50 hover:to-blue-400/50 transition-all duration-300 animate-float">

                    <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5">

                      {/* MAIN SKILL */}
                      <h3 className="text-lg font-semibold mb-2">
                        {skill.title}
                      </h3>

                      {/* HOVER CONTENT */}
                      <div className="opacity-0 max-h-0 overflow-hidden 
                        group-hover:opacity-100 group-hover:max-h-40 
                        transition-all duration-500">

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

                    </div>
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