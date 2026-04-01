const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Building AI Powered <br />
        Digital Experiences 🚀
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        I design and develop intelligent systems, data-driven applications,
        and interactive web experiences.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
          View Work
        </button>

        <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
          Contact Me
        </button>
      </div>

    </section>
  );
};

export default Hero;