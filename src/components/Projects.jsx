import { useState, useRef } from "react";
import { motion } from "framer-motion";

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
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 500);
  };

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0" />

      {/* ✨ SOFT WHITE GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/5 blur-[140px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
           Projects
        </motion.h2>

        {/* 🧊 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -10 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              {/* ✨ WHITE GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-white/5 rounded-2xl"></div>

              {/* 🔥 EDGE LIGHT */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition duration-500"></div>

              <h3 className="text-xl font-semibold mb-3 relative z-10">
                {project.title}
              </h3>

              <ul className="text-gray-400 mb-4 space-y-2 text-sm relative z-10">
                {project.description.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* ⚪ BUTTONS (MONOCHROME) */}
              <div className="flex flex-col gap-2 relative z-10">
                {["recruiter", "technical", "impact"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleExplain(project, type)}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                  >
                    {type === "recruiter" && "🎯 Recruiter View"}
                    {type === "technical" && "⚙️ Technical View"}
                    {type === "impact" && "📈 Impact View"}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* 🧠 AI RESPONSE */}
        {activeProject && (
          <motion.div
            ref={responseRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-4">
              🧠 Insight: {activeProject.title}
            </h3>

            <p className="text-gray-300">{aiResponse}</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}