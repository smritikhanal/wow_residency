import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <SEO 
        title="Resident Reviews" 
        description="Read what our residents have to say about their stay at WOW Residency. Share your own experience." 
      />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Our Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6">Resident <span className="text-red-500">Reviews</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            See why students and professionals choose WOW Residency as their home away from home.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
                <motion.div
                    key={review.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={16} 
                                        className={i < review.rating ? "fill-blue-500 text-blue-500" : "text-slate-200"} 
                                    />
                                ))}
                            </div>
                            {review.branch_name && (
                                <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                                    {review.branch_name}
                                </span>
                            )}
                        </div>
                        <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                {review.author_name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{review.author_name}</h4>
                                <p className="text-slate-400 text-xs">{review.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
      </div>
    </div>
  );
}