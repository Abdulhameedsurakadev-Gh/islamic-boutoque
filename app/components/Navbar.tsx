'use client'; // Required for interactivity in Next.js App Router

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm border-b border-gray-100         <TopAnnouncement />
          <Navbar />">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-800 tracking-tight">
          AI<span className="text-emerald-500 underline decoration-2 underline-offset-4">Store</span>
        </div>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-emerald-600 transition">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          {/* Search Icon (Visible on all) */}
          <button className="text-gray-500 hover:text-emerald-600">
            <svg xmlns="www.w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Hamburger Menu - Visible only on Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-emerald-800"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Shop Now Button - Hidden on Mobile to save space */}
          <button className="hidden md:block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition text-sm font-semibold">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      >
        {/* Slide-out Menu */}
        <div 
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        >
          <div className="p-6 flex flex-col h-full">
            <button onClick={() => setIsOpen(false)} className="self-end mb-8 text-gray-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col space-y-6 text-lg font-medium text-gray-700">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-emerald-600 transition">
                  {link.name}
                </Link>
              ))}
              <button className="bg-emerald-600 text-white px-4 py-3 rounded-md w-full font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
