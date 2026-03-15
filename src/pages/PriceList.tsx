import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Scissors, Clock, Tag } from 'lucide-react';

const PriceList = () => {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-brand-gold py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Daftar Harga
          </motion.h1>
          <p className="text-xl text-yellow-50 font-light">
            Transparansi harga untuk setiap layanan kecantikan di Jerry Salon.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Price List 2026</h2>
            <div className="flex items-center gap-2 text-brand-pink font-bold">
              <Scissors size={20} />
              <span>Jerry Salon</span>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 hover:bg-gray-50 transition-colors group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-pink transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span>Estimasi</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-gray-900">
                    Rp {service.price.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-pink-50 text-center">
            <p className="text-brand-pink font-medium">
              Butuh layanan custom? Hubungi kami untuk penawaran spesial!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/booking"
            className="inline-flex items-center gap-2 bg-brand-pink text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-pink-600 transition-all"
          >
            Booking Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
