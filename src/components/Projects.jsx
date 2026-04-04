import { useState } from "react";

const projects = [
  {
    title: "Business Sales & Customer Analytics Dashboard",
    description:
      "Interactive Power BI dashboard delivering insights on sales trends, customer segmentation, and revenue optimization.",
    tech: ["Power BI", "DAX", "SQL", "Data Modeling"],
  },
  {
    title: "ML SaaS Churn Prediction Model",
    description:
      "End-to-end machine learning system predicting customer churn with explainability.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Feature Engineering",
      "SHAP",
      "Model Deployment",
    ],
  },
  {
    title: "Website Traffic Analytics Dashboard",
    description:
      "Advanced analytics dashboard using Google Analytics data in Looker Studio.",
    tech: ["Looker Studio", "Google Analytics", "Data Visualization"],
  },
  {
    title: "Startup Blueprint Generator",
    description:
      "AI-powered system generating startup plans using IBM Granite and Watsonx.",
    tech: [
      "Python",
      "IBM Granite",
      "Watsonx",
      "Prompt Engineering",
      "Gradio",
    ],
  },
  {
    title: "Breast Cancer Analysis",
    description:
      "Machine learning-based medical data analysis for early cancer detection.",
    tech: ["Python", "Pandas", "Seaborn", "Logistic Regression", "EDA"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [aiResponse, setAIResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 REAL AI CALL
  const getAIExplanation = async (project, type) => {
    setLoading(true);
    setActiveProject(project);

    try {
      const response = await fetch("http://localhost:5000/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project,
          type,
        }),
      });

      const data = await response.json();
      setAIResponse(data.result);
    } catch (error) {
      setAIResponse("⚠️ AI not connected. Start backend server.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        🚀 Projects
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20"
          >
            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10">
              
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

              {/* BUTTONS */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => getAIExplanation(project, "recruiter")}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 px-4 py-2 rounded-lg transition"
                >
                  🎯 Recruiter View
                </button>

                <button
                  onClick={() => getAIExplanation(project, "technical")}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 px-4 py-2 rounded-lg transition"
                >
                  ⚙️ Technical View
                </button>

                <button
                  onClick={() => getAIExplanation(project, "impact")}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/40 px-4 py-2 rounded-lg transition"
                >
                  📈 Impact View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI RESPONSE PANEL */}
      {activeProject && (
        <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">
            🧠 AI Explanation: {activeProject.title}
          </h3>

          {loading ? (
            <p className="text-gray-400 animate-pulse">
              Thinking... 🤖
            </p>
          ) : (
            <p className="text-gray-300 whitespace-pre-line">
              {aiResponse}
            </p>
          )}
        </div>
      )}
    </section>
  );
}