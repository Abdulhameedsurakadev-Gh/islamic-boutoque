import { CheckBadgeIcon, SparklesIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const trustItems = [
  { 
    name: "High-Quality Fabric", 
    icon: SparklesIcon, 
    desc: "Premium sourced materials" 
  },
  { 
    name: "Modest Fit", 
    icon: CheckBadgeIcon, 
    desc: "Designed for comfort & style" 
  },
  { 
    name: "Easy Returns", 
    icon: ArrowPathIcon, 
    desc: "30-day hassle-free policy" 
  }
];

export default function TrustBar() {
  return (
    <section className="bg-emerald-50 border-y border-emerald-100 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid: 1 column on mobile, 3 columns on medium/large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-4 md:justify-center sm:flex sm:justify-center sm:space-x-0 sm:space-y-3 sm:text-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <item.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 text-sm lg:text-base uppercase tracking-wider">
                  {item.name}
                </h3>
                <p className="text-emerald-700/70 text-xs lg:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}