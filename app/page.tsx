import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import { products } from "@/data/products";
import ProductCard from "./components/ProductCard";

export default function HomePage() {
  const featuredItems = products.filter(p => p.isFeatured).slice(0, 7);

  return (
    <main>
      <Hero />
      <TrustBar />


    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900 mb-10 text-center">Featured Collection</h2>
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  </main>
  );
}




{/* 
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
export default function HomePage() {
  return (
    <main>

    </main>
  );
}; */}