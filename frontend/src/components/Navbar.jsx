import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Brands',   href: '#brands' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'shadow-lg shadow-black/60 py-2'
            : 'py-3'
        }`}
        style={{
          background: scrolled
            ? 'rgba(10,22,40,0.96)'
            : 'linear-gradient(to bottom, rgba(10,22,40,0.85), transparent)',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo — white pill container for clear visibility on dark navbar */}
          <motion.button
            onClick={() => handleNav('#home')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'white',
                padding: '3px 6px',
                boxShadow: '0 0 0 2px rgba(201,168,76,0.6), 0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={logo}
                alt="Gourab Enterprises"
                className="h-7 sm:h-11 w-auto object-contain block"
              />
            </div>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative font-heading font-semibold tracking-wider text-sm uppercase transition-colors duration-300 group ${
                  activeLink === link.href ? 'text-yellow-400' : 'text-slate-200 hover:text-yellow-300'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-gold px-5 py-2 text-sm whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-yellow-400 text-xl focus:outline-none p-2 rounded-lg bg-[#0f1e38]/85 border border-yellow-500/20 shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.32 }}
            className="fixed inset-y-0 right-0 z-40 w-[84vw] max-w-72 flex flex-col pt-0 pb-10 px-0 overflow-y-auto"
            style={{ background: 'rgba(10,22,40,0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <img src={logo} alt="Gourab Enterprises" className="h-12 w-auto object-contain" />
              <button onClick={() => setMenuOpen(false)} className="text-yellow-400 text-xl p-1">
                <FaTimes />
              </button>
            </div>
            <div className="px-6 pt-4 flex flex-col flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className={`text-left font-heading text-base uppercase tracking-widest py-4 border-b border-slate-800/70 transition-colors ${
                    activeLink === link.href ? 'text-yellow-400' : 'text-slate-300 hover:text-yellow-400'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="btn-gold mt-8 py-3 text-center text-sm"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/70"
          />
        )}
      </AnimatePresence>
    </>
  );
}
