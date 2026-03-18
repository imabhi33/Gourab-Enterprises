import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';

// Shop images from src/assets
import img0 from '../assets/image.png';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';

const galleryImages = [
  { src: img0, caption: 'Our Shop – Front View' },
  { src: img1, caption: 'TMT Rod Stock' },
  { src: img2, caption: 'Cement Stock Area' },
  { src: img3, caption: 'Warehouse Interior' },
  { src: img4, caption: 'Loading & Delivery' },
];

function GalleryCard({ img, index, onClick }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
      onClick={() => onClick(index)}
      className="relative overflow-hidden rounded-2xl cursor-pointer group glass glow-border"
      style={{ aspectRatio: index === 0 ? '16/9' : '4/3' }}
    >
      <img
        src={img.src}
        alt={img.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      {/* Caption + zoom icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 gap-3">
        <FaSearchPlus className="text-yellow-400 text-3xl drop-shadow-lg" />
        <p className="font-heading text-white text-sm tracking-wider uppercase text-center px-3 drop-shadow-lg">{img.caption}</p>
      </div>
      {/* Number badge */}
      <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-yellow-500/90 text-[#0a1628] font-display text-xs flex items-center justify-center shadow-lg">
        {index + 1}
      </span>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });

  const open  = useCallback((i) => setLightbox(i), []);
  const close = useCallback(() => setLightbox(null), []);
  const prev  = useCallback(() => setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length), []);
  const next  = useCallback(() => setLightbox(i => (i + 1) % galleryImages.length), []);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-[#0a1628]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-heading text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.4em] uppercase mb-3"
          >
            Our Space
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl text-white mb-4"
          >
            SHOP <span className="text-gold-gradient">GALLERY</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="divider-gold max-w-xs mx-auto mb-5"
          />
          <p className="text-slate-400 font-body max-w-xl mx-auto text-sm">
            A look inside Gourab Enterprises — our well-stocked warehouse and delivery operations.
          </p>
        </div>

        {/* Gallery grid — first image spans 2 cols on md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <GalleryCard img={img} index={i} onClick={open} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={close}
          >
            {/* Content — stop propagation so clicks on image don't close */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full mx-3 sm:mx-4"
            >
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].caption}
                className="w-full max-h-[72vh] sm:max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-center text-slate-300 font-heading text-sm tracking-widest uppercase mt-4">
                {galleryImages[lightbox].caption}
              </p>
              {/* Controls */}
              <button onClick={close} className="absolute top-3 right-3 sm:-top-4 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 bg-yellow-500 rounded-full flex items-center justify-center text-[#0a1628] hover:bg-yellow-400 transition-colors shadow-lg">
                <FaTimes />
              </button>
              <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 transition-colors">
                <FaChevronLeft />
              </button>
              <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 transition-colors">
                <FaChevronRight />
              </button>
              <p className="text-center text-slate-500 text-xs mt-2">{lightbox + 1} / {galleryImages.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
