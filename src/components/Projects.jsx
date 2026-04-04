import { useState } from "react";

const projects = [
  {
    title: "Business Sales & Customer Analytics Dashboard",
    description: [
      "Designed an end-to-end Power BI dashboard to track KPIs like revenue and retention.",
      "Used DAX and SQL for data transformation and modeling.",
      "Enabled better customer segmentation and strategic decisions.",
    ],
    tech: ["Power BI", "DAX", "SQL", "Data Modeling"],
    domain: "analytics",
  },
  {
    title: "ML SaaS Churn Prediction Model",
    description: [
      "Built a pipeline to predict customer churn.",
      "Applied feature engineering and model optimization.",
      "Used SHAP for interpretability of model decisions.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Feature Engineering", "SHAP"],
    domain: "ml",
  },
  {
    title: "Website Traffic Analytics Dashboard",
    description: [
      "Built dashboard using Google Analytics data.",
      "Analyzed traffic sources and user behavior.",
      "Improved marketing insights and decisions.",
    ],
    tech: ["Looker Studio", "Google Analytics"],
    domain: "analytics",
  },
  {
    title: "Startup Blueprint Generator",
    description: [
      "AI tool generating startup strategies.",
      "Used IBM Granite and prompt engineering.",
      "Generated structured business outputs.",
    ],
    tech: ["Python", "IBM Granite", "Watsonx"],
    domain: "ai",
  },
  {
    title: "Breast Cancer Analysis",
    description: [
      "Performed EDA on medical dataset.",
      "Built classification models.",
      "Evaluated prediction performance.",
    ],
    tech: ["Python", "Pandas", "Logistic Regression"],
    domain: "ml",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [aiResponse, setAIResponse] = useState("");

  // 🔥 IMPRESSIVE AI ENGINE (NOT REPEATING DESCRIPTION)
  const generateAI = (project, type) => {
    if (type === "recruiter") {
      return `🎯 What stands out in ${project.title} is not just the implementation, but the thinking behind it. This project shows the ability to translate raw data into decisions that actually matter in a business context. It reflects ownership, clarity in problem-solving, and an understanding of how data impacts real outcomes.`;
    }

    if (type === "technical") {
      return `⚙️ From a technical lens, this project reflects strong control over the pipeline — from structuring data correctly to ensuring outputs are meaningful. The focus isn’t just on building models or dashboards, but on making them reliable, interpretable, and aligned with real-world constraints.`;
    }

    if (type === "impact") {
      return `📈 The real value of this project lies in its applicability. Instead of being a theoretical implementation, it directly aligns with how organizations make decisions — reducing uncertainty, highlighting key signals, and enabling smarter actions. This is the kind of work that moves metrics, not just code.`;
    }
  };

  const handleExplain = (project, type) => {
    setActiveProject(project);
    setAIResponse("Thinking... 🤖");

    setTimeout(() => {
      setAIResponse(generateAI(project, type));
    }, 500);
  };

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 EXACT HERO BACKGROUND (RADIAL GLOW CENTER) */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          🚀 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 hover:from-purple-500/40 hover:via-blue-500/40 hover:to-pink-500/40 transition"
            >
              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full">
                
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <ul className="text-gray-400 mb-4 space-y-2 text-sm">
                  {project.description.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

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

                {/* 🔥 BUTTONS WITH GRADIENT OUTLINE */}
                <div className="flex flex-col gap-2">
                  {["recruiter", "technical", "impact"].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleExplain(project, type)}
                      className="relative rounded-lg p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40 transition"
                    >
                      <span className="block bg-[#1a1a1a] px-4 py-2 rounded-lg">
                        {type === "recruiter" && "🎯 Recruiter View"}
                        {type === "technical" && "⚙️ Technical View"}
                        {type === "impact" && "📈 Impact View"}
                      </span>
                    </button>
                  ))}
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