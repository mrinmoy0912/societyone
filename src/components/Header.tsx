import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'About', 
      href: '#about',
      dropdown: ['Overview', 'Director\'s Message', 'Board of Governors', 'History & Heritage', 'Rankings & Accreditations'] 
    },
    { 
      name: 'Programmes', 
      href: '#programmes',
      dropdown: ['MBA (PGP)', 'MBAEX (Executive)', 'PGPDBA (Business Analytics)', 'Doctoral Programme (Fellow)', 'Executive Education'] 
    },
    { name: 'Academics', href: '#academics' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility bar */}
      <div className={`bg-iimNavy text-white text-xs py-1.5 px-4 sm:px-8 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-iimGold transition-colors cursor-pointer">
              <Phone size={13} className="text-iimGold" /> +91-33-2467-8300
            </span>
            <span className="flex items-center gap-1.5 hover:text-iimGold transition-colors cursor-pointer">
              <Mail size={13} className="text-iimGold" /> media@iimcal.ac.in
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#academics" className="hover:text-iimGold transition-colors">Academic Records</a>
            <span>|</span>
            <a href="#news" className="hover:text-iimGold transition-colors">Tenders</a>
            <span>|</span>
            <a href="#contact" className="hover:text-iimGold transition-colors">NIRF</a>
            <span>|</span>
            <div className="flex items-center gap-1 text-iimGold cursor-pointer font-medium">
              <Globe size={13} /> EN <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-iimGreen flex items-center justify-center text-white font-serif font-bold text-2xl shadow-md group-hover:bg-iimGreen-dark transition-colors">
              I
            </div>
            <div>
              <div className="font-serif font-bold text-lg sm:text-xl tracking-tight text-iimGreen-dark leading-none">
                IIM CALCUTTA
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">
                Indian Institute of Management Calcutta
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-iimGreen rounded-md transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="text-gray-400 group-hover:text-iimGreen transition-transform group-hover:rotate-180" />}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn z-50">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-iimGreen-subtle hover:text-iimGreen transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA / Search */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              aria-label="Search website"
              className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-iimGreen hover:text-white transition-colors"
            >
              <Search size={18} />
            </button>
            <a 
              href="#programmes" 
              className="px-5 py-2.5 rounded-md bg-iimGreen hover:bg-iimGreen-dark text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-800 hover:text-iimGreen py-1"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-iimGreen-light">
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-gray-600 hover:text-iimGreen py-1"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#programmes"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-lg bg-iimGreen text-white font-semibold shadow"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};