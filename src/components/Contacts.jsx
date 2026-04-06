export default function Contact() {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0f14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-4xl font-bold mb-6">
          🚀 Let’s Work Together
        </h2>

        <p className="text-gray-400 mb-12">
          I’m open to internships, freelance work, and exciting opportunities in 
          Data Analytics, AI, and Business Intelligence.  
          If you have something interesting, let’s connect.
        </p>

        {/* MAIN CARD */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-400/50 to-blue-400/50">

          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-10">

            {/* EMAIL */}
            <p className="text-lg mb-6">
              📩 tanishka.email@example.com
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6 flex-wrap">

              <a
                href="https://github.com/Tanishkapundhir78"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:tanishkapundhir8@gmail.com"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-400/50 to-blue-400/50"
              >
                Contact Me
              </a>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="text-gray-500 text-sm mt-10">
          Built with passion for data, AI, and impactful solutions.
        </p>

      </div>
    </section>
  );
}