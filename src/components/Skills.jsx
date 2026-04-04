export default function Skills() {
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
      title: "AI & ML",
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
      title: "Frameworks",
      items: ["Linux", "Git", "GitHub", "Streamlit", "FastAPI"],
    },
    {
      title: "Cloud",
      items: ["Azure", "IBM Cloud", "Watsonx"],
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Hover to explore my technical stack.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group perspective"
            >
              {/* CARD */}
              <div className="relative h-56 w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 animate-float">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl p-[1px] 
                  bg-gradient-to-r from-white/10 to-white/10">

                  <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl h-full flex items-center justify-center">
                    <h3 className="text-xl font-semibold">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl p-[1px] 
                  bg-gradient-to-r from-purple-400/50 to-blue-400/50
                  rotate-y-180">

                  <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl h-full flex flex-wrap items-center justify-center gap-2 p-4">
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
          ))}

        </div>
      </div>
    </section>
  );
}