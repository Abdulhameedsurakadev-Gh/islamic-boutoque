import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className = "flex items-center justify-between px-8 py-5 bg-white shadow-sm border-b border-gray-100">
            <div className = "text-2xl font-bold text-emerald-800 tracking-tight">ISLAMIC<span className = "text-emerald-500 underline decoration-2 underline-offset-4">BOUTIQUE</span></div>
            <div className = "hidden md:flex space-x-8 text-gray-600 font-medium">
                <Link href = "/" className = "hover:text-emerald-600 transition">Home</Link>
                <Link href = "/collection" className = "hover:text-emerald-600 transition">Collection</Link>
                <Link href = "/about" className = "hover:text-emerald-600 transition">About Us</Link>
                <Link href = "/contact" className = "hover:text-emerald-600 transition">Contact</Link>
            </div>
            <div className = "flex items-center space-x-5">
                <button className = "text-gray-500 hover:text-emerald-600">
                    <svg xmlns = "www.w3.org" className = "h-6 w-6" fill = "none" viewBox = "0 0 22 24" stroke = "currentColr">
                        <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className = "bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition text-sm font-semibold">Shop Now</button>
            </div>
        </nav>
    );
}