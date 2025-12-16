

import { useState } from 'react';
import SEO from '@/components/SEO';
import { amenitiesList } from '@/components/branchData';

// Amenity images for the slider (top-level, not inside component)
const amenityImages = [
  // Unlimited Fooding Menu
  [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  ],
  // Luxury Bedding
  [
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
  ],
  // Attached Bathroom
  [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  ],
  // AC Facility
  [
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  ],
  // Gym Facilities
  [
    'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80',
  ],
  // 24 HR Security Guard
  [
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  ],
  // Library and Study Room
  [
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  ],
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
  [
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
  ],
];

function AmenitySlider({ selected }) {
  const [slide, setSlide] = useState(0);
  const images = amenityImages[selected % amenityImages.length];
  const handlePrev = () => setSlide((s) => (s === 0 ? images.length - 1 : s - 1));
  const handleNext = () => setSlide((s) => (s === images.length - 1 ? 0 : s + 1));
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center border-4 border-white">
        <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-blue-100 z-10" aria-label="Previous image">
          <span className="text-2xl">&#8592;</span>
        </button>
        <img
          src={images[slide]}
          alt="Amenity slide"
          className="w-full h-full object-cover object-center"
        />
        <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-blue-100 z-10" aria-label="Next image">
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{amenitiesList[selected].name}</h3>
        <p className="text-slate-500 text-base max-w-xs mx-auto">{amenitiesList[selected].description}</p>
      </div>
    </div>
  );
}

export default function Amenities() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <SEO 
        title="Amenities" 
        description="Discover the premium amenities at WOW Residency: unlimited food, luxury bedding, high-speed WiFi, gym access, and more." 
      />
      {/* Title Section at the very top, outside the flex row */}
      <div className="max-w-3xl mx-auto text-center mb-12 mt-8">
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Our Amenities</span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4">
          <span>Experience&nbsp;</span>
          <span className="text-red-500">Premium Comfort</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          From unlimited food to luxury bedding, high-speed WiFi, gym, and 24/7 security, enjoy all the amenities you need for a perfect stay.
        </p>
      </div>
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row overflow-hidden min-h-[700px] mx-auto p-8 md:p-14">
        {/* Left: Image (takes 50%) */}
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 p-0 min-h-[500px]">
          <AmenitySlider selected={selected} />
        </div>
        {/* Right: Amenities List (takes 50%) */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 gap-6 min-w-[270px] max-h-[520px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Property Amenities</h2>
          <div className="flex flex-col gap-4 overflow-y-auto pr-2" style={{ maxHeight: 320 }}>
            {amenitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setSelected(idx)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl text-base font-semibold transition-all border-2 ${selected===idx ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-800'} hover:bg-blue-100`}
                  style={{ fontFamily: 'inherit' }}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${selected===idx ? 'bg-white text-blue-600 border-blue-500' : 'bg-white text-blue-500 border-slate-200'}`}>
                    <Icon size={20} />
                  </span>
                  {item.name}
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

