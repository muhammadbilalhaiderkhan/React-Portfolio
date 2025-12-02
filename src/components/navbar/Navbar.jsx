import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.webp'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
    >
      <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-10">
        {/* ✅ Logo (Left Corner) */}
        <a
          href="home"
          className="text-2xl font-bold tracking-wide text-[#F4F4F4] hover:text-[#1D546C] transition-colors duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-70 w-auto object-contain "
          />
        </a>

        {/* ✅ Navigation Box (Right Corner, Glass Effect) */}
        <div className="hidden md:flex items-center gap-6 px-8 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#F4F4F4] font-medium hover:text-[#F4F4F4]/70 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F4F4F4] hover:text-white/50 transition-colors duration-300"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className=" shadow-lg border-t ">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-[#F4F4F4] font-medium bg-white/20  hover:bg-white/40 rounded-md transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
