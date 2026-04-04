export default function Skills() {
  const skills = [
    { title: "Languages", items: ["Python", "R", "SQL"] },
    { title: "Data Handling", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { title: "Data Visualization", items: ["Power BI", "Looker Studio", "Excel"] },
    { title: "AI & ML", items: ["Predictive Analysis", "Feature Engineering", "Model Building"] },
    { title: "Web Scraping", items: ["BeautifulSoup", "Selenium", "Requests"] },
    { title: "Databases", items: ["MySQL", "MariaDB", "PostgreSQL"] },
    { title: "Frameworks", items: ["Linux", "Git", "GitHub", "Streamlit", "FastAPI"] },
    { title: "Cloud", items: ["Azure", "IBM Cloud", "Watsonx"] },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          🧠 Skills
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Hover over a skill to see the technical stack.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="group perspective">

              {/* Card Wrapper */}
              <div className="relative w-full h-56 transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180 animate-float">

                {/* Front */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-md bg-white/5 flex items-center justify-center backface-hidden">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-md bg-white/10 flex flex-wrap items-center justify-center gap-2 p-4 rotate-y-180 backface-hidden">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 text-sm border border-white/20 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}