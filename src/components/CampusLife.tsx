import React from 'react';
import { Users, Trophy, Coffee, Sparkles, Compass } from 'lucide-react';

const campusFeatures = [
  {
    title: "135-Acre Lakeside Campus",
    desc: "Lush green oasis in Joka, Kolkata featuring world-class academic blocks, Wi-Fi enabled dorms, and serene water bodies.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    icon: Compass
  },
  {
    title: "Vibrant Student Clubs & Fests",
    desc: "Home to legendary cultural and business festivals like Intaglio, Carpe Diem, and 30+ active student-run clubs.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    icon: Sparkles
  },
  {
    title: "State-of-the-Art Sports Complex",
    desc: "Comprehensive facilities for football, cricket, lawn tennis, badminton, squash, and a fully equipped modern gymnasium.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    icon: Trophy
  },
  {
    title: "World-Class Library & Tech",
    desc: "B.C. Roy Memorial Library houses over 200,000 volumes, international journals, and Bloomberg terminals.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    icon: Coffee
  }
];

export const CampusLife: React.FC = () => {
  return (
    <section id="campus-life" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iimGreen font-bold text-xs uppercase tracking-widest px-3 py-1 bg-iimGreen-subtle rounded-full">
            Life at Joka
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-iimNavy mt-3 mb-4">
            Campus Life & Facilities
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Beyond lecture halls lies a dynamic, inclusive, and vibrant community that shapes lifelong friendships and memories.
          </p>
        </div>

        {/* Grid of Campus features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campusFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-iimGreen shadow-md">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-iimNavy group-hover:text-iimGreen transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};