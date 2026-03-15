import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & About */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-brand-pink">Jerry Salon</h3>
          <p className="text-gray-400 leading-relaxed">
            Salon kecantikan terpercaya di Bandung dengan rating 4.4. Kami menyediakan layanan profesional dengan produk berkualitas untuk kecantikan Anda.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/+6283865817255" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-brand-pink transition-colors">Home</Link></li>
            <li><Link to="/layanan" className="hover:text-brand-pink transition-colors">Layanan</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-pink transition-colors">Gallery</Link></li>
            <li><Link to="/harga" className="hover:text-brand-pink transition-colors">Price List</Link></li>
            <li><Link to="/tentang" className="hover:text-brand-pink transition-colors">Tentang Kami</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Kontak & Lokasi</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MapPin className="text-brand-pink shrink-0" size={20} />
              <span>Jl. Sarimanah 1 No.172 Blok 9, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa Barat 40151</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-brand-pink shrink-0" size={20} />
              <span>0838-6581-7255</span>
            </li>
            <li className="flex gap-3">
              <Clock className="text-brand-pink shrink-0" size={20} />
              <span>Buka Setiap Hari: 09:00 - 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 Jerry Salon Bandung. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
