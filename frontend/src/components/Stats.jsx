import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate, FaTruck, FaCheckCircle, FaLayerGroup } from 'react-icons/fa';

// Honest value propositions only — no fake age/year stats
const stats = [
  { Icon: FaLayerGroup,  value: '7+',    label: 'Top Brands',           color: 'from-yellow-500 to-yellow-700' },
  { Icon: FaCertificate, value: '100%',  label: 'ISI Certified Products', color: 'from-blue-600 to-blue-800' },
  { Icon: FaCheckCircle, value: 'Genuine', label: 'No Duplicates Ever',  color: 'from-yellow-600 to-yellow-800' },
  { Icon: FaTruck,       value: 'Fast',  label: 'City-Wide Delivery',    color: 'from-blue-700 to-blue-900' },
];

function StatCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon   = item.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: 'easeOut' }}
      className="glass glow-border rounded-xl p-4 sm:p-8 flex flex-col items-center text-center card-lift min-h-[168px] sm:min-h-0"
    >
      <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
        <Icon className="text-white text-xl sm:text-2xl" />
      </div>
      <div className="font-display text-2xl sm:text-4xl lg:text-5xl text-gold-gradient mb-1">
        {item.value}
      </div>
      <p className="font-heading text-slate-300 text-[0.65rem] sm:text-sm tracking-[0.18em] sm:tracking-widest uppercase mt-1 leading-snug">{item.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-20" style={{ background: '#071020' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-transparent to-yellow-900/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => <StatCard key={s.label} item={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
