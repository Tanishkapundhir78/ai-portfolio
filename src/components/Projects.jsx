import { useState } from "react";

const projects = [
  {
    title: "Business Sales & Customer Analytics Dashboard",
    description: [
      "Designed an end-to-end Power BI dashboard to track KPIs like revenue, customer retention, and sales trends.",
      "Performed data modeling and transformation using DAX and SQL to ensure accurate and scalable reporting.",
      "Enabled stakeholders to identify high-value customers and optimize business strategies.",
    ],
    tech: ["Power BI", "DAX", "SQL", "Data Modeling"],
    domain: "analytics",
  },
  {
    title: "ML SaaS Churn Prediction Model",
    description: [
      "Built a machine learning pipeline to predict customer churn using structured SaaS data.",
      "Applied feature engineering and model tuning to improve prediction accuracy and reduce overfitting.",
      "Used SHAP for model interpretability, helping understand key churn-driving factors.",
    ],
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
    description: [
      "Developed an interactive dashboard in Looker Studio using Google Analytics data.",
      "Analyzed traffic sources, user behavior, and conversion funnels.",
      "Helped identify high-performing channels and optimize marketing decisions.",
    ],
    tech: ["Looker Studio", "Google Analytics", "Data Visualization"],
    domain: "analytics",
  },
  {
    title: "Startup Blueprint Generator",
    description: [
      "Built an AI-driven system to generate structured startup plans using IBM Granite.",
      "Designed prompts to generate business models, revenue strategies, and market insights.",
      "Focused on real-world usability with clear and actionable outputs.",
    ],
    tech: ["Python", "IBM Granite", "Watsonx", "Prompt Engineering"],
    domain: "ai",
  },
  {
    title: "Breast Cancer Analysis",
    description: [
      "Performed exploratory data analysis on medical datasets to identify key patterns.",
      "Built classification models for early cancer prediction.",
      "Evaluated model performance using metrics like accuracy and precision.",
    ],
    tech: ["Python", "Pandas", "EDA", "Logistic Regression"],
    domain: "ml",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [aiResponse, setAIResponse] = useState("");

  const generateAI = (project, type) => {
    if (type === "recruiter") {
      return `🎯 ${project.title} demonstrates strong ability to solve real-world problems using ${
        project.domain === "ml"
          ? "machine learning and data modeling"
          : project.domain === "analytics"
          ? "data visualization and business analytics"
          : "AI-driven system design"
      }. It reflects practical implementation skills and a focus on measurable outcomes.`;
    }

    if (type === "technical") {
      return `⚙️ The project leverages ${project.tech.join(
        ", "
      )}. It includes structured data handling, optimized workflows, and ${
        project.domain === "ml"
          ? "model training, evaluation, and interpretability techniques"
          : project.domain === "analytics"
          ? "KPI tracking, dashboard design, and data transformation"
          : "prompt engineering and AI integration"
      }.`;
    }

    if (type === "impact") {
      return `📈 The impact lies in ${
        project.domain === "ml"
          ? "predicting outcomes and reducing uncertainty in decision-making"
          : project.domain === "analytics"
          ? "enabling stakeholders to make data-driven business decisions"
          : "automating complex planning processes"
      }, showcasing strong analytical and problem-solving capability.`;
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
      
      {/* 🔥 EXACT HERO-LIKE BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-20"></div>
        </div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          🚀 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-6 bg-[#0f0f0f] hover:border-white/20 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* 🔥 BULLET PROOF DESCRIPTIONS */}
              <ul className="text-gray-400 mb-4 space-y-2 text-sm">
                {project.description.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

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

              {/* BUTTONS */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleExplain(project, "recruiter")}
                  className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 px-4 py-2 rounded-lg transition"
                >
                  🎯 Recruiter View
                </button>

                <button
                  onClick={() => handleExplain(project, "technical")}
                  className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 px-4 py-2 rounded-lg transition"
                >
                  ⚙️ Technical View
                </button>

                <button
                  onClick={() => handleExplain(project, "impact")}
                  className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 px-4 py-2 rounded-lg transition"
                >
                  📈 Impact View
                </button>
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