import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Harga', path: '/harga' },
    { name: 'Tentang', path: '/tentang' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Scissors size={20} />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight",
            scrolled ? "text-brand-pink" : "text-white drop-shadow-md"
          )}>
            Jerry Salon
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-pink',
                location.pathname === link.path
                  ? 'text-brand-pink'
                  : scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-all active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            scrolled ? "text-gray-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-6 right-6 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'text-2xl font-bold',
              location.pathname === link.path ? 'text-brand-pink' : 'text-gray-800'
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/booking"
          className="bg-brand-pink text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl mt-4"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
