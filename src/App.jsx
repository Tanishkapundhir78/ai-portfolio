import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
