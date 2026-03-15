import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Scissors, Phone, Mail, MessageSquare, CreditCard, CheckCircle2 } from 'lucide-react';
import { SERVICES, STYLISTS } from '../constants';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

// Extend window for Midtrans Snap
declare global {
  interface Window {
    snap: any;
  }
}

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();
  
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    defaultValues: {
      service: '',
      stylist: '',
      date: new Date(),
      time: '',
      name: '',
      phone: '',
      email: '',
      notes: ''
    }
  });

  const selectedServiceId = watch('service');
  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  useEffect(() => {
    // Load Midtrans Snap Script
    const script = document.createElement('script');
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute('data-client-key', 'SB-Mid-client-xxxx'); // Placeholder
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = (data: any) => {
    setStep(2);
    console.log('Booking Data:', data);
  };

  const handlePayment = () => {
    setIsPaying(true);
    
    // Mock Snap Token Generation & Payment
    // In real app, this would be a call to your backend
    setTimeout(() => {
      if (window.snap) {
        // Mocking the snap.pay call
        // In a real environment with a real token:
        // window.snap.pay(token, { ... })
        
        alert("Simulasi: Membuka Midtrans Snap QRIS... (Deposit Rp 50.000)");
        
        // Simulate success after 2 seconds
        setTimeout(() => {
          setIsPaying(false);
          const bookingId = 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
          localStorage.setItem('last_booking', JSON.stringify({ ...watch(), bookingId }));
          navigate('/success');
        }, 2000);
      } else {
        // Fallback if script not loaded
        alert("Midtrans Snap belum siap. Mengalihkan ke halaman sukses (Simulasi).");
        navigate('/success');
      }
    }, 1000);
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors",
            step >= 1 ? "bg-brand-pink text-white" : "bg-gray-200 text-gray-500"
          )}>1</div>
          <div className={cn("h-1 w-12 rounded", step >= 2 ? "bg-brand-pink" : "bg-gray-200")} />
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors",
            step >= 2 ? "bg-brand-pink text-white" : "bg-gray-200 text-gray-500"
          )}>2</div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-brand-pink p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">Booking Online</h1>
                <p className="text-pink-100 italic">Jerry Salon Sarijadi - Pilih waktu terbaik Anda.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
                {/* Service & Stylist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Scissors size={18} className="text-brand-pink" /> Pilih Layanan
                    </label>
                    <select
                      {...register('service', { required: 'Silakan pilih layanan' })}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                    >
                      <option value="">-- Pilih Layanan --</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name} - Rp {s.price.toLocaleString('id-ID')}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <User size={18} className="text-brand-pink" /> Pilih Stylist
                    </label>
                    <select
                      {...register('stylist', { required: 'Silakan pilih stylist' })}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                    >
                      <option value="">-- Pilih Stylist --</option>
                      {STYLISTS.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.role})</option>
                      ))}
                    </select>
                    {errors.stylist && <p className="text-red-500 text-xs mt-1">{errors.stylist.message}</p>}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Calendar size={18} className="text-brand-pink" /> Pilih Tanggal
                    </label>
                    <Controller
                      control={control}
                      name="date"
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          minDate={new Date()}
                          dateFormat="dd MMMM yyyy"
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                        />
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Clock size={18} className="text-brand-pink" /> Pilih Jam
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map(slot => (
                        <label key={slot} className="relative cursor-pointer group">
                          <input
                            type="radio"
                            value={slot}
                            {...register('time', { required: 'Pilih jam' })}
                            className="peer sr-only"
                          />
                          <div className="p-2 text-center text-sm border border-gray-200 rounded-xl peer-checked:bg-brand-pink peer-checked:text-white peer-checked:border-brand-pink transition-all group-hover:border-brand-pink">
                            {slot}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <User size={18} className="text-brand-pink" /> Nama Lengkap
                      </label>
                      <input
                        {...register('name', { required: 'Nama wajib diisi' })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <Phone size={18} className="text-brand-pink" /> Nomor WhatsApp
                      </label>
                      <input
                        {...register('phone', { required: 'Nomor WA wajib diisi' })}
                        placeholder="08123456789"
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Mail size={18} className="text-brand-pink" /> Email (Opsional)
                    </label>
                    <input
                      {...register('email')}
                      placeholder="email@anda.com"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <MessageSquare size={18} className="text-brand-pink" /> Catatan Tambahan
                    </label>
                    <textarea
                      {...register('notes')}
                      rows={3}
                      placeholder="Contoh: Ingin potong model undercut, atau ada alergi produk tertentu."
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-pink text-white py-5 rounded-2xl text-xl font-bold shadow-xl hover:bg-pink-600 transition-all active:scale-[0.98]"
                >
                  Lanjut ke Pembayaran
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-brand-gold p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Konfirmasi & Deposit</h2>
                <p className="text-yellow-50 italic">Selesaikan pembayaran deposit untuk mengonfirmasi booking Anda.</p>
              </div>

              <div className="p-8 space-y-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
                  <h3 className="font-bold text-gray-900 border-b pb-2">Ringkasan Booking</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-500">Layanan:</div>
                    <div className="text-gray-900 font-bold">{selectedService?.name}</div>
                    <div className="text-gray-500">Stylist:</div>
                    <div className="text-gray-900 font-bold">{STYLISTS.find(s => s.id === watch('stylist'))?.name}</div>
                    <div className="text-gray-500">Waktu:</div>
                    <div className="text-gray-900 font-bold">{watch('date').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} pukul {watch('time')}</div>
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <div className="inline-block p-6 bg-green-50 rounded-3xl border-2 border-dashed border-green-200">
                    <p className="text-gray-600 mb-2">Total Deposit</p>
                    <h4 className="text-4xl font-black text-green-600">Rp 50.000</h4>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-500 text-sm">
                      Scan QRIS dengan GoPay, OVO, Dana, LinkAja, atau Mobile Banking.
                      Pembayaran aman diproses oleh <strong>Midtrans</strong>.
                    </p>
                    <button
                      onClick={handlePayment}
                      disabled={isPaying}
                      className={cn(
                        "w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-xl font-bold shadow-xl transition-all",
                        isPaying ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white active:scale-95"
                      )}
                    >
                      {isPaying ? (
                        <>Memproses...</>
                      ) : (
                        <>
                          <CreditCard size={24} /> Bayar Deposit via QRIS
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="text-gray-400 font-medium hover:text-gray-600 transition-colors"
                    >
                      Kembali ke Form
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-400">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Deposit akan mengurangi total biaya layanan saat di salon.</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
