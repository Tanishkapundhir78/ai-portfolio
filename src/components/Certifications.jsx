export default function Certifications() {
  const certs = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      description:
        "Validated understanding of web analytics, traffic analysis, and user behavior tracking using Google Analytics.",
      link: "#",
    },
    {
      title: "IBM SkillsBuild AI Internship",
      issuer: "IBM / AICTE / Edunet",
      description:
        "Worked on real-world AI use cases and gained hands-on experience with machine learning concepts and tools.",
      link: "#",
    },
    {
      title: "Data Analytics & Visualization",
      issuer: "Self / Project-Based",
      description:
        "Practical experience building dashboards and extracting insights using Power BI, SQL, and real datasets.",
      link: "#",
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 SAME BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-4">
          🏆 Certifications
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Certifications and experiences that validate my skills in data, analytics, and AI.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certs.map((cert, index) => (
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
                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-2">
                    {cert.title}
                  </h3>

                  {/* ISSUER */}
                  <p className="text-sm text-gray-400 mb-3">
                    {cert.issuer}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg p-[1px] 
                  bg-gradient-to-r from-white/10 to-white/10
                  transition-all duration-300
                  hover:from-purple-400/50 hover:to-blue-400/50"
                >
                  <span className="block bg-[#1a1a1a] px-4 py-2 rounded-lg text-center text-sm">
                    🎓 View Certificate
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