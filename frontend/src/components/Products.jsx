import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFilter, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP = import.meta.env.VITE_WHATSAPP || '919999999999';

// Reliable image URLs tested & working — with gradient fallback per card
const GRADIENT_FALLBACKS = [
  'linear-gradient(135deg, #1e3a6e 0%, #0a1628 100%)',
  'linear-gradient(135deg, #2d4a8a 0%, #0a1628 100%)',
  'linear-gradient(135deg, #14305a 0%, #071020 100%)',
  'linear-gradient(135deg, #1a3560 0%, #0a1a34 100%)',
  'linear-gradient(135deg, #243b5e 0%, #0a1628 100%)',
  'linear-gradient(135deg, #1e3055 0%, #071020 100%)',
  'linear-gradient(135deg, #192c4d 0%, #0a1628 100%)',
  'linear-gradient(135deg, #1b3060 0%, #071020 100%)',
];

const products = [
  {
    id: 1, category: 'TMT Rods', name: 'Jindal Panther TMT – Fe-500D',
    brand: 'Jindal Steel & Power', grade: 'Fe-500D',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    gradientIdx: 0,
    desc: 'High ductility seismic-resistant TMT bars. Ideal for houses, high-rises, bridges.',
    badge: 'Our Special', badgeColor: 'bg-blue-700',
    specs: ['Fe-500D Grade', 'BIS Certified', 'Earthquake Resistant'],
  },
  {
    id: 2, category: 'TMT Rods', name: 'Jindal Panther TMT – Fe-500',
    brand: 'Jindal Steel & Power', grade: 'Fe-500',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    gradientIdx: 1,
    desc: 'Standard grade with excellent bendability. Best for residential and commercial projects.',
    badge: 'Popular', badgeColor: 'bg-yellow-600',
    specs: ['Fe-500 Grade', 'BIS Certified', 'Easy Weldability'],
  },
  {
    id: 3, category: 'Cement', name: 'Jindal Panther Cement',
    brand: 'Jindal', grade: 'OPC 53 / PPC',
    image: 'https://images.unsplash.com/photo-1573843981242-bf3a1dfbd9fc?w=600&q=80',
    gradientIdx: 2,
    desc: 'Premium Jindal cement for all construction needs — superior strength and workability.',
    badge: 'Our Special', badgeColor: 'bg-blue-700',
    specs: ['OPC 53 / PPC', 'ISI Marked', '50 kg Bags'],
  },
  {
    id: 4, category: 'Cement', name: 'Shree Cement',
    brand: 'Shree Cement Ltd.', grade: 'PPC',
    image: 'https://images.unsplash.com/photo-1601058272176-d1f6a9c0e31e?w=600&q=80',
    gradientIdx: 3,
    desc: "India's premium cement brand. Consistent quality for durable construction.",
    badge: 'Best Seller', badgeColor: 'bg-red-700',
    specs: ['PPC Grade', 'ISI Certified', '50 kg Bags'],
  },
  {
    id: 5, category: 'Cement', name: 'Ramco Cement',
    brand: 'Ramco Cements', grade: 'OPC 53',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&q=80',
    gradientIdx: 4,
    desc: 'Trusted cement for RCC foundations, high-rise structures and slabs.',
    badge: 'Trusted', badgeColor: 'bg-green-700',
    specs: ['OPC 53 Grade', 'BIS Marked', '50 kg Bags'],
  },
  {
    id: 6, category: 'Cement', name: 'JK Super Cement',
    brand: 'JK Cement Ltd.', grade: 'PPC',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&q=80',
    gradientIdx: 5,
    desc: 'Excellent workability and water resistance for all civil construction.',
    badge: 'Popular', badgeColor: 'bg-yellow-600',
    specs: ['PPC Grade', 'Water Resistant', '50 kg Bags'],
  },
  {
    id: 7, category: 'Cement', name: 'Dalmia Cement',
    brand: 'Dalmia Bharat', grade: 'OPC / PPC',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    gradientIdx: 6,
    desc: "One of India's established cement brands. Long-lasting, durable structures.",
    badge: 'Heritage', badgeColor: 'bg-purple-700',
    specs: ['OPC/PPC Grade', 'BIS Certified', '50 kg Bags'],
  },
  {
    id: 8, category: 'Cement', name: 'Nuvoco Concrete',
    brand: 'Nuvoco Vistas Corp.', grade: 'PPC / Ready Mix',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=600&q=80',
    gradientIdx: 7,
    desc: 'Modern concrete solutions in bags and ready-mix for large-scale projects.',
    badge: 'Premium', badgeColor: 'bg-teal-700',
    specs: ['PPC / Ready Mix', 'Modern Formula', '50 kg Bags'],
  },
];

