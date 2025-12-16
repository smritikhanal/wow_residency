

import { useState, useRef } from 'react';
import SEO from '@/components/SEO';
import { amenitiesList } from '@/components/branchData';

// Amenity images for the slider (top-level, not inside component)
const amenityImages = [
  // Unlimited Fooding Menu
  [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  ],
  // Luxury Bedding
  [
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
  ],
  // Attached Bathroom
  [
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  ],
  // AC Facility
  [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  ],
  // Gym Facilities
  [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  ],
  // 24 HR Security Guard
  [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1555660408-f8d1e57aa8a1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470076892663-af684e5e15af?auto=format&fit=crop&w=800&q=80',
  ],
  // Library and Study Room
  [
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80',
  ],
  // Dedicated Internet
  [
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516044734145-07ca8eef8731?auto=format&fit=crop&w=800&q=80',
  ],
  // Customer Privacy
  [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  ],
  // Room Service Per Day
  [
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&w=800&q=80',
  ],
  // Digital Check In Check Out System
  [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  ],
  // Unlimited Laundry Facilities
  [
    'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
  ],
  // Daily Games for Hangout
  [
    'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=800&q=80',
  ],
  // Parking Facilities
  [
    'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  ],
];

function AmenitySlider({ selected }) {
  const [slide, setSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = amenityImages[selected % amenityImages.length];
  const amenity = amenitiesList[selected];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlide((s) => (s === 0 ? images.length - 1 : s - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlide((s) => (s === images.length - 1 ? 0 : s + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full h-full relative group overflow-hidden">
      {/* Image with fade animation */}
      <img
        src={images[slide]}
        alt={amenity.name}
        className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out transform group-hover:scale-105"
        style={{
          opacity: isAnimating ? 0.7 : 1,
          transform: isAnimating ? 'scale(1.02)' : 'scale(1)',
        }}
      />

      {/* Animated overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

      {/* Navigation Arrows with hover animations */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:scale-110 rounded-full p-3 shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        aria-label="Previous image"
      >
        <span className="text-xl font-bold text-slate-700">&#8592;</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:scale-110 rounded-full p-3 shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        aria-label="Next image"
      >
        <span className="text-xl font-bold text-slate-700">&#8594;</span>
      </button>

      {/* Description Overlay with slide-up animation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 transform transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300">{amenity.name}</h3>
        <p className="text-white/90 text-base transform transition-all duration-300 delay-75">{amenity.description}</p>

        {/* Slide Indicators with pulse animation */}
        <div className="flex gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAnimating(true);
                setSlide(idx);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${slide === idx ? 'bg-white w-8 shadow-lg shadow-white/30' : 'bg-white/50 w-2 hover:bg-white/80'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Amenities() {
  const [selected, setSelected] = useState(0);
  const imageRef = useRef(null);

  const handleSelectAmenity = (idx) => {
    setSelected(idx);
    // Scroll to image on mobile/tablet
    if (window.innerWidth < 768 && imageRef.current) {
      setTimeout(() => {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = imageRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-20">
      <SEO
        title="Amenities"
        description="Discover the premium amenities at WOW Residency: unlimited food, luxury bedding, high-speed WiFi, gym access, and more."
      />
      {/* Title Section with fade-in animation */}
      <div className="max-w-3xl mx-auto text-center mb-12 mt-8 animate-fade-in">
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm inline-block hover:scale-105 transition-transform duration-300">Our Amenities</span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4">
          <span>Experience&nbsp;</span>
          <span className="text-red-500 hover:text-red-600 transition-colors duration-300">Premium Comfort</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          From unlimited food to luxury bedding, high-speed WiFi, gym, and 24/7 security, enjoy all the amenities you need for a perfect stay.
        </p>
      </div>
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row mx-auto p-8 md:p-14 gap-8 hover:shadow-3xl transition-shadow duration-500">
        {/* Left: Image (sticky on scroll) */}
        <div ref={imageRef} className="flex-1 md:sticky md:top-24 md:self-start">
          <div className="flex flex-col items-center justify-center bg-slate-100 h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <AmenitySlider selected={selected} />
          </div>
        </div>
        {/* Right: Amenities List (scrollable) */}
        <div className="flex-1 flex flex-col justify-start p-8 md:p-12 gap-6 min-w-[270px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Property Amenities</h2>
          <div className="flex flex-col gap-3">
            {amenitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleSelectAmenity(idx)}
                  className={`group flex items-center gap-4 px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 border-2 transform hover:scale-[1.02] hover:-translate-x-1 ${selected === idx
                    ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-lg shadow-blue-100'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'}`}
                  style={{ fontFamily: 'inherit' }}
                >
                  <span className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${selected === idx
                    ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                    : 'bg-white text-blue-500 border-slate-200 group-hover:bg-blue-100 group-hover:border-blue-400'}`}>
                    <Icon size={22} />
                  </span>
                  <span className="flex-1 text-left">{item.name}</span>
                  <span className={`transform transition-all duration-300 ${selected === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// Dedicated Internet
[
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
],
  // Customer Privacy
  [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  ],
  // Room Service Per Day
  [
    'https://images.unsplash.com/photo-1506368083636-6defb67639d0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506368083636-6defb67639d0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506368083636-6defb67639d0?auto=format&fit=crop&w=800&q=80',
  ],
  // Digital Check In Check Out System
  [
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
  ],
  // Unlimited Laundry Facilities
  [
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
  ],
  // Daily Games for Hangout
  [
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
  ],
  // Parking Facilities
  // ...existing code...
  //
  function AmenitySlider({ selected }) {
    const [slide, setSlide] = useState(0);
    const images = amenityImages[selected % amenityImages.length];
    const handlePrev = () => setSlide((s) => (s === 0 ? images.length - 1 : s - 1));
    const handleNext = () => setSlide((s) => (s === images.length - 1 ? 0 : s + 1));
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center border-4 border-white">
          <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100 z-10" aria-label="Previous image">
            <span className="text-3xl">&#8592;</span>
          </button>
          <img
            src={images[slide]}
            alt="Amenity slide"
            className="w-full h-full object-cover object-center"
          />
          <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100 z-10" aria-label="Next image">
            <span className="text-3xl">&#8594;</span>
          </button>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{amenitiesList[selected].name}</h3>
          <p className="text-slate-500 text-lg max-w-md mx-auto">{amenitiesList[selected].description}</p>
        </div>
      </div>
    );
  }

