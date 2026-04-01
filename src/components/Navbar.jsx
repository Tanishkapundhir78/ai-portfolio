const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
      
      <h1 className="text-xl font-semibold tracking-wide">
        Tanishka
      </h1>

      <div className="space-x-8 hidden md:flex">
        <a href="#about" className="hover:text-gray-400 transition">About</a>
        <a href="#projects" className="hover:text-gray-400 transition scroll-smooth">Projects</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>

    </div>
  );
};

export default Navbar;