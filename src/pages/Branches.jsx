import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Info, Search, Filter, X } from 'lucide-react';
import { branches } from '@/components/branchData';
import GoogleMapBranches from '@/components/GoogleMapBranches';
import SEO from '@/components/SEO';

export default function Branches() {
  const [filterLocation, setFilterLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const locations = ['All', ...new Set(branches.map(b => b.location.includes('Lalitpur') ? 'Lalitpur' : 'Kathmandu'))];

  const filteredBranches = branches.filter(branch => {
    const matchesLocation = filterLocation === 'All' || branch.location.includes(filterLocation);
    const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          branch.amenities?.some(a => a.label.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <SEO 
        title="Our Locations" 
        description="Explore our 6 premium hostel branches across Kathmandu and Lalitpur including Koteshwor, Baneshwor, and more." 
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Our Locations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6">Our Premium <span className="text-red-500">Locations</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Conveniently located across Kathmandu and Lalitpur, each WOW Residency branch offers the same standard of luxury and comfort.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-3 sm:gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by branch name..."
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm sm:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setFilterLocation(loc)}
                className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  filterLocation === loc 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

          {/* All Branches Google Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-16">
            <GoogleMapBranches />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={branch.image} 
                        alt={branch.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-medium">View Details</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col" style={{ minHeight: '180px' }}>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{branch.name}</h2>
                      <div className="flex items-start gap-2 text-slate-500 mb-4">
                        <MapPin size={18} className="mt-1 text-blue-600 flex-shrink-0" />
                        <span>{branch.landmark}, {branch.location}</span>
                      </div>
                      <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                        {branch.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        Booking Open
                      </span>
                      <Link to={`${createPageUrl('BranchDetail')}?id=${branch.id}`}>
                        <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 text-sm">
                          Explore Branch <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-slate-500">
                <p className="text-xl">No branches found matching your criteria.</p>
                <button 
                  onClick={() => {setFilterLocation('All'); setSearchQuery('');}}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}