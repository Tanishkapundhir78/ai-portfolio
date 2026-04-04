export default function Certifications() {
  const certs = [
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      description:
        "Built foundational understanding of AI concepts including machine learning workflows, real-world applications, and ethical considerations.",
      link: "#",
    },
    {
      title: "Linux Essentials",
      issuer: "LnB (Linux & Networking Basics)",
      description:
        "Gained hands-on exposure to Linux commands, file systems, and system operations essential for development and data workflows.",
      link: "#",
    },
    {
      title: "Data Analytics Fundamentals",
      issuer: "AWS",
      description:
        "Learned core analytics concepts including data collection, processing, visualization, and decision-making using cloud-based tools.",
      link: "#",
    },
    {
      title: "Introduction to Amazon Athena",
      issuer: "AWS",
      description:
        "Explored serverless querying of data using SQL on AWS Athena, focusing on efficient analysis of large-scale datasets.",
      link: "#",
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      description:
        "Validated expertise in tracking user behavior, analyzing traffic sources, and deriving actionable insights from web data.",
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
          A collection of certifications validating my skills across AI, cloud, analytics, and systems.
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
                  <h3 className="text-lg font-semibold mb-2">
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