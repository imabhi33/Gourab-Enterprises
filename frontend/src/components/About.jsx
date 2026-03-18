import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ADDRESS = import.meta.env.VITE_ADDRESS || 'Main Road, Your City, West Bengal';

// Honest highlights only
const highlights = [
  'ISI & BIS certified products only',
  'Jindal Panther TMT & top cement brands',
  'Bulk & retail orders both welcome',
  'Expert consultation — free of charge',
  'Transparent pricing, no hidden costs',
];

export default function About() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: '-80px' });
  const imgRef    = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #071020, #0a1628)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-yellow-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-heading text-yellow-500 text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none mb-4"
            >
              ABOUT <span className="text-gold-gradient">GOURAB</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="divider-gold mb-6 max-w-xs"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-slate-300 font-body leading-relaxed mb-4 text-sm sm:text-base"
            >
              Gourab Enterprises is a dedicated construction materials supplier committed to bringing
              the highest quality TMT rods and cement to builders, contractors, and homeowners.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-slate-400 font-body leading-relaxed mb-8 text-sm"
            >
              We stock only ISI-certified materials from India's most reputed brands — including
              Jindal Panther TMT and top cement brands. Our team is always ready to help you choose
              the right grade for your project, big or small.
            </motion.p>

            {/* Highlights */}
            <div className="space-y-2.5 sm:space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-yellow-400 text-sm shrink-0" />
                  <span className="text-slate-300 font-body text-sm">{h}</span>
                </motion.div>
              ))}
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass glow-border rounded-xl p-4 sm:p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-[#0a1628] text-sm" />
              </div>
              <div>
                <p className="font-heading text-yellow-400 tracking-wider text-xs uppercase mb-1">Find Us</p>
                <p className="text-slate-300 font-body text-sm leading-relaxed">{ADDRESS}</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Shop image */}
          <div ref={imgRef} className="relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 lg:ml-auto"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction materials at Gourab Enterprises"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/75 via-transparent to-transparent" />
              {/* Text overlay on image */}
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-yellow-400 text-2xl leading-none drop-shadow">GOURAB</p>
                <p className="font-heading text-slate-200 text-xs tracking-[0.25em] uppercase">Enterprises</p>
              </div>
            </motion.div>

            {/* Decorative rings — positioned so they don't overflow on mobile */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-40 h-40 rounded-full border border-yellow-500/15 animate-spin-slow pointer-events-none" />
            <div className="hidden sm:block absolute -top-2 -right-2 w-28 h-28 rounded-full border border-yellow-500/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
