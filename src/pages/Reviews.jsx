import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function Reviews() {
  const reviews = [
    {
      author_name: "Aayush S.",
      role: "Student, Satdobato Branch",
      branch_name: "Satdobato Branch",
      rating: 5,
      text: "WOW Residency truly feels like home. The food and security are top-notch!"
    },
    {
      author_name: "Priya K.",
      role: "Professional, Koteshwor Branch",
      branch_name: "Koteshwor Branch",
      rating: 5,
      text: "The best hostel experience in Kathmandu. Clean rooms and friendly staff."
    },
    {
      author_name: "Ramesh T.",
      role: "Student, Baneshwor Branch",
      branch_name: "Baneshwor Branch",
      rating: 5,
      text: "Loved the unlimited fooding and the study hall. Highly recommended!"
    },
    {
      author_name: "Sneha L.",
      role: "Resident, Jhamsikhel Branch",
      branch_name: "Jhamsikhel Branch",
      rating: 5,
      text: "Safe, secure, and super comfortable. I made great friends here."
    },
    {
      author_name: "Manish P.",
      role: "Resident, Thapathali Branch",
      branch_name: "Thapathali Branch",
      rating: 5,
      text: "The rooftop terrace is my favorite spot. Great vibes all around!"
    },
    {
      author_name: "Sita M.",
      role: "Student, Tinkune Branch",
      branch_name: "Tinkune Branch",
      rating: 5,
      text: "Amazing amenities and the staff treats everyone like family. Love it here!"
    }
  ];

  return (
    <div className="min-h-screen pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO
        title="Resident Reviews"
        description="Read what our residents have to say about their stay at WOW Residency. Share your own experience."
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-400/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-blue-300 font-semibold tracking-widest uppercase text-sm">
            Our Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Resident <span className="text-red-500">Reviews</span>
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            See why students and professionals choose WOW Residency as their home away from home.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id || idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-xl bg-white/10 p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 overflow-hidden">

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-red-500/0 group-hover:from-blue-500/10 group-hover:to-red-500/10 transition-all duration-500 rounded-3xl"></div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote size={40} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars and Branch */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`transition-all duration-300 ${i < review.rating
                            ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                            : "text-white/30"}`}
                        />
                      ))}
                    </div>
                    {review.branch_name && (
                      <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-blue-200 px-3 py-1.5 rounded-full border border-white/10 mr-10">
                        {review.branch_name}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-white/90 italic mb-6 leading-relaxed text-base font-light">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{review.author_name}</h4>
                      <p className="text-blue-200/70 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="w-full bg-white px-8 py-10 rounded-2xl border border-slate-200 flex flex-col items-center">
            <p className="text-slate-800 mb-4 text-3xl font-semibold">Want to share your experience?</p>
            <Link
              to="/leave-review"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>
        </motion.div>
      </div>
    </div>
  );
}