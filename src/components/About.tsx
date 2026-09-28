import React from 'react';
import { CheckCircle2, ShieldCheck, GraduationCap, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iimGreen font-bold text-xs uppercase tracking-widest px-3 py-1 bg-iimGreen-subtle rounded-full">
            The Pinnacle of Management
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-iimNavy mt-3 mb-4">
            Welcome to IIM Calcutta
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            The first Indian Institute of Management, established by the Government of India in November 1961 in collaboration with MIT Sloan School of Management.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
                alt="IIM Calcutta Main Building"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl hidden sm:block z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
                alt="Students studying at IIMC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-iimGreen-subtle rounded-full -z-10 blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                "Joka" — Where Thought Leadership Meets Social Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Over the past six decades, IIM Calcutta has grown into one of the most prestigious business schools in the world. Often referred to as the <em>Asia's Business School</em>, our alumni lead Fortune 500 companies, pioneer groundbreaking startups, and shape economic policies globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <ShieldCheck className="text-iimGreen flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Global Accreditations</h4>
                  <p className="text-xs text-gray-500 mt-1">AACSB, AMBA, and EQUIS triple accredited.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <GraduationCap className="text-iimGreen flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Elite Faculty</h4>
                  <p className="text-xs text-gray-500 mt-1">World-class scholars and industry advisors.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <CheckCircle2 className="text-iimGreen" size={18} />
                Pioneering quantitative finance & data analytics pedagogy in India
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <CheckCircle2 className="text-iimGreen" size={18} />
                Robust global exchange programs with 80+ top B-schools worldwide
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <CheckCircle2 className="text-iimGreen" size={18} />
                Vibrant campus culture driven by 30+ student clubs and committees
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-iimGreen hover:text-iimGreen-dark font-bold text-sm transition-colors"
              >
                Read Complete Director's Message <Target size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};