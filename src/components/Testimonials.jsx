import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Static mock testimonials
  const testimonials = [
    {
      rating: 5,
      text: "WOW Residency truly feels like home. The food and security are top-notch!",
      author_name: "Aayush S.",
      role: "Student, Satdobato Branch"
    },
    {
      rating: 5,
      text: "The best hostel experience in Kathmandu. Clean rooms and friendly staff.",
      author_name: "Priya K.",
      role: "Professional, Koteshwor Branch"
    },
    {
      rating: 5,
      text: "Loved the unlimited fooding and the study hall. Highly recommended!",
      author_name: "Ramesh T.",
      role: "Student, Baneshwor Branch"
    },
    {
      rating: 5,
      text: "Safe, secure, and super comfortable. I made great friends here.",
      author_name: "Sneha L.",
      role: "Resident, Jhamsikhel Branch"
    },
    {
      rating: 5,
      text: "The rooftop terrace is my favorite spot. Great vibes all around!",
      author_name: "Manish P.",
      role: "Resident, Thapathali Branch"
    }
  ];

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none z-0">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Quote size={200} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Success Stories</span>
          <h2 className="text-4xl font-bold mt-3">What Our Residents Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Glassmorphism Container */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            <div className="overflow-hidden min-h-[300px] md:min-h-[250px] flex items-center">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full text-center px-4"
                >
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl font-medium text-white italic mb-8 leading-relaxed">
                    "{testimonials[current].text || testimonials[current].quote}"
                  </p>
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30 mb-4 border-2 border-white/20">
                      {(testimonials[current].author_name || testimonials[current].name).charAt(0)}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{testimonials[current].author_name || testimonials[current].name}</h4>
                    <p className="text-slate-900 text-sm uppercase tracking-wide mt-1 font-semibold">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button onClick={prev} className="p-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-red-500 hover:border-red-500 hover:text-white text-slate-900 transition-all">
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`rounded-full transition-all ${current === idx ? "bg-red-500 w-8 h-3" : "bg-white/30 hover:bg-white/50 w-3 h-3"
                      }`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-red-500 hover:border-red-500 hover:text-white text-slate-900 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}