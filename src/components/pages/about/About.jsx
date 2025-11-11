import { Code2, Palette, Zap, Users, Award, Target } from 'lucide-react';
import BlurText from '@/components/UI/BlurText';
import './About.css';
import Particles from '@/components/UI/Particles';
import { FaReact, FaJs, FaGithub, FaBootstrap } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, 
  SiSupabase, SiMongodb, SiVercel, SiNetlify 
} from "react-icons/si";

function About() {
  const coreSkills = [
    { icon: Code2, title: 'Development', description: 'Building robust, scalable applications with modern web technologies and best practices.' },
    { icon: Palette, title: 'Design', description: 'Creating intuitive, beautiful interfaces that enhance user experience and engagement.' },
    { icon: Zap, title: 'Performance', description: 'Optimizing applications for speed, efficiency, and seamless user interactions.' },
    { icon: Users, title: 'Collaboration', description: 'Working effectively with teams to deliver exceptional results on time.' },
  ];

  const technicalSkills = [
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaJs, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiNetlify, name: "Netlify" },
  ];

  const experience = [
    { year: '2024-Present', role: 'Full Stack Developer', description: 'Building end-to-end solutions for clients across various industries.' },
    { year: '2022-2024', role: 'Junior Developer', description: 'Started career learning and contributing to core features.' },
    { year: '2021-2022', role: 'Web Designer', description: 'Designing modern, user-friendly UIs for a variety of startups and digital products.' },
  ];

  return (
    <section className="relative bg-black text-gray-300 py-20 overflow-hidden">
      {/* 🔹 Particles Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Particles
          particleCount={300}
          particleSpread={15}
          speed={0.2}
          particleColors={['#ffffff', '#7B74FF', '#00FFE5']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-20">
          <h1 className=" text-4xl md:text-5xl font-bold text-white mb-6">
             <BlurText text="About Me" animateBy="words" />
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-500 mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            I’m a passionate MERN Stack developer specializing in building full-stack web applications, AI-powered solutions, and autonomous AI agents. I combine my skills in coding, AI, and design to craft digital products that are not only functional but also impactful and user-friendly. I love exploring the latest in AI and web technologies to deliver innovative solutions that solve real-world problems.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                >
                  <Icon className="w-8 h-8 text-white mb-4 group-hover:text-gray-200 transition-colors" />
                  <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-12">Technical Skills</h2>
          <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="skills-loop-container">
              <div className="skills-loop">
                {[...technicalSkills, ...technicalSkills].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="skill-badge">
                      <div className="skill-content">
                        <Icon className="text-white text-2xl" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fade-left"></div>
            <div className="fade-right"></div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black mt-2"></div>
                  {index !== experience.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-gray-400 mb-2">{item.year}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                  <p className="text-gray-400 mb-3">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-white" />
              <div className="text-4xl font-bold text-white">50+</div>
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-white" />
              <div className="text-4xl font-bold text-white">30+</div>
            </div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-6 h-6 text-white" />
              <div className="text-4xl font-bold text-white">5+</div>
            </div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
