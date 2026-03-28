import React, { useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo - Wrapped in Anchor for Scroll to Top */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group cursor-pointer transition-transform active:scale-95"
          onClick={(e) => {
            // This ensures smooth behavior across all browsers
            const homeSection = document.getElementById('home');
            if (homeSection) {
              e.preventDefault();
              homeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl rotate-3 shadow-lg shadow-blue-200 group-hover:rotate-0 transition-transform duration-300">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none group-hover:text-blue-700 transition-colors">
              VERTEX
            </span>
            <span className="text-[10px] font-bold text-blue-700 tracking-[0.2em] uppercase">
              Financial
            </span>
          </div>
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Icon (Visible only on Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-slate-900 border-b border-slate-50 pb-4 flex justify-between items-center"
            >
              {link.name}
              <ArrowRight size={20} className="text-blue-700" />
            </a>
          ))}

          <div className="pt-6">
            <button className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}