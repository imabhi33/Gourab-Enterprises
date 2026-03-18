import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaSpinner,
} from 'react-icons/fa';
import locScan from '../assets/locscan.png';

const PHONE = import.meta.env.VITE_PHONE || '+91 99999 99999';
const PHONE_HREF = import.meta.env.VITE_PHONE_HREF || '+919999999999';
const WHATSAPP = (import.meta.env.VITE_WHATSAPP || '919999999999').replace(/\+/g, '');
const ADDRESS = import.meta.env.VITE_ADDRESS || 'Chandikhol, Odisha';
const ENQUIRY_WEBHOOK_URL = import.meta.env.VITE_ENQUIRY_WEBHOOK_URL || '';

const info = [
  { Icon: FaPhone, label: 'Phone', value: PHONE, href: `tel:${PHONE_HREF}` },
  { Icon: FaWhatsapp, label: 'Whatsapp', value: 'Chat with us now', href: `https://wa.me/${WHATSAPP}` },
  { Icon: FaMapMarkerAlt, label: 'Address', value: ADDRESS, href: null },
  { Icon: FaClock, label: 'Hours', value: 'Mon-Sat: 8 AM - 8 PM', href: null },
];

const PRODUCT_OPTIONS = [
  'Jindal Panther TMT Rods',
  'Jindal Panther Cement',
  'Shree Cement',
  'Ramco Cement',
  'JK Super Cement',
  'Dalmia Cement',
  'Nuvoco Concrete',
  'Multiple Products',
];

async function submitEnquiry(form) {
  if (!ENQUIRY_WEBHOOK_URL) {
    throw new Error('Missing VITE_ENQUIRY_WEBHOOK_URL');
  }

  const now = new Date();
  const payload = {
    name: form.name.trim(),
    phone: form.phone.trim(),
    product: form.product,
    message: form.message.trim(),
    createdAtIso: now.toISOString(),
    source: 'website',
  };

  const response = await fetch(ENQUIRY_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }

  const raw = await response.text();

  if (!raw) {
    return;
  }

  try {
    const result = JSON.parse(raw);
    if (result.ok === false) {
      throw new Error(result.error || 'Unknown webhook error');
    }
  } catch {
    // Some Apps Script responses are plain text; a successful HTTP status is enough.
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' });
  const [status, setStatus] = useState('idle');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await submitEnquiry(form);
      setStatus('sent');
      setForm({ name: '', phone: '', product: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Enquiry submit error:', error);
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = `w-full rounded-xl px-5 py-4 text-slate-200 font-body text-base
    border border-[#2a3a5d] focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500/30
    bg-[#132140] transition-all duration-300 placeholder:text-slate-500`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#0a1628]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-heading text-yellow-500 text-xs sm:text-sm tracking-[0.4em] uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4"
          >
            CONTACT <span className="text-gold-gradient">US</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="divider-gold max-w-xs mx-auto mb-5"
          />
          <p className="text-slate-400 font-body max-w-xl mx-auto text-sm">
            Share your requirement and we&apos;ll save the enquiry instantly for follow-up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-6 sm:gap-10 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            {info.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="rounded-3xl border border-[#7e6930] bg-[#101f3c] px-5 py-6 sm:px-6 sm:py-7 flex items-center gap-5 shadow-[0_22px_55px_rgba(3,8,20,0.25)]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#d8a300] rounded-full flex items-center justify-center shrink-0">
                  <Icon className="text-[#0a1628] text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-yellow-400 text-xs sm:text-sm tracking-[0.28em] uppercase mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-slate-100 font-body text-lg sm:text-[1.05rem] hover:text-yellow-200 transition-colors block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-100 font-body text-lg sm:text-[1.05rem]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#7e6930] bg-[#101f3c] p-6 sm:p-9 flex flex-col gap-5 shadow-[0_28px_80px_rgba(3,8,20,0.35)]"
          >
            <h3 className="font-heading text-2xl text-yellow-400 tracking-[0.18em] uppercase">Send Enquiry</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                inputMode="numeric"
                pattern="[0-9]{10,15}"
                maxLength={15}
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <select
              name="product"
              required
              value={form.product}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" disabled>
                Select Product Interest
              </option>
              {PRODUCT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your requirements, quantity needed, delivery location..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none min-h-[132px]`}
            />

            {status === 'sent' && (
              <div className="bg-green-900/30 border border-green-700/40 rounded-xl px-4 py-3 text-green-300 font-body text-sm">
                Enquiry saved successfully. We&apos;ll contact you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-900/30 border border-red-700/40 rounded-xl px-4 py-3 text-red-300 font-body text-sm">
                Could not save the enquiry right now. Please call or WhatsApp us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold py-5 flex items-center justify-center gap-3 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Enquiry
                </>
              )}
            </button>

            <p className="text-slate-500 text-sm font-body text-center">
              We respond within 30 minutes during business hours.
            </p>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          <div className="md:col-span-2 glass glow-border rounded-2xl overflow-hidden" style={{ minHeight: '300px' }}>
            <div className="h-10 flex items-center px-4 sm:px-5 border-b border-yellow-900/30 gap-2">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <span className="font-heading text-yellow-400 text-sm tracking-wider uppercase">Our Location</span>
              <span className="ml-auto font-body text-slate-500 text-xs hidden sm:block">P45P+W6 Chandikhol, Odisha</span>
            </div>
            <iframe
              title="Gourab Enterprises - Chandikhol Odisha"
              src="https://maps.google.com/maps?q=P45P%2BW6+Chandikhol,+Odisha&output=embed&z=16"
              width="100%"
              height="270"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="glass glow-border rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center">
            <p className="font-heading text-yellow-400 text-sm tracking-widest uppercase mb-1">Scan to Find Us</p>
            <p className="text-slate-500 font-body text-xs mb-4">P45P+W6 Chandikhol, Odisha</p>
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden border-2 border-yellow-500/40 shadow-lg shadow-yellow-900/20 mb-4">
              <img src={locScan} alt="Location QR Code" className="w-full h-full object-contain bg-white p-2" />
            </div>
            <p className="text-slate-400 font-body text-xs leading-relaxed mb-4">
              Scan QR code to get instant directions to our shop.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=P45P%2BW6+Chandikhol,+Odisha"
              target="_blank"
              rel="noreferrer"
              className="btn-gold px-5 py-2 text-xs"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
