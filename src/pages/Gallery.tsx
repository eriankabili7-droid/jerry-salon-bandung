import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

const Gallery = () => {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-gray-900 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Gallery Portfolio
          </motion.h1>
          <p className="text-xl text-gray-400 font-light">
            Inspirasi gaya rambut dan hasil kerja terbaik dari stylist profesional Jerry Salon.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full text-brand-pink font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Result
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic mb-8">Ingin hasil seperti ini? Booking sekarang juga!</p>
          <a
            href="/booking"
            className="bg-brand-pink text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-pink-600 transition-all"
          >
            Book My Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
