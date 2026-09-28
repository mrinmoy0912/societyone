import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Award, BookOpen, Users, Building2 } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920",
    subtitle: "ESTABLISHED IN 1961 • JOKA, KOLKATA",
    title: "Asia's Finest B-School & Management Pioneer",
    description: "Shaping global leaders through rigorous academic excellence, visionary research, and unmatched corporate leadership for over six decades."
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920",
    subtitle: "AACSB, AMBA & EQUIS ACCREDITED",
    title: "Triple Crown Excellence in Management Education",
    description: "Ranked amongst the top management institutions globally. Experience world-class pedagogy with renowned faculty and brilliant peers."
  },
  {
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=1920",
    subtitle: "CAMPUS LIFE & INNOVATION",
    title: "Vibrant Ecosystem of Research & Leadership",
    description: "Spread over 135 lush green acres, our Joka campus fosters holistic growth, student-run committees, and cutting-edge incubation."
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-iimNavy">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-iimNavy/95 via-iimNavy/80 to-iimGreen/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-10000"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full text-white">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iimGold/20 border border-iimGold/40 text-iimGold text-xs font-bold tracking-widest uppercase backdrop-blur-sm animate-fadeIn">
            <Award size={14} /> {heroSlides[currentSlide].subtitle}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#programmes"
              className="px-8 py-4 rounded-lg bg-iimGreen hover:bg-iimGreen-light text-white font-semibold text-base shadow-xl flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              Explore Programmes <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base backdrop-blur-md transition-all"
            >
              Institute Overview
            </a>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-8 z-30 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-3 rounded-full bg-black/40 hover:bg-iimGreen text-white border border-white/10 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-iimGold' : 'w-2.5 bg-white/40'}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-3 rounded-full bg-black/40 hover:bg-iimGreen text-white border border-white/10 backdrop-blur-sm transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Quick stats ribbon across bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-4 gap-6 text-iimNavy">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-iimGreen-subtle text-iimGreen">
              <Building2 size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-serif">135+</div>
              <div className="text-xs text-gray-500 font-medium">Acres Lakeside Campus</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-iimGreen-subtle text-iimGreen">
              <Users size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-serif">100%</div>
              <div className="text-xs text-gray-500 font-medium">Consistent Placements</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-iimGreen-subtle text-iimGreen">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-serif">60+ Years</div>
              <div className="text-xs text-gray-500 font-medium">Of Academic Legacy</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-iimGreen-subtle text-iimGreen">
              <Award size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold font-serif">Triple Crown</div>
              <div className="text-xs text-gray-500 font-medium">Global Accreditation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};