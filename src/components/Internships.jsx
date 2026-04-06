export default function Internships() {
  const internships = [
    {
      title: "Data Analytics Internship",
      org: "LnB (Learn n Build)",
      duration: "15 June 2025 – 12 July 2025",
      points: [
        "Completed a 45-day structured training focused on core data analytics concepts.",
        "Learned data cleaning, transformation, and visualization techniques.",
        "Worked with Excel and Python for analyzing datasets.",
        "Built a strong foundation in extracting insights from real-world data.",
      ],
    },
    {
      title: "AI & Cloud Internship",
      org: "IBM SkillsBuild",
      duration: "17 July 2025 – 1 September 2025",
      points: [
        "Worked on AI and cloud-based projects using IBM Cloud.",
        "Built an AI chatbot using conversational logic.",
        "Performed cloud experiments and deployments.",
        "Explored ML workflows and model experimentation.",
        "Applied AI concepts in real-world scenarios.",
      ],
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          💼 Internships
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Hover to explore my experience and work.
        </p>

        <div className="flex flex-col gap-10">

          {internships.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl p-[1px] 
              bg-gradient-to-r from-white/10 to-white/10
              hover:from-purple-400/60 hover:to-blue-400/60
              transition-all duration-300"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">

                {/* HEADER */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.org}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    {item.duration}
                  </span>
                </div>

                {/* 🔥 HOVER CONTENT (FIXED) */}
                <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out
                  max-h-0 opacity-0
                  group-hover:max-h-[300px] group-hover:opacity-100"
                >
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}