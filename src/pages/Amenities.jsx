
import SEO from '@/components/SEO';
import { amenitiesList } from '@/components/branchData';

export default function Amenities() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <SEO 
        title="Amenities" 
        description="Discover the premium amenities at WOW Residency: unlimited food, luxury bedding, high-speed WiFi, gym access, and more." 
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">Premium Amenities</h1>
          <p className="text-slate-500 text-lg">
            At WOW Residency, we believe comfort is in the details. Enjoy a comprehensive suite of amenities designed to make your stay effortless and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden h-64 flex flex-col">
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-3xl mb-2 group-hover:bg-red-100 group-hover:text-red-500 transition-all">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}