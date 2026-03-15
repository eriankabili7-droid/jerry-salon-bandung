import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Calendar, Clock, User, Scissors, MessageCircle } from 'lucide-react';

const Success = () => {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('last_booking');
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  const waMessage = encodeURIComponent(`Halo Jerry Salon, saya sudah membayar deposit untuk booking ${booking?.service} pada tanggal ${booking?.date} jam ${booking?.time}. Nama: ${booking?.name}`);
  const waLink = `https://wa.me/+6283865817255?text=${waMessage}`;

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden text-center"
      >
        <div className="bg-green-500 p-12 text-white flex flex-col items-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Berhasil!</h1>
          <p className="text-green-100">Terima kasih telah mempercayakan kecantikan Anda pada Jerry Salon.</p>
        </div>

        <div className="p-10 space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-500 text-sm">Order ID</span>
              <span className="font-mono font-bold text-brand-pink">{booking?.bookingId || 'BK-XXXXXX'}</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Scissors size={20} className="text-brand-pink" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Layanan</p>
                  <p className="font-bold">{booking?.service || 'Layanan Salon'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User size={20} className="text-brand-pink" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Stylist</p>
                  <p className="font-bold">{booking?.stylist || 'Stylist Jerry'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-brand-pink" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Tanggal</p>
                  <p className="font-bold">{booking?.date ? new Date(booking.date).toLocaleDateString('id-ID') : '-'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-brand-pink" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Jam</p>
                  <p className="font-bold">{booking?.time || '-'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Konfirmasi booking telah kami terima. Kami akan menghubungi Anda kembali melalui WhatsApp untuk detail lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#1eb954] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Konfirmasi via WA
              </a>
              <Link
                to="/"
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all"
              >
                Kembali ke Home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
