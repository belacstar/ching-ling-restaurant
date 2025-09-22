'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#cardapio-chines', label: 'Cardápio Chinês' },
    { href: '#cardapio-japones', label: 'Cardápio Japonês' },
    { href: '#endereco', label: 'Endereço' },
    { href: '#sobre', label: 'Sobre' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Header with elegant gradient background */}
      <div className="relative h-36 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}
        ></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15"></div>

        {/* Animated gradient overlay for elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 via-transparent to-red-900/15"></div>

        {/* Top subtle glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom border with red accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-red-600/50 shadow-sm"></div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
          {/* Menu Icon and Text with Dropdown */}
          <div className="flex items-center relative">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-3 text-white hover:text-white transition-colors group"
            >
              {/* Dynamic Menu Icon */}
              <div className="relative">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'w-6'
                    }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'
                    }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'w-6'
                    }`}></div>
                </div>
              </div>

              <span className="text-lg font-medium tracking-wide">MENU</span>
            </button>

            {/* Menu Options - Render fixed below the header to avoid stacking-context issues */}
            <div className={`fixed top-36 left-0 w-full z-[9999] backdrop-blur-sm transition-all duration-500 ease-in-out transform ${isMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
              }`}
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.90) 25%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.05) 100%)'
              }}
            >
              <div className="px-4 pt-8 pb-12 pr-8">
                <nav className="flex flex-wrap justify-start items-start gap-8 pr-4">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group text-white hover:text-white transition-all duration-300 px-4 py-3 min-w-max"
                    >
                      <div className="relative inline-block">
                        <span className="text-base font-medium tracking-wide whitespace-nowrap uppercase">
                          {item.label}
                        </span>
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Logo (centered and larger) with elegant white backing */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Soft radial glow behind the logo for depth */}
              <div
                className="absolute inset-0 rounded-full scale-175"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 70%, transparent 85%)',
                  filter: 'blur(6px)'
                }}
              ></div>

              {/* Solid white circular backing to highlight the logo (subtle, not button-like) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-44 md:h-44 rounded-full bg-white border border-gray-100 flex items-center justify-center z-20" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}></div>

              {/* Logo image on top (no heavy drop shadow) */}
              <div className="relative z-30 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src="/logochin.png"
                  alt="Ching Ling Restaurant"
                  width={150}
                  height={150}
                  className="object-contain"
                  style={{
                    filter: 'none',
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - could add more content here if needed */}
          <div></div>
        </div>

      </div>

      {/* Overlay to close menu when clicking outside (placed between menu and page) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[9998]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}