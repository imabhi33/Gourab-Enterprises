import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brands = [
  { name: 'Jindal Panther TMT', short: 'JP', color: '#1e3a6e', textColor: '#fbbf24', cat: 'TMT', desc: 'Fe-500D / Fe-500 Grade' },
  { name: 'Jindal Panther Cement', short: 'JPC', color: '#2563eb', textColor: '#ffffff', cat: 'Cement', desc: 'OPC 53 / PPC Grade' },
  { name: 'Shree Cement', short: 'SC', color: '#c9261e', textColor: '#ffffff', cat: 'Cement', desc: 'PPC Grade' },
  { name: 'Ramco Cement', short: 'RC', color: '#006437', textColor: '#ffffff', cat: 'Cement', desc: 'OPC 53 Grade' },
  { name: 'JK Super Cement', short: 'JK', color: '#92570a', textColor: '#fde68a', cat: 'Cement', desc: 'PPC Grade' },
  { name: 'Dalmia Cement', short: 'DC', color: '#6b21a8', textColor: '#ffffff', cat: 'Cement', desc: 'OPC / PPC Grade' },
  { name: 'Nuvoco Concrete', short: 'NC', color: '#065f46', textColor: '#6ee7b7', cat: 'Cement', desc: 'Ready Mix / 50 kg Bags' },
];

const marqueeItems = [...brands, ...brands];

function BrandCard({ brand, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: i * 0.08, duration: 0.55 }}
      className="relative glass glow-border rounded-[1.65rem] p-5 sm:p-6 min-h-[258px] flex flex-col items-center justify-center card-lift cursor-default group overflow-hidden"
    >
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-6 shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${brand.color}, ${brand.color}cc)`,
          boxShadow: `0 0 28px ${brand.color}33`,
        }}
      >
        <span className="font-display text-2xl sm:text-[1.7rem] leading-none" style={{ color: brand.textColor }}>
          {brand.short}
        </span>
      </div>

      <p className="font-heading text-slate-100 text-base sm:text-[1.05rem] text-center font-semibold leading-tight mb-2">
        {brand.name}
      </p>
      <p className="text-slate-400 text-sm sm:text-[1.05rem] font-body text-center mb-5 leading-snug">{brand.desc}</p>

      <span
        className={`text-sm px-5 py-1.5 rounded-full font-heading tracking-wide font-semibold ${
          brand.cat === 'TMT'
            ? 'bg-blue-900/60 text-blue-300 border border-blue-700/40'
            : 'bg-yellow-900/40 text-yellow-300 border border-yellow-700/30'
        }`}
      >
        {brand.cat}
      </span>

      <div
        className="absolute inset-0 rounded-[1.65rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${brand.color}22` }}
      />
    </motion.div>
  );
}

export default function Brands() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section id="brands" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0a1628, #071020, #0a1628)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-blue-900/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-yellow-900/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-heading text-yellow-500 text-sm tracking-[0.4em] uppercase mb-3"
          >
            Trusted Partners
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl text-white mb-4"
          >
            OUR <span className="text-gold-gradient">BRANDS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="divider-gold max-w-xs mx-auto mb-5"
          />
          <p className="text-slate-400 font-body max-w-xl mx-auto text-sm">
            We stock materials exclusively from India&apos;s most trusted manufacturers - all ISI certified and quality guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} i={i} />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#071020] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#071020] to-transparent z-10" />
          <div className="marquee-wrapper py-5 glass rounded-xl border border-yellow-900/30">
            <div className="marquee-track gap-6 px-8">
              {marqueeItems.map((brand, i) => (
                <div key={`${brand.name}-${i}`} className="inline-flex items-center gap-4 mx-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm shadow"
                    style={{ background: brand.color, color: brand.textColor }}
                  >
                    {brand.short}
                  </div>
                  <span className="font-heading text-slate-400 text-sm tracking-wider whitespace-nowrap uppercase">{brand.name}</span>
                  <span className="text-yellow-600 mx-1">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
