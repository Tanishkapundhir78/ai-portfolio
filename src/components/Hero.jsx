import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 relative overflow-hidden bg-[#0f0f0f]">

      {/* 🔥 ANIMATED MESH BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]"
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"
        />

        {/* Blob 3 (extra depth) */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] bg-pink-500 opacity-10 blur-[100px] rounded-full top-[30%] left-[40%]"
        />

      </div>

      {/* LEFT SIDE (TEXT) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-3"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Tanishka
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl mt-4 text-gray-300"
        >
          Data Analyst 📊
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 max-w-lg leading-relaxed"
        >
          Turning messy data into clear decisions — I uncover patterns, build intelligent dashboards,
          and craft data stories that actually drive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 justify-center md:justify-start"
        >
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition shadow-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition backdrop-blur-md">
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE (IMAGE) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 z-10"
      >
        <motion.img
          src="/your-image.jpg"
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/10 shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;