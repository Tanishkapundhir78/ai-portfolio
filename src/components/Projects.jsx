import { useState } from "react";

const projects = [
  {
    title: "Startup Blueprint Generator",
    description:
      "AI-powered system that generates complete startup plans using IBM Granite LLM.",
    tech: ["Python", "IBM Granite", "Gradio", "Prompt Engineering"],
  },
  {
    title: "Network Intrusion Detection System",
    description:
      "Machine learning system to detect cyber attacks using real-world network traffic data.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML"],
  },
  {
    title: "Website Traffic Analytics Dashboard",
    description:
      "Interactive dashboard analyzing Google Analytics data for business insights.",
    tech: ["Power BI", "SQL", "Data Visualization"],
  },
  {
    title: "Weather Automation Panel",
    description:
      "Smart weather dashboard with AI recommendations and real-time forecasting.",
    tech: ["Streamlit", "Python", "API Integration"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [mode, setMode] = useState("recruiter");
  const [aiResponse, setAIResponse] = useState("");

  const generateExplanation = (project, type) => {
    if (type === "recruiter") {
      return `🎯 This project, ${project.title}, focuses on solving real-world problems using ${
        project.tech[0]
      }. It demonstrates strong problem-solving skills and practical implementation.`;
    }

    if (type === "technical") {
      return `⚙️ Built using ${project.tech.join(
        ", "
      )}, this project includes scalable architecture, data processing pipelines, and optimized logic for performance.`;
    }

    if (type === "impact") {
      return `📈 This project improves efficiency, enables data-driven decisions, and showcases the ability to translate complex problems into actionable solutions.`;
    }
  };

  const handleExplain = (project, type) => {
    setActiveProject(project);
    setMode(type);
    setAIResponse("Thinking... 🤖");

    setTimeout(() => {
      setAIResponse(generateExplanation(project, type));
    }, 800);
  };

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        🚀 Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* AI Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleExplain(project, "recruiter")}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                🎯 Explain for Recruiter
              </button>

              <button
                onClick={() => handleExplain(project, "technical")}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                ⚙️ Technical Breakdown
              </button>

              <button
                onClick={() => handleExplain(project, "impact")}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
              >
                📈 Business Impact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Response Panel */}
      {activeProject && (
        <div className="mt-12 bg-[#1a1a1a] p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-semibold mb-4">
            🧠 AI Explanation: {activeProject.title}
          </h3>

          <p className="text-gray-300">{aiResponse}</p>
        </div>
      )}
    </section>
  );
}