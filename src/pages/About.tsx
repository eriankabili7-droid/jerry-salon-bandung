import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Star, Award, Users } from 'lucide-react';
import RatingBadge from '../components/RatingBadge';

const About = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-brand-bg py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <RatingBadge />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tentang <span className="text-brand-pink">Jerry Salon</span> Bandung
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Jerry Salon Sarijadi adalah destinasi kecantikan terpercaya di Bandung. Kami berkomitmen memberikan layanan profesional dengan sentuhan personal untuk setiap pelanggan.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-brand-pink">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold">10+ Tahun</h4>
                  <p className="text-xs text-gray-500">Pengalaman</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-brand-pink">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold">5000+</h4>
                  <p className="text-xs text-gray-500">Pelanggan Puas</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800"
              alt="Jerry Salon Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-800">4.4 Bintang di Google Maps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
                <p className="text-gray-600 mb-8">Punya pertanyaan atau ingin konsultasi? Kirim pesan kepada kami dan tim kami akan segera membalas via WhatsApp.</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Lokasi</h4>
                      <p className="text-gray-600 text-sm">Jl. Sarimanah 1 No.172 Blok 9, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa Barat 40151</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">WhatsApp</h4>
                      <p className="text-gray-600 text-sm">0838-6581-7255</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Jam Buka</h4>
                      <p className="text-gray-600 text-sm">Setiap Hari: 09:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-80 rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456789!2d107.595!3d-6.891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTMnMjguMCJTIDEwN8KwMzUnNDIuMCJF!5e0!3m2!1sid!2sid!4v1710500000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Jerry Salon Full"
                />
              </div>
            </div>

            <div className="bg-brand-bg p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Terima kasih! Pesan Anda telah terkirim. Kami akan membalas via WhatsApp segera.");
              }}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                  <input required type="text" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email / No. WA</label>
                  <input required type="text" className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Pesan</label>
                  <textarea required rows={5} className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink outline-none resize-none" />
                </div>
                <button type="submit" className="w-full bg-brand-pink text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-pink-600 transition-all">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
