import { useState, useRef } from "react";

const projects = [
  {
    title: "Business Sales & Customer Analytics Dashboard",
    description: [
      "Designed Power BI dashboard to track revenue & retention.",
      "Used DAX & SQL for transformation.",
      "Improved customer segmentation decisions.",
    ],
    tech: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "ML SaaS Churn Prediction Model",
    description: [
      "Built churn prediction pipeline.",
      "Applied feature engineering & tuning.",
      "Used SHAP for explainability.",
    ],
    tech: ["Python", "Scikit-learn", "SHAP"],
  },
  {
    title: "Website Traffic Analytics Dashboard",
    description: [
      "Analyzed GA data in Looker Studio.",
      "Tracked user journeys & funnels.",
      "Improved marketing insights.",
    ],
    tech: ["Looker Studio", "Google Analytics"],
  },
  {
    title: "Startup Blueprint Generator",
    description: [
      "AI tool generating startup strategies.",
      "Used IBM Granite & prompt engineering.",
      "Created structured outputs.",
    ],
    tech: ["Python", "IBM Granite", "Watsonx"],
  },
  {
    title: "Breast Cancer Analysis",
    description: [
      "Performed EDA on dataset.",
      "Built classification models.",
      "Evaluated performance.",
    ],
    tech: ["Python", "Logistic Regression"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [aiResponse, setAIResponse] = useState("");
  const responseRef = useRef(null);

  // 🔥 PROJECT-SPECIFIC INTELLIGENT ANSWERS
  const generateAI = (project, type) => {
    const name = project.title;

    if (name.includes("Sales")) {
      if (type === "recruiter")
        return "🎯 This project shows strong business understanding — not just building dashboards, but identifying what metrics actually drive revenue and retention. It reflects the ability to think like a decision-maker, not just an analyst.";
      if (type === "technical")
        return "⚙️ Focus was on clean data modeling and efficient DAX calculations to ensure performance at scale. The challenge was balancing accuracy with dashboard responsiveness.";
      if (type === "impact")
        return "📈 Helped uncover high-value customer segments and sales trends, which directly supports better targeting and revenue optimization strategies.";
    }

    if (name.includes("Churn")) {
      if (type === "recruiter")
        return "🎯 This project highlights strong problem-solving in a high-impact business scenario — customer churn. It shows the ability to move beyond theory and build something actionable.";
      if (type === "technical")
        return "⚙️ Key strength lies in feature engineering and model interpretability using SHAP. Instead of just predicting churn, the model explains *why* customers leave.";
      if (type === "impact")
        return "📈 Enables businesses to proactively retain customers by identifying risk signals early, which is far more valuable than reactive analysis.";
    }

    if (name.includes("Traffic")) {
      if (type === "recruiter")
        return "🎯 Demonstrates ability to turn raw web data into meaningful marketing insights. Focus is on understanding user behavior, not just reporting numbers.";
      if (type === "technical")
        return "⚙️ Involved structuring Google Analytics data into clear funnels and segments, ensuring that dashboards are intuitive and actionable.";
      if (type === "impact")
        return "📈 Helps identify which channels actually drive conversions, allowing businesses to allocate budget more effectively.";
    }

    if (name.includes("Startup")) {
      if (type === "recruiter")
        return "🎯 This project shows strong product thinking — combining AI with real-world startup needs. It’s not just tech, it’s usability-focused.";
      if (type === "technical")
        return "⚙️ Core challenge was prompt engineering — structuring inputs so the AI generates consistent and meaningful business outputs.";
      if (type === "impact")
        return "📈 Reduces the barrier for idea validation by generating structured startup plans instantly, saving time and effort.";
    }

    if (name.includes("Cancer")) {
      if (type === "recruiter")
        return "🎯 Reflects ability to work on sensitive, high-impact datasets. Shows analytical thinking applied to real-world healthcare problems.";
      if (type === "technical")
        return "⚙️ Focused on feature relationships and model evaluation to ensure reliable predictions, not just high accuracy scores.";
      if (type === "impact")
        return "📈 Supports early detection insights, which is critical in healthcare where timely decisions can save lives.";
    }

    return "Insight not available.";
  };

  const handleExplain = (project, type) => {
    setActiveProject(project);
    setAIResponse("Thinking... 🤖");

    setTimeout(() => {
      setAIResponse(generateAI(project, type));

      // 🔥 AUTO SCROLL
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 400);
  };

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🔥 HERO-LIKE RADIAL BG */}
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
              className="relative group rounded-2xl p-[1px] h-full bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40"
            >
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <ul className="text-gray-400 mb-4 space-y-2 text-sm">
                  {project.description.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  {["recruiter", "technical", "impact"].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleExplain(project, type)}
                      className="relative rounded-lg p-[1px] bg-gradient-to-r from-white/10 to-white/10 hover:from-purple-400/40 hover:to-blue-400/40"
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

        {/* 🔥 AUTO SCROLL TARGET */}
        {activeProject && (
          <div
            ref={responseRef}
            className="mt-16 bg-[#0f0f0f] border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              🧠 Insight: {activeProject.title}
            </h3>

            <p className="text-gray-300">{aiResponse}</p>
          </div>
        )}
      </div>
    </section>
  );
}