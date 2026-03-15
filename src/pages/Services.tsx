import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="bg-brand-pink py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Layanan & Harga
          </motion.h1>
          <p className="text-xl text-pink-100">
            Pilih perawatan kecantikan profesional yang sesuai dengan kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col sm:flex-row border border-gray-100 group"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                    <span className="text-brand-pink font-bold text-lg">
                      Rp {service.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>Premium</span>
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    className="bg-gray-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-pink transition-colors flex items-center gap-2"
                  >
                    Book <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 p-8 bg-gray-100 rounded-3xl text-center">
          <p className="text-gray-600 italic">
            * Harga di atas adalah estimasi dan dapat berubah sesuai dengan kondisi rambut/kulit dan tingkat kesulitan.
            Silakan konsultasi gratis dengan stylist kami saat kunjungan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
