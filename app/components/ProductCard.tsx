import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
  const whatsappNumber = "+233 202131864"; // Replace with yours
  const message = encodeURIComponent(`Hi, I'm interested in: ${product.name} ($${product.price})`);
  const whatsappUrl = `wa.me{whatsappNumber}?text=${message}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Product Image */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
          <span className="text-emerald-600 font-bold text-lg">${product.price}</span>
        </div>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
        
        {/* Action Buttons */}
        <div className="mt-auto space-y-2">
          <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
            Order Now
          </button>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 py-2.5 rounded-xl font-semibold hover:bg-emerald-50 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
