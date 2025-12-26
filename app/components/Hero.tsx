import Image from 'next/image';
export default function Hero() {
    return (
        <section className = "relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            <div className = "absolute inset-0 -z-10">
                <Image src = "/images/alimanlogo.png" alt= "Hero Background" fill priority className = "object-cover"/>
                
            </div>
            <div className ="text-center px-4 max-w-4xl flex justify-center flex-col items-center py-40">
                <h1 className = "text-5xl md:text-7xl font-bold text-white mb-6"><span className ="text-emerald-800">Al-Iman</span> Store</h1>
                <p className = "text-lg md:text-xl text-gray-200 mb-8">Your one-stop shop for all things Islamic. Discover a wide range of products that cater to your spiritual and everyday needs.</p>
                <button className = "bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition">Get Started</button>
            </div>
        </section>
    );
};