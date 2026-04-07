import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 50) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }
      lastScroll = latest;
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">

        {/* Only right side links */}
        <div className="flex gap-8 text-gray-300 text-lg">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;