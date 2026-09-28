import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    tag: 'Announcements',
    date: 'October 24, 2024',
    title: 'IIM Calcutta ranked among top 10 global business schools in Executive Education',
    desc: 'The Financial Times Global Executive Education Ranking highlights IIM Calcutta’s exceptional custom and open programmes.'
  },
  {
    id: 2,
    tag: 'Research',
    date: 'October 18, 2024',
    title: 'Annual FinTech Conclave 2024 brings global banking leaders to Joka campus',
    desc: 'Discussions centered on generative AI in financial risk modeling, blockchain security, and central bank digital currencies.'
  },
  {
    id: 3,
    tag: 'Campus News',
    date: 'October 12, 2024',
    title: 'IIM Calcutta Innovation Park incubates 50 new social impact startups this quarter',
    desc: 'Empowering grassroot entrepreneurs across Eastern India with seed funding, mentorship, and tech infrastructure.'
  }
];

const eventsItems = [
  {
    date: 'NOV 10',
    time: '10:00 AM IST',
    title: 'Global Leadership Lecture Series: Future of Sustainable Supply Chains',
    speaker: 'Dr. Elena Rostova, VP Global Logistics, Unilever'
  },
  {
    date: 'NOV 18',
    time: '02:30 PM IST',
    title: 'Annual Research Colloquium on Behavioral Economics & Decision Sciences',
    speaker: 'Prof. Amitabha Sen & Visiting Scholars'
  },
  {
    date: 'DEC 05',
    time: '09:00 AM IST',
    title: 'Intaglio 2024 — Asia’s Largest B-School Summit Commences',
    speaker: 'Student Placement & Cultural Committee'
  }
];

export const NewsAndEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-iimGreen font-bold text-xs uppercase tracking-widest px-3 py-1 bg-iimGreen-subtle rounded-full">
              Stay Updated
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-iimNavy mt-3">
              News & Announcements
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-xl w-max">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'news' ? 'bg-white text-iimGreen shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'events' ? 'bg-white text-iimGreen shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* Content switch */}
        {activeTab === 'news' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {newsItems.map((news) => (
              <div 
                key={news.id} 
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:border-iimGreen transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="px-3 py-1 rounded bg-iimGreen-subtle text-iimGreen uppercase tracking-wider">
                      {news.tag}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar size={13} /> {news.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-iimNavy group-hover:text-iimGreen transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {news.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-iimGreen font-bold text-sm hover:underline"
                  >
                    Read Full Story <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {eventsItems.map((event, idx) => (
              <div 
                key={idx}
                className="bg-iimNavy text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-iimGold/10 rounded-full blur-2xl" />
                
                <div className="space-y-4 relative z-10">
                  <div className="inline-block px-4 py-2 rounded-xl bg-iimGold text-iimNavy font-bold text-sm tracking-wider">
                    {event.date}
                  </div>

                  <div className="text-xs text-gray-300 font-medium">
                    🕒 {event.time}
                  </div>

                  <h3 className="text-xl font-serif font-bold leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-300 italic">
                    Speaker: {event.speaker}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-iimGold font-bold text-sm hover:underline"
                  >
                    Register / Join Session <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
