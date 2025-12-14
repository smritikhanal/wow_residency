import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';
import { branches } from '@/components/branchData';
import { MapPin, Home, Phone, Info } from 'lucide-react';

export default function Sitemap() {
  const mainLinks = [
    { name: 'Home', path: 'Home', icon: Home },
    { name: 'Branches', path: 'Branches', icon: MapPin },
    { name: 'Amenities', path: 'Amenities', icon: Info },
    { name: 'Contact', path: 'Contact', icon: Phone },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <SEO 
        title="Sitemap" 
        description="Navigate through all pages and branches of WOW Residency website." 
      />
      
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Pages */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Home className="text-blue-600" /> Main Pages
            </h3>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={createPageUrl(link.path)}
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                  >
                    <link.icon size={18} className="text-slate-400 group-hover:text-blue-600" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Pages */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="text-red-500" /> Our Branches
            </h3>
            <ul className="space-y-4">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <Link 
                    to={`${createPageUrl('BranchDetail')}?id=${branch.id}`}
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                    <span className="font-medium">{branch.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}