import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Wifi, ArrowRight, Users, Home } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Rooms() {
  const roomTypes = [
    {
      id: 1,
      name: "Single Deluxe",
      category: "Premium",
      occupancy: "1 Person",
      description: "Private room with premium bedding",
      priceRange: "Rs. 15,000 - 18,000",
      icon: Star,
      features: ["Private Room", "Premium Bedding", "Study Desk", "Wardrobe", "Shared Bathroom"],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      name: "Double Deluxe",
      category: "Standard",
      occupancy: "2 Persons",
      description: "Shared comfort for two",
      priceRange: "Rs. 13,000 - 14,000",
      icon: Star,
      features: ["Two Beds", "Premium Bedding", "Study Tables", "Large Wardrobe", "Shared Bathroom"],
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      name: "Triple Deluxe",
      category: "Standard",
      occupancy: "3 Persons",
      description: "Spacious living for three",
      priceRange: "Rs. 10,500 - 11,000",
      icon: Star,
      features: ["Three Beds", "Premium Bedding", "Study Area", "Storage Space", "Shared Bathroom"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      name: "Attached Luxury (2 Bed)",
      category: "Luxury",
      occupancy: "2 Persons",
      description: "Two sharing with attached bathroom",
      priceRange: "Rs. 18,000 - 20,000",
      icon: CheckCircle,
      features: ["Two Beds", "Attached Bathroom", "Premium Furnishing", "Study Desks", "Personal Privacy"],
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      name: "Attached Luxury (3 Bed)",
      category: "Luxury",
      occupancy: "3 Persons",
      description: "Three sharing with attached bathroom",
      priceRange: "Rs. 15,000 - 16,000",
      icon: CheckCircle,
      features: ["Three Beds", "Attached Bathroom", "Premium Furnishing", "Study Area", "Large Space"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      name: "AC Luxury (3 Bed)",
      category: "Premium Luxury",
      occupancy: "3 Persons",
      description: "Climate controlled three sharing",
      priceRange: "Rs. 17,000 - 18,000",
      icon: Wifi,
      features: ["Three Beds", "Air Conditioning", "Attached Bathroom", "Premium Furnishing", "Climate Controlled"],
      image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&q=80&w=800",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <SEO 
        title="Room Types & Accommodation" 
        description="Explore our range of accommodation options from Single Deluxe to AC Luxury rooms. Find the perfect space for your stay at WOW Residency." 
      />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm">Our Accommodation</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6">Choose Your <span className="text-red-500">Comfort</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From private singles to social shared spaces, we have the perfect room for your needs and budget. All rooms come with premium amenities and 24/7 support.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {roomTypes.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`bg-gradient-to-r ${
                      room.category === 'Premium' || room.category === 'Premium Luxury'
                        ? 'from-amber-400 to-orange-500'
                        : room.category === 'Standard'
                        ? 'from-blue-400 to-indigo-500'
                        : 'from-purple-400 to-pink-500'
                    } text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                  >
                    {room.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${room.color} flex items-center justify-center text-white shadow-lg`}>
                    <room.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{room.name}</h3>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <Users size={14} />
                      <span>{room.occupancy}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Starting from</p>
                    <p className="text-lg font-bold text-blue-600">{room.priceRange.split('-')[0].trim()}</p>
                    <p className="text-xs text-slate-400">per month</p>
                  </div>
                  <Link to={createPageUrl('Contact')}>
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                      Book Now <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">What's Included in All Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Premium Furnishing</h3>
                <p className="text-slate-600 text-sm">Quality beds, mattresses, study tables, chairs, and wardrobes in every room.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">24/7 Amenities</h3>
                <p className="text-slate-600 text-sm">Unlimited food, high-speed WiFi, power backup, and round-the-clock support.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Clean & Secure</h3>
                <p className="text-slate-600 text-sm">Daily housekeeping, security guards, CCTV monitoring, and safe environment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Ready to Book Your Room?</h2>
          <p className="text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us today to check availability and reserve your preferred room type. Our team is ready to help you find the perfect accommodation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-colors shadow-lg shadow-red-500/30 flex items-center gap-2 mx-auto w-full sm:w-auto justify-center">
                Contact Us <ArrowRight size={20} />
              </button>
            </Link>
            <Link to={createPageUrl('Branches')}>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-colors flex items-center gap-2 mx-auto w-full sm:w-auto justify-center">
                View Locations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
