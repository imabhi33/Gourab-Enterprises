import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const PHONE = import.meta.env.VITE_PHONE || '+91 99999 99999';
const PHONE_H = import.meta.env.VITE_PHONE_HREF || '+919999999999';
const WHATSAPP = (import.meta.env.VITE_WHATSAPP || '919999999999').replace(/\+/g, '');
const ADDRESS = import.meta.env.VITE_ADDRESS || 'Main Road, Your City, West Bengal';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const tmtBrands = ['Jindal Panther - Fe-500D', 'Jindal Panther - Fe-500'];
const cementBrands = ['Jindal Panther Cement', 'Shree Cement', 'Ramco Cement', 'JK Super Cement', 'Dalmia Cement', 'Nuvoco Concrete'];

export default function Footer() {
  const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-[#050e20] pt-14 pb-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <button onClick={() => scroll('#home')} className="mb-5 block">
              <img src={logo} alt="Gourab Enterprises" className="h-14 w-auto object-contain" />
            </button>
            <p className="text-slate-500 font-body text-xs leading-relaxed mb-5">
              Your trusted TMT rod and cement supplier since 2005. Quality materials, unbeatable prices, reliable service.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: 'https://facebook.com', hover: 'hover:text-blue-400' },
                { icon: FaInstagram, href: 'https://instagram.com', hover: 'hover:text-pink-400' },
                { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP}`, hover: 'hover:text-green-400' },
              ].map(({ icon: Icon, href, hover }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-9 h-9 glass rounded-full flex items-center justify-center text-slate-400 border border-slate-800 transition-colors ${hover}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-yellow-400 text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-slate-400 hover:text-yellow-400 font-body text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-600 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-yellow-400 text-xs tracking-widest uppercase mb-4">Our Products</h4>
            <p className="text-blue-400 font-heading text-xs tracking-widest uppercase mb-2">TMT Rods</p>
            <ul className="space-y-1.5 mb-4">
              {tmtBrands.map((brand) => (
                <li key={brand} className="text-slate-500 font-body text-xs flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-700" />
                  {brand}
                </li>
              ))}
            </ul>
            <p className="text-yellow-400 font-heading text-xs tracking-widest uppercase mb-2">Cement</p>
            <ul className="space-y-1.5">
              {cementBrands.map((brand) => (
                <li key={brand} className="text-slate-500 font-body text-xs flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-yellow-700" />
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-yellow-400 text-xs tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-0.5 shrink-0 text-sm" />
                <p className="text-slate-400 font-body text-xs leading-relaxed">{ADDRESS}</p>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_H}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-yellow-400 font-body text-xs transition-colors"
                >
                  <FaPhone className="text-yellow-500 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 font-body text-xs transition-colors"
                >
                  <FaWhatsapp className="text-green-500 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-700 font-body text-xs">© {new Date().getFullYear()} Gourab Enterprises. All rights reserved.</p>
          <p className="text-slate-800 font-body text-xs">Built for quality construction</p>
        </div>
      </div>
    </footer>
  );
}
