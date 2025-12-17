import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Shield,
  Wifi,
  Coffee,
} from "lucide-react";
import { branches, amenitiesList } from "@/components/branchData";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <SEO
        title="Home"
        description="Welcome to WOW Residency - The best premium hostels in Kathmandu and Lalitpur with luxury amenities, 24/7 security, and unlimited food."
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069"
            alt="WOW Residency Interior"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 border border-red-500/50 rounded-full bg-red-100/80 backdrop-blur-sm">
              <span className="text-red-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Booking Open Now
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Premium Living <br />
              <span className="text-red-500">Redefined.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Luxury hostel rooms for students and professionals. Affordable
              luxury with 24/7 support, premium bedding, and unlimited food
              across 6 locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Contact")}>
                <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-red-500/30 flex items-center gap-2 w-full sm:w-auto justify-center">
                  Book Your Stay <ArrowRight size={20} />
                </button>
              </Link>
              <Link to={createPageUrl("Branches")}>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold text-lg transition-all backdrop-blur-sm w-full sm:w-auto justify-center text-center">
                  Explore Locations
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-8 sm:py-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/30">
            <div className="p-3 sm:p-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                90%
              </h3>
              <p className="text-slate-200 font-medium">
                Satisfaction Rate from Students
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">200+</h3>
              <p className="text-slate-200 font-medium">
                Happy Tenants in Kathmandu
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">24/7</h3>
              <p className="text-slate-200 font-medium">Support & Security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              Our Accommodation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              Choose Your <span className="text-red-500">Comfort</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From private singles to social shared spaces, we have the perfect
              room for your needs and budget.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <Link
              to={createPageUrl("Rooms")}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
            >
              View All Rooms <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Single Deluxe",
                desc: "Private room with premium bedding",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                name: "Double Deluxe",
                desc: "Shared comfort for two",
                image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                name: "Triple Deluxe",
                desc: "Spacious living for three",
                image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                name: "Attached Luxury (2 Bed)",
                desc: "Two sharing with attached bathroom",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
                gradient: "from-red-500 to-red-600",
              },
              {
                name: "Attached Luxury (3 Bed)",
                desc: "Three sharing with attached bathroom",
                image: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?auto=format&fit=crop&q=80&w=800",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                name: "AC Luxury (3 Bed)",
                desc: "Climate controlled three sharing",
                image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800",
                gradient: "from-teal-500 to-teal-600",
              },
            ].map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent`}></div>
                  {/* Gradient accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${room.gradient} opacity-20 blur-2xl`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-800 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">{room.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              A WOW <span className="text-red-500">Experience</span> Awaits
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              We don't just offer a room; we offer a lifestyle. From premium
              bedding to unlimited nutritious meals, everything is curated for
              your comfort.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <Link
              to={createPageUrl("Amenities")}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              View All Amenities <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Premium Comfort",
                desc: "Luxury bedding and AC facilities ensures you get the rest you deserve.",
                image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Safe & Secure",
                desc: "24/7 security guards and digital check-in/out systems for your peace of mind.",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Modern Living",
                desc: "Dedicated high-speed internet, gym, library, and laundry services included.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src = 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
              Our Locations
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Premium <span className="text-red-500">Locations</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Explore our premium branches across Kathmandu and Lalitpur
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <Link
              to={createPageUrl("Branches")}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
            >
              View All Branches <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.slice(0, 3).map((branch) => (
              <Link
                to={`${createPageUrl("BranchDetail")}?id=${branch.id}`}
                key={branch.id}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl h-80 mb-6 bg-slate-700">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src = 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-lg">{branch.name}</h3>
                    <p className="text-slate-200 text-sm drop-shadow">{branch.landmark}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to={createPageUrl("Branches")}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
            >
              View All Branches <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Move In?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of satisfied residents enjoying the WOW lifestyle.
            Spaces are filling up fast!
          </p>
          <Link to={createPageUrl("Contact")}>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl">
              Book Now - Get Free Enrollment
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
