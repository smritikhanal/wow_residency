import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Phone, Calendar, ArrowLeft, Star, Users, ArrowRight } from 'lucide-react';
import { branches } from '@/components/branchData';
import BranchMap from '@/components/BranchMap';
import ImageLightbox from '@/components/ImageLightbox';
import SEO from '@/components/SEO';

export default function BranchDetail() {
  const [branch, setBranch] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const foundBranch = branches.find(b => b.id === id);
    if (foundBranch) {
      setBranch(foundBranch);
    }
  }, []);

  if (!branch) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-slate-400">
        <p>Loading branch details...</p>
        <Link to={createPageUrl('Branches')} className="text-blue-600 mt-4 hover:underline">Back to Branches</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={branch.name} 
        description={`${branch.name} - ${branch.description} Located at ${branch.location}.`}
        image={branch.image}
      />
      {/* Hero Banner */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img 
          src={branch.image} 
          alt={branch.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-16 text-white bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
          <div className="container mx-auto">
            <Link to={createPageUrl('Branches')} className="inline-flex items-center text-slate-300 hover:text-white mb-3 sm:mb-4 transition-colors text-sm sm:text-base">
              <ArrowLeft size={18} className="mr-2" /> Back to All Locations
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">{ branch.name}</h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="text-red-500" />
                <span>{branch.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-blue-400" />
                <span>Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About this Location</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{branch.description}</p>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg inline-flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                   <span className="font-semibold text-blue-800">Landmark:</span>
                   <span className="text-blue-900 block">{branch.landmark}</span>
                </div>
              </div>
            </section>

            {/* Room Types */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Room Types</h2>
              <div className="space-y-4">
                {branch.rooms && branch.rooms.map((room, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{room.name}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">{room.occupancy}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                        {room.features.map((f, i) => (
                          <span key={i} className="flex items-center gap-1">
                            <CheckCircle size={14} className="text-green-500" /> {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                      <div className="text-right hidden sm:block">
                        <p className="text-slate-400 text-xs">Starting from</p>
                        <p className="text-xl font-bold text-blue-600">{room.price}</p>
                        <p className="text-slate-400 text-xs">per month</p>
                      </div>
                      <Link to={`${createPageUrl('Contact')}?branch=${branch.name}&message=I'm interested in the ${room.name}`} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                          Book Now <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                    {/* Mobile Price View */}
                    <div className="flex justify-between items-center w-full sm:hidden border-t border-slate-200 pt-3 mt-1">
                       <div>
                          <p className="text-slate-400 text-xs">Starting from</p>
                          <p className="text-lg font-bold text-blue-600">{room.price}<span className="text-slate-400 text-xs font-normal">/mo</span></p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Branch Highlights</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {branch.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                     <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                     <span className="font-medium text-slate-700">{feature}</span>
                   </div>
                 ))}
               </div>
            </section>

            {/* Branch Amenities */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Exclusive Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {branch.amenities && branch.amenities.map((amenity, idx) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                        <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <span className="font-medium text-slate-700 text-sm">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Photo Gallery</h2>
              <p className="text-slate-500 mb-6">Take a tour of our premium facilities including bedrooms, common areas, and dining halls.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {branch.gallery.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setLightboxIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="aspect-[4/3] rounded-xl overflow-hidden group relative cursor-pointer shadow-md hover:shadow-xl transition-all"
                  >
                    <img 
                      src={img} 
                      alt={`${branch.name} Gallery ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                           <Star size={20} />
                        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <ImageLightbox 
                isOpen={lightboxOpen}
                images={branch.gallery}
                initialIndex={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
              />
            </section>

            {/* Map */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Location Map</h2>
              <div className="w-full h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative z-0">
                 <BranchMap 
                   coordinates={branch.coordinates} 
                   name={branch.name} 
                   landmark={branch.landmark} 
                 />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-6">Interested in this branch?</h3>
                
                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3 text-slate-600">
                     <Phone size={20} className="text-slate-400" />
                     <span>+977 985-1414556</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-600">
                     <Calendar size={20} className="text-slate-400" />
                     <span>Booking Open Now</span>
                   </div>
                </div>

                <Link to={`${createPageUrl('Contact')}?branch=${branch.name}`}>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/20 transition-all mb-4">
                    Book a Room
                  </button>
                </Link>
                <p className="text-xs text-center text-slate-400">
                  Limited spaces available. First come, first served.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}