import { useState } from "react";

const projects = [
  {
    title: "Business Sales & Customer Analytics Dashboard",
    description:
      "Interactive Power BI dashboard delivering insights on sales trends and customer segmentation.",
    tech: ["Power BI", "DAX", "SQL", "Data Modeling"],
    domain: "analytics",
  },
  {
    title: "ML SaaS Churn Prediction Model",
    description:
      "Machine learning system predicting customer churn with explainability.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Feature Engineering",
      "SHAP",
    ],
    domain: "ml",
  },
  {
    title: "Website Traffic Analytics Dashboard",
    description:
      "Dashboard using Google Analytics data in Looker Studio.",
    tech: ["Looker Studio", "Google Analytics", "Data Visualization"],
    domain: "analytics",
  },
  {
    title: "Startup Blueprint Generator",
    description:
      "AI-powered startup planning tool using IBM Granite.",
    tech: ["Python", "IBM Granite", "Watsonx", "Prompt Engineering"],
    domain: "ai",
  },
  {
    title: "Breast Cancer Analysis",
    description:
      "ML-based medical dataset analysis for prediction and insights.",
    tech: ["Python", "Pandas", "EDA", "Logistic Regression"],
    domain: "ml",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [aiResponse, setAIResponse] = useState("");

  const generateAI = (project, type) => {
    const tech = project.tech.join(", ");

    if (type === "recruiter") {
      return `🎯 ${project.title} focuses on ${
        project.domain === "ml"
          ? "predictive modeling"
          : project.domain === "analytics"
          ? "business insights"
          : "AI-driven automation"
      } using ${tech}. It highlights strong problem-solving and real-world implementation.`;
    }

    if (type === "technical") {
      return `⚙️ Built using ${tech}, this project includes ${
        project.domain === "ml"
          ? "feature engineering, model training, and evaluation"
          : project.domain === "analytics"
          ? "data modeling, KPIs, and visualization"
          : "LLM integration and prompt engineering"
      }, ensuring performance and scalability.`;
    }

    if (type === "impact") {
      return `📈 This project delivers impact by ${
        project.domain === "ml"
          ? "predicting outcomes and reducing risks"
          : project.domain === "analytics"
          ? "enabling data-driven decisions"
          : "automating workflows"
      }, showcasing strong analytical thinking.`;
    }
  };

  const handleExplain = (project, type) => {
    setActiveProject(project);
    setAIResponse("Thinking... 🤖");

    setTimeout(() => {
      setAIResponse(generateAI(project, type));
    }, 400);
  };

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">
      
      {/* 🔥 BACKGROUND GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          🚀 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20"
            >
              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full transition duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10">
                
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 px-3 py-1 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔥 CLEAN BUTTONS (NO GLASS) */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleExplain(project, "recruiter")}
                    className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 hover:border-purple-400/40 px-4 py-2 rounded-lg transition"
                  >
                    🎯 Recruiter View
                  </button>

                  <button
                    onClick={() => handleExplain(project, "technical")}
                    className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 hover:border-blue-400/40 px-4 py-2 rounded-lg transition"
                  >
                    ⚙️ Technical View
                  </button>

                  <button
                    onClick={() => handleExplain(project, "impact")}
                    className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 hover:border-green-400/40 px-4 py-2 rounded-lg transition"
                  >
                    📈 Impact View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI RESPONSE */}
        {activeProject && (
          <div className="mt-16 bg-[#0f0f0f] border border-white/10 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              🧠 Smart Explanation: {activeProject.title}
            </h3>

            <p className="text-gray-300 whitespace-pre-line">
              {aiResponse}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}