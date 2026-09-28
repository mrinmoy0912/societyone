import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, ArrowRight, Clock, FileText } from 'lucide-react';

const programmesData = [
  {
    id: 'mba',
    name: 'MBA (PGP)',
    category: 'Flagship',
    duration: '2 Years Full-Time',
    eligibility: 'Bachelor\'s Degree with 50% + CAT Score',
    description: 'Our flagship Master in Business Administration program designed to groom young minds into holistic business leaders with rigorous quantitative and managerial training.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    highlights: ['Premier Case Study Pedagogy', 'International Student Exchange', 'Top-tier Global Placements']
  },
  {
    id: 'mbaex',
    name: 'MBAEX (Executive MBA)',
    category: 'Executive',
    duration: '1 Year Full-Time',
    eligibility: 'Min. 5 Years Work Experience + GCAT/GMAT',
    description: 'Designed for experienced professionals aspiring for CXO and senior leadership roles, featuring an intensive international immersion module.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    highlights: ['CXO Mentorship Series', 'Global Immersion Trip', 'Advanced Strategy & Leadership']
  },
  {
    id: 'pgpdba',
    name: 'PGPDBA (Business Analytics)',
    category: 'Specialized',
    duration: '2 Years Full-Time',
    eligibility: 'Engineering/Math background + Entrance Test',
    description: 'Jointly offered by IIM Calcutta, IIT Kharagpur, and ISI Kolkata. The undisputed gold standard in Business Analytics and Data Science education.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    highlights: ['Tri-Institute Pedagogy', 'Advanced Machine Learning & AI', 'Hands-on Industry Capstone']
  },
  {
    id: 'doctoral',
    name: 'Doctoral Programme (Fellow)',
    category: 'Research',
    duration: '4-5 Years Full-Time',
    eligibility: 'Master\'s Degree / Professional Qualification',
    description: 'Produces premier scholars, researchers, and academic faculty for leading business schools and research institutions across the world.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    highlights: ['Full Financial Fellowship', 'Conference Grants Abroad', 'Renowned Faculty Advisors']
  }
];

export const Programmes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mba');

  const currentProg = programmesData.find(p => p.id === activeTab) || programmesData[0];

  return (
    <section id="programmes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iimGreen font-bold text-xs uppercase tracking-widest px-3 py-1 bg-iimGreen-subtle rounded-full">
            World-Class Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-iimNavy mt-3 mb-4">
            Academic Programmes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Transformative management education tailored for future leaders, innovators, and researchers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programmesData.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${activeTab === prog.id ? 'bg-iimGreen text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              {prog.name}
            </button>
          ))}
        </div>

        {/* Active Programme Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-fadeIn">
          
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={currentProg.image}
              alt={currentProg.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="px-3 py-1 rounded bg-iimGold text-iimNavy text-xs font-bold uppercase w-max mb-2">
                {currentProg.category}
              </span>
              <h3 className="text-2xl font-serif font-bold">{currentProg.name}</h3>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700">
                  <Clock size={15} className="text-iimGreen" /> {currentProg.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700">
                  <FileText size={15} className="text-iimGreen" /> {currentProg.eligibility}
                </span>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {currentProg.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Programme Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentProg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-iimGreen" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">Admissions open for 2025-27 batch</span>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-iimGreen hover:bg-iimGreen-dark text-white font-semibold text-sm shadow-md flex items-center gap-2 transition-all"
              >
                Download Brochure <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};