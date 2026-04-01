import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-1/3 left-1/3"></div>

      {/* LEFT SIDE (TEXT) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="text-gray-400 mb-3">👋 Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Tanishka
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
          Data Analyst 📊
        </h2>

        <p className="mt-6 text-gray-400 max-w-lg">
          I transform raw data into meaningful insights, build interactive dashboards, 
          and create AI-powered solutions to solve real-world problems.
        </p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition shadow-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition backdrop-blur-md">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE (IMAGE) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="https://via.placeholder.com/300"
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/20 shadow-xl"
        />
      </motion.div>

    </section>
  );
};

export default Hero;