const categories = ['All', 'TMT Rods', 'Cement'];

function ProductCard({ product, index }) {
  const [imgFailed, setImgFailed] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.6, ease: 'easeOut' }}
      className="glass glow-border rounded-2xl overflow-hidden card-lift group flex flex-col"
    >
      {/* Image / Gradient fallback */}
      <div className="relative h-44 overflow-hidden shrink-0">
        {!imgFailed ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: GRADIENT_FALLBACKS[product.gradientIdx] }}
          >
            {/* Brand initial circle */}
            <div className="w-14 h-14 rounded-full bg-yellow-500/20 border-2 border-yellow-500/40 flex items-center justify-center">
              <span className="font-display text-yellow-400 text-2xl">
                {product.name.charAt(0)}
              </span>
            </div>
            <span className="font-heading text-yellow-400/70 text-xs tracking-wider uppercase">{product.brand}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 to-transparent" />
        <span className={`absolute top-3 right-3 text-white text-xs font-heading font-bold px-3 py-1 rounded-full tracking-wider ${product.badgeColor}`}>
          {product.badge}
        </span>
        <span className="absolute top-3 left-3 glass text-xs font-heading px-2 py-1 rounded text-slate-200 tracking-wide">
          {product.grade}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-tight mb-1">{product.name}</h3>
        <p className="text-yellow-400 text-xs font-body mb-3">{product.brand}</p>
        <p className="text-slate-400 text-xs sm:text-sm font-body leading-relaxed mb-3 flex-1">{product.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.map((s) => (
            <span key={s} className="text-xs bg-blue-950/60 text-blue-300 border border-blue-800/40 px-2 py-0.5 rounded-full">
              {s}
            </span>
          ))}
        </div>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi, I want to enquire about ${encodeURIComponent(product.name)} — please share pricing details.`}
          target="_blank" rel="noreferrer"
          className="btn-gold w-full py-3 text-xs sm:text-sm text-center flex items-center justify-center gap-2"
        >
          <FaWhatsapp className="text-base shrink-0" />
          Get Price &amp; Enquire
        </a>
        <p className="text-center text-slate-600 text-xs mt-2 font-body">Price on request · Contact us</p>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState('All');
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });
  const filtered   = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <section id="products" className="relative py-16 sm:py-24" style={{ background: '#071020' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-heading text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.4em] uppercase mb-3"
          >
            Our Inventory
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4"
          >
            PREMIUM <span className="text-gold-gradient">PRODUCTS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="divider-gold max-w-xs mx-auto mb-5"
          />
          <p className="text-slate-400 max-w-xl mx-auto font-body text-sm">
            Genuine ISI-certified materials from India's most trusted brands — quality guaranteed.
          </p>
          {/* Pricing notice */}
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-3 glass glow-border rounded-2xl sm:rounded-full px-4 sm:px-5 py-2.5 mt-5">
            <span className="text-yellow-400 text-sm shrink-0">•</span>
            <span className="font-heading text-yellow-300 text-[0.7rem] sm:text-sm tracking-wide text-left sm:text-center">
              For price details, please <strong className="text-yellow-200">contact us</strong> - best market rates guaranteed
            </span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          <FaFilter className="text-yellow-500 text-sm" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-heading text-[0.68rem] sm:text-sm uppercase tracking-[0.14em] sm:tracking-widest px-3 sm:px-5 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-yellow-500 border-yellow-500 text-[#0a1628] shadow-lg shadow-yellow-500/25'
                  : 'border-slate-700 text-slate-400 hover:border-yellow-500 hover:text-yellow-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
