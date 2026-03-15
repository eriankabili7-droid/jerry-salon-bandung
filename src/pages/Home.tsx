import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import RatingBadge from '../components/RatingBadge';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
            alt="Jerry Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RatingBadge className="mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Jerry Salon <span className="text-brand-pink">Sarijadi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100 font-light">
              Salon Kecantikan Terbaik di Bandung. Tampil Cantik & Percaya Diri dengan Sentuhan Profesional Kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="w-full sm:w-auto bg-brand-pink text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-pink-600 transition-all flex items-center justify-center gap-2 group"
              >
                Book Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/layanan"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all"
              >
                Lihat Layanan
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-12 bg-brand-gold/10 border-y border-brand-gold/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                <span className="text-2xl font-bold">10%</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Diskon Layanan Pertama!</h3>
                <p className="text-gray-600">Bayar deposit via QRIS & dapatkan diskon 10% untuk kunjungan pertama Anda.</p>
              </div>
            </div>
            <Link to="/booking" className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Ambil Promo
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-3">Layanan Unggulan</h2>
            <h3 className="text-4xl font-bold text-gray-900">Pilih Perawatan Terbaik Anda</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="group bg-brand-bg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-brand-pink shadow-sm">
                    Rp {service.price.toLocaleString('id-ID')}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                  <Link
                    to="/booking"
                    className="flex items-center justify-center w-full py-3 rounded-xl border-2 border-brand-pink text-brand-pink font-bold hover:bg-brand-pink hover:text-white transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/layanan" className="inline-flex items-center gap-2 text-brand-pink font-bold hover:gap-3 transition-all">
              Lihat Semua Layanan <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-3">Testimoni</h2>
            <h3 className="text-4xl font-bold text-gray-900">Apa Kata Mereka?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testi.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-brand-pink font-bold">
                    {testi.name[0]}
                  </div>
                  <span className="font-bold text-gray-900">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-3">Lokasi Kami</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Kunjungi Jerry Salon di Sarijadi</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Kami berlokasi di area strategis Sarijadi, Bandung. Tempat yang nyaman dan mudah diakses untuk perawatan kecantikan Anda.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Alamat Lengkap</h4>
                    <p className="text-gray-600">Jl. Sarimanah 1 No.172 Blok 9, Sarijadi, Kec. Sukasari, Kota Bandung</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Jam Operasional</h4>
                    <p className="text-gray-600">Buka Setiap Hari: 09:00 - 20:00</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Jl.+Sarimanah+1+No.172+Blok+9+Sarijadi+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all"
              >
                Buka di Google Maps
              </a>
            </div>

            <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456789!2d107.595!3d-6.891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTMnMjguMCJTIDEwN8KwMzUnNDIuMCJF!5e0!3m2!1sid!2sid!4v1710500000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Jerry Salon"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Star = ({ size, className }: { size: number; className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Home;
