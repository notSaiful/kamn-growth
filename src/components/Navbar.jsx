import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { KhatamStar } from './SazoArch';
import { useAudio } from '../context/AudioContext';

export default function Navbar() {
  const { isPlaying, toggleAudio } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showFloatingParchment = !isHomePage || isScrolled;

  const links = [
    { label: 'What We Do', href: '/services' },
    { label: 'How It Works', href: '/approach' },
    { label: 'Why KAMN', href: '/about' },
    { label: 'Insights', href: '/journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          showFloatingParchment
            ? 'py-3.5 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#29251F]/10 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/kamn-logo-mark.png" 
              alt="KAMN" 
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs" 
            />
            <span className={`tracking-[0.22em] font-semibold text-lg sm:text-xl transition-colors duration-300 ${
              showFloatingParchment ? 'text-[#29251F]' : 'text-[#FAF6EE]'
            }`}>
              KAMN
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((item) => {
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative group py-1 ${
                    showFloatingParchment
                      ? isActive ? 'text-[#29251F]' : 'text-[#6C6255] hover:text-[#29251F]'
                      : isActive ? 'text-[#FAF6EE]' : 'text-[#FAF6EE]/85 hover:text-[#FAF6EE]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                    isActive
                      ? 'w-full bg-[#B59661]'
                      : 'w-0 group-hover:w-full bg-[#B59661]'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop Primary CTA & Sound Toggle */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={toggleAudio}
              className={`min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
                showFloatingParchment
                  ? 'text-[#29251F] hover:text-[#B59661]'
                  : 'text-[#FAF6EE] hover:text-[#B59661]'
              }`}
              aria-label={isPlaying ? "Mute audio" : "Play audio"}
              title={isPlaying ? "Mute audio" : "Play audio"}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5 opacity-75" />
              )}
            </button>

            <Link
              to="/begin"
              className={`px-5 sm:px-6 py-2.5 rounded-sm text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border ${
                showFloatingParchment
                  ? 'bg-[#29251F] text-[#FAF6EE] border-[#29251F] hover:bg-[#363428] shadow-xs hover:shadow-sm'
                  : 'bg-[#FAF6EE] text-[#29251F] border-[#FAF6EE] hover:bg-[#E8D7BC]'
              }`}
            >
              Book a Growth Review
            </Link>
          </div>

          {/* Mobile Actions: Audio Toggle & Menu Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleAudio}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xs transition-colors cursor-pointer ${
                showFloatingParchment ? 'text-[#29251F]' : 'text-[#FAF6EE]'
              }`}
              aria-label={isPlaying ? "Mute audio" : "Play audio"}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-[#B59661]" />
              ) : (
                <VolumeX className="w-5 h-5 opacity-70" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xs transition-colors cursor-pointer ${
                showFloatingParchment ? 'text-[#29251F]' : 'text-[#FAF6EE]'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-Screen Parchment Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#F3EADB] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar with Close */}
            <div className="flex items-center justify-between border-b border-[#29251F]/10 pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <img src="/assets/kamn-logo-mark.png" alt="KAMN" className="h-9 w-auto object-contain" />
                <span className="tracking-[0.22em] text-xl font-semibold text-[#29251F]">
                  KAMN
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#29251F] hover:text-[#B59661] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="space-y-6 relative z-10 py-8">
              {links.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl text-[#29251F] hover:text-[#B59661] block leading-none font-semibold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Sound Control Row */}
            <div className="py-4 border-t border-[#29251F]/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#6C6255]">
                Ambient Audio
              </span>
              <button
                onClick={toggleAudio}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#29251F] hover:text-[#B59661] cursor-pointer"
                aria-label={isPlaying ? "Mute audio" : "Play audio"}
              >
                {isPlaying ? <Volume2 className="w-5 h-5 text-[#B59661]" /> : <VolumeX className="w-5 h-5 text-[#6C6255]" />}
              </button>
            </div>

            {/* Bottom CTA */}
            <div className="pt-4 border-t border-[#29251F]/10 relative z-10">
              <Link
                to="/begin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center py-4 bg-[#29251F] text-[#FAF6EE] text-center font-semibold text-xs tracking-[0.2em] uppercase rounded-sm shadow-md cursor-pointer"
              >
                Book a Growth Review
              </Link>
              <p className="mt-4 text-center text-xs text-[#6C6255] font-normal">
                Quietly handled behind your business.
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
