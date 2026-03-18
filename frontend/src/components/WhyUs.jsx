import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaRupeeSign, FaTruck, FaHandshake, FaCertificate, FaHeadset } from 'react-icons/fa';

const features = [
  {
    Icon: FaCertificate, title: 'ISI Certified Quality',
    desc: 'All products are BIS certified and meet Indian Standards for construction materials.',
    color: 'from-gold-500 to-gold-700',
    delay: 0,
  },
  {
    Icon: FaRupeeSign, title: 'Best Market Prices',
    desc: 'Competitive wholesale and retail pricing. Volume discounts available on bulk orders.',
    color: 'from-ember-500 to-ember-700',
    delay: 0.1,
  },
  {
    Icon: FaTruck, title: 'Fast Delivery',
    desc: 'Same-day and next-day delivery within city limits. Bulk deliveries coordinated efficiently.',
    color: 'from-gold-600 to-gold-800',
    delay: 0.2,
  },
  {
    Icon: FaShieldAlt, title: 'Genuine Products',
    desc: '100% genuine materials sourced directly from manufacturers and authorized distributors.',
    color: 'from-ember-400 to-ember-600',
    delay: 0.3,
  },
  {
    Icon: FaHandshake, title: 'Trusted Relationships',
    desc: 'Over 20 years of serving builders, contractors, and homeowners with integrity.',
    color: 'from-gold-500 to-amber-700',
    delay: 0.4,
  },
  {
    Icon: FaHeadset, title: '24/7 Support',
    desc: 'Expert guidance via WhatsApp or phone. We help you choose the right grade for your project.',
    color: 'from-ember-600 to-red-700',
    delay: 0.5,
  },
];

// Extracted as a proper component so hooks are valid
function FeatureCard({ f }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: f.delay, duration: 0.65, ease: 'easeOut' }}
      className="glass glow-border rounded-2xl p-5 sm:p-8 card-lift group"
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        <f.Icon className="text-white text-2xl" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl text-white mb-3 font-bold">{f.title}</h3>
      <p className="text-steel-400 text-sm font-body leading-relaxed">{f.desc}</p>
      <div className={`mt-5 h-0.5 bg-gradient-to-r ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
    </motion.div>
  );
}

export default function WhyUs() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section id="whyus" className="relative py-16 sm:py-24 bg-steel-950">
      {/* Background geometric accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-900/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ember-900/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-heading text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.4em] uppercase mb-3"
          >
            Our Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl text-white mb-4"
          >
            WHY CHOOSE <span className="text-gold-gradient">US?</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="divider-gold max-w-xs mx-auto mb-6"
          />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f) => <FeatureCard key={f.title} f={f} />)}
        </div>
      </div>
    </section>
  );
}
