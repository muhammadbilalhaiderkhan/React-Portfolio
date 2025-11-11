import Silk from "../UI/Silk";
import BlurText from "../UI/BlurText";

function App() {
  return (
    <div className="relative w-full h-fit overflow-hidden ">
      {/* ✅ Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Background Silk Animation — only for hero section */}
        <div className="fixed inset-0 z-0">
          <Silk color="#7B7481" speed={4} scale={1} />
        </div>

        {/* Hero Content */}
        <div className="absolute top-30 z-10 text-center px-6">
          <h1 className="flex justify-center font-bold text-5xl text-center md:text-6xl lg:text-7xl mb-6 tracking-tight">
            <BlurText text="Bilal Haider" animateBy="words" />
          </h1>

          <p className="text-xl md:text-2xl mb-3 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting exceptional digital experiences through elegant code and thoughtful design.
          </p>

          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Specialized in building high-performance web applications that drive results.
          </p>

          <div className="flex gap-5 flex-wrap justify-center">
            <a
              href="/#projects"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="/#contact"
              className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-medium tracking-wide border-2 border-white/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
