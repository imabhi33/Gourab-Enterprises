import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const PHONE = import.meta.env.VITE_PHONE || '+91 99999 99999';
const PHONE_H = import.meta.env.VITE_PHONE_HREF || '+919999999999';
const WHATSAPP = import.meta.env.VITE_WHATSAPP || '919999999999';

const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + Math.random() * 84}%`,
  dur: `${3.5 + Math.random() * 4}s`,
  delay: `${Math.random() * 5}s`,
  size: `${2 + Math.random() * 4}px`,
}));

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(201,168,76,0.05)';
      ctx.lineWidth = 1;
      const gap = 70;

      for (let x = 0; x < canvas.width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-[1.04]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,22,0.86)_0%,rgba(6,15,30,0.52)_42%,rgba(4,10,22,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,34,68,0.1),rgba(5,10,18,0.72)_68%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/45 via-transparent to-[#071020]/95" />
      <div className="absolute inset-y-0 left-0 w-[45%] sm:w-[32%] bg-gradient-to-r from-[#071020]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[36%] sm:w-[24%] bg-gradient-to-l from-[#071020]/55 to-transparent pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {SPARKS.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            bottom: 0,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #e8c76a, #c9a84c)',
            animation: `ember-rise ${p.dur} ease-in ${p.delay} infinite`,
            boxShadow: '0 0 5px #c9a84c',
          }}
        />
      ))}

      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="relative z-10 w-full px-3 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-fit max-w-full mx-auto lg:mx-0 inline-flex items-center justify-center gap-2 rounded-full border border-yellow-500/30 bg-[#1a2744]/85 backdrop-blur-xl px-3 sm:px-6 py-2 sm:py-3 mb-5 sm:mb-8 shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(232,199,106,0.8)] inline-block shrink-0" />
            <span className="font-heading text-[0.55rem] sm:text-sm tracking-[0.08em] sm:tracking-[0.24em] text-yellow-300 uppercase text-center">
              ISI Certified - Premium Quality
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            className="w-full max-w-[21rem] sm:max-w-4xl mx-auto lg:mx-0 rounded-[1.35rem] sm:rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,36,0.82),rgba(10,22,40,0.58))] backdrop-blur-md px-3.5 py-5 sm:px-10 sm:py-12 shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
              className="font-display text-[2.2rem] sm:text-[5.3rem] md:text-[7rem] leading-[0.92] mb-3 sm:mb-4"
              style={{ textShadow: '0 12px 42px rgba(0,0,0,0.42)' }}
            >
              <span className="block text-white">BUILDING</span>
              <span className="block text-shimmer mt-1">TOMORROW</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="divider-gold my-4 sm:my-6 max-w-[10rem] sm:max-w-sm origin-center lg:origin-left mx-auto lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="font-heading text-[0.72rem] sm:text-xl md:text-2xl text-slate-200 tracking-[0.18em] sm:tracking-[0.32em] uppercase mb-4 sm:mb-5 text-center lg:text-left"
            >
              Gourab Enterprises
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="font-body text-slate-200/90 text-[0.9rem] sm:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-10 text-center lg:text-left"
            >
              Your trusted supplier for <span className="text-yellow-400 font-semibold">TMT Rods</span> and{' '}
              <span className="text-yellow-400 font-semibold">Cement</span> from India&apos;s top brands.
              Reliable material flow, strong support, and fast response for every project size.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 sm:gap-4"
            >
              <button
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold px-4 sm:px-7 py-3.5 sm:py-4 text-[0.72rem] sm:text-base min-w-0 lg:min-w-[220px] w-full lg:w-auto"
              >
                Browse Products
              </button>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[#2f4f30] bg-[#112439]/85 px-4 sm:px-7 py-3.5 sm:py-4 text-[0.68rem] sm:text-base flex items-center justify-center gap-2.5 sm:gap-3 text-white font-heading tracking-[0.05em] sm:tracking-[0.12em] uppercase transition-all hover:border-green-500/50 hover:bg-[#17304c] w-full lg:w-auto"
              >
                <FaWhatsapp className="text-green-400 text-base sm:text-lg shrink-0" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${PHONE_H}`}
                className="rounded-lg border border-yellow-500/45 bg-[#112439]/85 px-4 sm:px-7 py-3.5 sm:py-4 text-[0.64rem] sm:text-base flex items-center justify-center gap-2 sm:gap-3 text-yellow-300 font-heading tracking-[0.02em] sm:tracking-[0.12em] uppercase transition-all hover:border-yellow-400 hover:bg-[#1a2b45] w-full lg:w-auto"
              >
                <FaPhoneAlt className="text-yellow-400 shrink-0" />
                <span className="truncate">{PHONE}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        <span className="font-heading text-xs tracking-widest uppercase">Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <FaArrowDown />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  );
}
