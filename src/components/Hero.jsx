const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-1/3"></div>

      {/* Small Intro */}
      <p className="text-gray-400 mb-4 text-sm md:text-base">
        👋 Hi, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        Tanishka
      </h1>

      {/* Role */}
      <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
        AI Developer & Data Enthusiast 🚀
      </h2>

      {/* About Line */}
      <p className="mt-6 text-gray-400 max-w-xl">
        I build intelligent AI systems, data-driven dashboards, and interactive web applications 
        that solve real-world problems and create meaningful impact.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition shadow-lg">
          View Projects
        </button>

        <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition backdrop-blur-md">
          Contact Me
        </button>
      </div>

    </section>
  );
};

export default Hero;