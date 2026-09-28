import React from 'react';
import { BookOpen, FileSpreadsheet, Award, Download, ExternalLink, Calendar } from 'lucide-react';

const academicStats = [
  { label: 'Total Enrolled Students', value: '1,200+', icon: BookOpen },
  { label: 'Full-Time Faculty Members', value: '95+', icon: Award },
  { label: 'Academic Departments', value: '10+', icon: FileSpreadsheet },
  { label: 'Global Partner Universities', value: '82', icon: ExternalLink },
];

const documents = [
  { title: 'Academic Calendar 2024-25 (PGP & MBAEX)', size: '1.4 MB', date: 'June 2024' },
  { title: 'Student Handbook & Code of Conduct', size: '3.2 MB', date: 'July 2024' },
  { title: 'Course Catalogue & Electives Directory', size: '4.8 MB', date: 'May 2024' },
  { title: 'Examination Guidelines & Grading Policies', size: '980 KB', date: 'August 2024' },
];

export const AcademicsRecords: React.FC = () => {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iimGreen font-bold text-xs uppercase tracking-widest px-3 py-1 bg-iimGreen-subtle rounded-full">
            Excellence in Education
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-iimNavy mt-3 mb-4">
            Academic Records & Resources
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Comprehensive repository of our academic rigor, faculty publications, student handbooks, and institutional statistics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-iimGreen-subtle text-iimGreen flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-serif font-bold text-iimNavy mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Documents & Portal Access */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-iimNavy">Essential Academic Downloads</h3>
            <div className="space-y-3">
              {documents.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between hover:border-iimGreen transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white text-iimGreen shadow-sm group-hover:bg-iimGreen group-hover:text-white transition-colors">
                      <FileSpreadsheet size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{doc.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {doc.date}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Downloading ${doc.title}...`)}
                    className="p-2.5 rounded-lg bg-white text-gray-700 hover:bg-iimGreen hover:text-white shadow-sm transition-colors border border-gray-200"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-iimNavy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-iimGreen/20 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10 space-y-6">
              <span className="px-3 py-1 rounded bg-iimGold text-iimNavy text-xs font-bold uppercase">
                Student & Faculty Portal
              </span>
              <h3 className="text-2xl font-serif font-bold">Academic Management System (AMS)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Registered students and faculty members can log in to access grade books, course registration, attendance tracking, and library digital subscriptions.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="#contact"
                  className="block w-full py-3.5 px-4 rounded-xl bg-iimGreen hover:bg-iimGreen-light text-white font-semibold text-center shadow-lg transition-all"
                >
                  Student Portal Login
                </a>
                <a
                  href="#contact"
                  className="block w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-center border border-white/20 transition-all"
                >
                  Faculty & Staff Login
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};