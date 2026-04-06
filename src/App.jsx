import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalWriting from "./components/TechnicalWriting";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Internships from "./components/Internships";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechnicalWriting />
      <Certifications />
      <Skills />
      <Internships />
    </div>
  );
}
import Internships from "./components/Internships";

export default App;
