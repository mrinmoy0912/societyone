import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-iimNavy text-white pt-20 pb-12 border-t border-iimGreen/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Institute Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-iimGreen flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg">
                I
              </div>
              <div>
                <div className="font-serif font-bold text-xl tracking-tight text-white leading-none">
                  IIM CALCUTTA
                </div>
                <div className="text-xs text-iimGold font-medium tracking-wider uppercase mt-1">
                  Indian Institute of Management Calcutta
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Diamond Harbour Road, Joka, Kolkata - 700104, West Bengal, India. 
              Asia's finest management institution committed to leadership, research, and nation building.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-iimGold flex-shrink-0" />
                <span>Joka, Kolkata - 700104, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-iimGold flex-shrink-0" />
                <span>+91-33-2467-8300 / 9181</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-iimGold flex-shrink-0" />
                <span>director@iimcal.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-iimGold">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-iimGold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-iimGold transition-colors">About Institute</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">MBA & Executive Programmes</a></li>
              <li><a href="#academics" className="hover:text-iimGold transition-colors">Academic Records</a></li>
              <li><a href="#campus-life" className="hover:text-iimGold transition-colors">Campus Life & Facilities</a></li>
              <li><a href="#news" className="hover:text-iimGold transition-colors">News & Announcements</a></li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-iimGold">Programmes</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">MBA (PGP)</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">MBAEX (Executive)</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">PGPDBA (Business Analytics)</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">Doctoral Programme (Fellow)</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">Executive Education</a></li>
              <li><a href="#programmes" className="hover:text-iimGold transition-colors">Management Development</a></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-iimGold">Connect With Us</h3>
            <p className="text-gray-300 text-sm">
              Follow official social channels for real-time updates, admissions notices, and research highlights.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full bg-white/10 hover:bg-iimGreen text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2.5 rounded-full bg-white/10 hover:bg-iimGreen text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 rounded-full bg-white/10 hover:bg-iimGreen text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2.5 rounded-full bg-white/10 hover:bg-iimGreen text-white transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-full bg-white/10 hover:bg-iimGreen text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} Indian Institute of Management Calcutta (IIMC). All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-iimGold transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-iimGold transition-colors">Terms of Use</a>
            <a href="#home" className="hover:text-iimGold transition-colors">RTI</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-iimGold hover:underline font-semibold"
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};