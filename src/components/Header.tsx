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
      {/* Header with background image */}
      <div className="relative h-36 bg-black">
        {/* Background Image */}
        <Image
          src="/images/bckg-header.png"
          alt="Header Background"
          fill
          className="object-cover"
          priority
        />

        {/* Filtro de escurecimento leve */}
        <div className="absolute inset-0 bg-black/25"></div>

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

            {/* Menu Options - Displayed below the header */}
            <div className={`absolute top-full left-0 w-full z-50 backdrop-blur-sm transition-all duration-500 ease-in-out transform ${isMenuOpen
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

          {/* Logo (centered and larger) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Esfumado mais nítido e ampliado para maior destaque */}
              <div className="absolute inset-0 rounded-full scale-175"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 70%, transparent 85%)',
                  filter: 'blur(6px)'
                }}>
              </div>
              <div className="relative z-10">
                <Image
                  src="/logo-ching.png"
                  alt="Ching Ling Restaurant"
                  width={180}
                  height={180}
                  className="object-contain"
                  style={{
                    filter: 'drop-shadow(0px 6px 16px rgba(0,0,0,0.5))',
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

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}