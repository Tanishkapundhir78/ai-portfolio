import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
