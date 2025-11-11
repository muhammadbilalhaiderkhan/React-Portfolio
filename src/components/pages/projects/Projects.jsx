import { useState, useEffect } from "react";
import BlurText from "@/components/UI/BlurText";
import { ExternalLink, X, Search } from "lucide-react";
import ecommerce from '../../../assets/ecommerce.webp';
import resturant from '../../../assets/resturant.webp';
import gym from '../../../assets/gym.webp';
import finance from '../../../assets/finance.webp';
import medical from '../../../assets/medical.webp';
import portfolio from '../../../assets/portfolio.webp';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "design", label: "UI/UX" },
    { id: "tools", label: "Tools" },
  ];

  const mockProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "JoeGarner's website showcases his freelance web design and brand identity work. It highlights custom web projects and creative solutions for clients.",
      problem: `1) Clarity: Clearly presents services and expertise.
2) Portfolio: Highlights recent projects for credibility.
3) Call-to-Action: Easy contact options for client inquiries.`,
      technologies: ["React", "Tailwind", "Framer Motion", "Figma"],
      tags: ["frontend", "portfolio"],
      image_url: portfolio,
      category: "web",
      featured: true,
      link: "https://www.joegarnerdesign.com/",
    },
    {
      id: 2,
      title: "Restaurant App",
      description: "Visit Shropshire's “Eat & Drink” section showcases the best restaurants, cafés, markets, and local producers across the region. It highlights locally-sourced food and culinary experiences to guide visitors in exploring Shropshire's rich food culture.",
      problem: `1) Navigation: Clear categories for easy browsing.
2) Content Highlighting: Emphasized local food and unique experiences.
3) UX & Visuals: Streamlined layout for better readability and smoother mobile experience.`,
      technologies: ["React", "Tailwind", "MongoDB", "Figma"],
      tags: ["fullstack"],
      image_url: resturant,
      category: "web",
      featured: false,
      link: "https://www.visitshropshire.co.uk/eat-drink/",
    },
    {
      id: 3,
      title: "Gym Web-App",
      description: "Fenriz Gym's website showcases a Berlin-based martial arts studio offering MMA, Muay Thai, BJJ, boxing, wrestling, fitness, and yoga classes. It highlights the training space, experienced trainers, and variety of classes for all skill levels.",
      problem: `1) Clarity: Easy-to-understand class and facility information.
2) Service Highlight: Showcases diverse martial arts and fitness offerings.
3) Call-to-Action: Prominent trial class options and contact features for new members.`,
      technologies: ["React", "Tailwind", "Figma"],
      tags: ["design", "ui"],
      image_url: gym,
      category: "design",
      featured: false,
      link: "https://www.fenriz-gym.com/",
    },
    {
      id: 4,
      title: "E-Commerce Web-App",
      description: "Secchiari Boots is a premium e-commerce website showcasing stylish boots and footwear. It highlights the brand's collection with product categories, images, and shopping features.",
      problem: `1) Navigation: Cleaner menu with filters for easier browsing.
2) Product Pages: Structured details with tabs for description, sizes, and reviews.
3) Call-to-Action: Prominent “Add to Cart” and “Buy Now” buttons.
4) Mobile & Accessibility: Optimized layout and readability for better mobile experience.`,
      technologies: ["React", "Tailwind"],
      tags: ["web", "ui"],
      image_url: ecommerce,
      category: "web",
      featured: false,
      link: "https://www.secchiariboots.com/",
    },
    {
      id: 5,
      title: "Finance Landing-Page",
      description: "UnBound X is a fintech platform combining AI-driven trading signals, social portfolios, and community insights. It helps investors connect, share, and make informed decisions through advanced tools and real-time market data.",
      problem: `1) Clarity: Clearly communicates platform features and purpose.
2) Engagement: Highlights community sharing and social portfolios.
3) Feature Showcase: Displays AI tools and trading insights prominently.`,
      technologies: ["Figma", "React", "Tailwind"],
      tags: ["web", "ui"],
      image_url: finance,
      category: "web",
      featured: false,
      link: "https://unboundxinc.com/",
    },
    {
      id: 6,
      title: "Medical Web-App",
      description: "MedGenius is an online platform for healthcare professionals to quickly search medical codes like ICD-10-CM and HCPCS. It offers a clean interface, fast search, and reliable, up-to-date data.",
      problem: `1) Speed: Real-time search delivers results instantly.
2) Usability: Modern design simplifies code lookup.
3) Accuracy: Data is sourced from authoritative agencies.`,
      technologies: ["React", "Tailwind", "Figma", "FireBase"],
      tags: ["design", "ui"],
      image_url: medical,
      category: "design",
      featured: false,
      link: "https://medgenius.com/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.technologies.some((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, searchTerm, projects]);

  return (
    <div className="bg-black text-gray-300 min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="flex justify-center text-5xl md:text-6xl font-bold text-white mb-6">
            <BlurText text="My Projects" animateBy="words" />
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack
            development, design, and problem-solving.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in-up stagger-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects by name, technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 animate-fade-in-up stagger-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300 border border-white/20 hover:border-white/40 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-gray-400">Loading projects...</div>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:shadow-lg hover:shadow-white/10 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="inline-block px-2 py-1 bg-white/10 rounded text-xs font-semibold text-gray-300 capitalize">
                    {project.category.replace("-", " ")}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-300 bg-white/10 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details */}
                  <div className="pt-4 border-t border-white/10">
                    <button className="w-full py-2 text-sm font-semibold text-white hover:text-gray-200 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section below Projects */}
      <div className="mt-16 text-center animate-fade-in-up">
        <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          Explore more of my work and see how I transform ideas into interactive, AI-powered, and visually stunning digital solutions.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/#contact"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="/#services"
            className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black border border-white/20 rounded-lg max-w-5xl w-full my-8 flex flex-col md:flex-row overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image */}
            <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Right: Content */}
            <div className="p-8 space-y-6 md:w-1/2 flex flex-col justify-between">
              <div>
                {/* Category & Featured */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 capitalize">
                    {selectedProject.category.replace("-", " ")}
                  </span>
                  {selectedProject.featured && (
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h2 className="text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                {/* Problem & Solution */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg mb-4">
                  <h3 className="text-white font-semibold mb-2">Problem Solved</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visit Site Button */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 text-center bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Just Visit Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
