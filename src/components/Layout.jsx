import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="WOW Residency"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`hover:text-blue-400 transition-colors font-medium ${isActive("/") ? "text-blue-400" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                to="/Branches"
                className={`hover:text-blue-400 transition-colors font-medium ${isActive("/Branches") || location.pathname === "/BranchDetail" ? "text-blue-400" : ""
                  }`}
              >
                Branches
              </Link>
              <Link
                to="/Rooms"
                className={`hover:text-blue-400 transition-colors font-medium ${isActive("/Rooms") ? "text-blue-400" : ""
                  }`}
              >
                Rooms
              </Link>
              <Link
                to="/Amenities"
                className={`hover:text-blue-400 transition-colors font-medium ${isActive("/Amenities") ? "text-blue-400" : ""
                  }`}
              >
                Amenities
              </Link>
              <Link
                to="/Reviews"
                className={`hover:text-blue-400 transition-colors font-medium ${isActive("/Reviews") || location.pathname === "/leave-review" ? "text-blue-400" : ""
                  }`}
              >
                Reviews
              </Link>
              <Link
                to="/Contact"
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-slate-700 pt-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-blue-400 transition-colors ${isActive("/") ? "text-blue-400" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                to="/Branches"
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-blue-400 transition-colors ${isActive("/Branches") || location.pathname === "/BranchDetail" ? "text-blue-400" : ""
                  }`}
              >
                Branches
              </Link>
              <Link
                to="/Rooms"
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-blue-400 transition-colors ${isActive("/Rooms") ? "text-blue-400" : ""
                  }`}
              >
                Rooms
              </Link>
              <Link
                to="/Amenities"
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-blue-400 transition-colors ${isActive("/Amenities") ? "text-blue-400" : ""
                  }`}
              >
                Amenities
              </Link>
              <Link
                to="/Reviews"
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-blue-400 transition-colors ${isActive("/Reviews") || location.pathname === "/leave-review" ? "text-blue-400" : ""
                  }`}
              >
                Reviews
              </Link>
              <Link
                to="/Contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold text-center transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full mt-16 sm:mt-18 md:mt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 hover:opacity-90 transition-opacity mb-4">
                <img
                  src="/logo.png"
                  alt="WOW Residency"
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium hostel accommodation for students and professionals
                across Kathmandu and Lalitpur.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/Branches"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Our Branches
                </Link>
                <Link
                  to="/Rooms"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Room Types
                </Link>
                <Link
                  to="/Amenities"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Amenities
                </Link>
                <Link
                  to="/Reviews"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Reviews
                </Link>
                <Link
                  to="/Sitemap"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Locations</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                {[
                  { name: 'Koteshwor', id: 'koteshwor' },
                  { name: 'Satdobato', id: 'satdobato' },
                  { name: 'Jhamsikhel', id: 'jhamsikhel' },
                  { name: 'Tinkune', id: 'tinkune' },
                  { name: 'Baneshwor', id: 'baneshwor' },
                  { name: 'Thapathali', id: 'thapathali' }
                ].map((branch) => (
                  <Link
                    key={branch.id}
                    to={`/BranchDetail?id=${branch.id}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {branch.name} Branch
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+9779851414556" className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-400 transition-colors">
                  <Phone size={16} className="text-blue-400" />
                  <span>+977 985-1414556</span>
                </a>
                <a href="tel:015445920" className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-400 transition-colors">
                  <Phone size={16} className="text-blue-400" />
                  <span>01-5445920</span>
                </a>
                <a href="mailto:info@wowresidency.com" className="flex items-center gap-2 text-slate-400 text-sm hover:text-blue-400 transition-colors">
                  <Mail size={16} className="text-blue-400" />
                  <span>info@wowresidency.com</span>
                </a>
                <div className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin
                    size={16}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-slate-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} WOW Residency. All rights
              reserved | Powered by {""}
              <a
                href="https://anoopinnovations.com/"
                className="hover:text-white underline"
              >
                Anoop Innovations
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
