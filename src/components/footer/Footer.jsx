import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="z-20 bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
              Bilal Haider
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Crafting exceptional digital experiences through elegant code and thoughtful design. Specializing in modern web technologies and scalable solutions.
            </p>
            <a
              href="mailto:contact@bilalhaider.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              bilalhaider.webdev@gmail.com
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  About
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Projects
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Web Development</li>
              <li className="text-sm text-gray-400">UI/UX Design</li>
              <li className="text-sm text-gray-400">Consulting</li>
              <li className="text-sm text-gray-400">Technical Writing</li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/muhammadbilalhaiderkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bilalwebdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/bilalhaider2484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Open to new opportunities and collaborations.
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Bilal Haider. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
