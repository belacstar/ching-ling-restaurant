'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: '#cardapio-chines', label: 'Cardápio Chinês' },
    { href: '#cardapio-japones', label: 'Cardápio Japonês' },
    { href: '#cardapio-bebidas', label: 'Cardápio Bebidas' },
    { href: '#experiencia', label: 'Endereço' },
    { href: '#galeria', label: 'Galeria' }
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Header with elegant gradient background */}
      <div className="relative h-32 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
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
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'w-6'
                      }`}
                  ></div>
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'
                      }`}
                  ></div>
                  <div
                    className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'w-6'
                      }`}
                  ></div>
                </div>
              </div>

              <span className="text-lg font-medium tracking-wide">MENU</span>
            </button>

            {/* Menu Options - Render fixed below the header to avoid stacking-context issues */}
            <div
              className={`fixed top-32 left-0 w-full z-[9999] backdrop-blur-sm transition-all duration-500 ease-in-out transform ${isMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
                }`}
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.90) 25%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.05) 100%)'
              }}
            >
              <div className="px-4 pt-8 pb-12 pr-8">
                <nav className="flex flex-wrap justify-start items-start gap-8 pr-4">
                  {menuItems.map((item) => (
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

          {/* Logo + brand block */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full">
            <Link
              href="/"
              scroll
              aria-label="Voltar ao início"
              className="relative flex items-center gap-4 px-6 py-3 rounded-3xl transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <div className="relative flex items-center gap-4">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  <Logo
                    alt="Ching Ling Restaurant"
                    fill
                    sizes="96px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden md:flex flex-col text-white drop-shadow relative px-6 py-2">
                  <div
                    className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="text-xs uppercase tracking-[0.4em] text-red-400">
                    Restaurante
                  </span>
                  <span className="text-2xl font-semibold leading-tight drop-shadow">
                    Ching Ling
                  </span>
                  <span className="text-sm text-white/70">
                    Cozinha chinesa e japonesa
                  </span>
                </div>
              </div>
            </Link>
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
  )
}
