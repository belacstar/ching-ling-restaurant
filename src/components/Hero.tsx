'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  // Cache-buster to force browser/Next.js to fetch replaced images with same filenames
  const CACHE_BUSTER = typeof window !== 'undefined' ? String(Date.now()) : 'ssr'
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Imagens da pasta hero (assets)
  const heroImages = [
    {
      src: `/hero01.png?v=${CACHE_BUSTER}`,
      alt: 'Restaurante Ching Ling - Ambiente 1'
    },
    {
      src: `/hero02.png?v=${CACHE_BUSTER}`,
      alt: 'Restaurante Ching Ling - Ambiente 2'
    },
    {
      src: `/hero03.png?v=${CACHE_BUSTER}`,
      alt: 'Restaurante Ching Ling - Ambiente 3'
    }
  ]

  // Auto-play do carrossel (8 segundos por slide para transição mais devagar)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [currentSlide, isAutoPlaying, heroImages.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Reativa o auto-play após 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroImages.length
    setCurrentSlide(next)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    const prev = currentSlide === 0 ? heroImages.length - 1 : currentSlide - 1
    setCurrentSlide(prev)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] lg:h-[90vh] w-full overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-32 bg-black z-0">
      {/* Carousel Container */}
      <div className="relative h-full w-full">
        {/* Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out flex items-center justify-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Use object-contain and an aspect-friendly wrapper so the full image is visible without cropping */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-fill select-none"
                priority={index === 0}
                style={{ transform: 'scale(1)', transition: 'none', userSelect: 'none' }}
              />
            </div>
            {/* Light overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}

        {/* Navigation Arrows (larger touch targets on mobile) */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 md:left-8 top-1/2 md:top-2/3 -translate-y-1/2 z-30 text-white hover:text-gray-200 transition-all duration-300 hover:scale-105 drop-shadow-lg cursor-pointer p-2 sm:p-3 md:p-0"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 md:right-8 top-1/2 md:top-2/3 -translate-y-1/2 z-30 text-white hover:text-gray-200 transition-all duration-300 hover:scale-105 drop-shadow-lg cursor-pointer p-2 sm:p-3 md:p-0"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 sm:w-3.5 md:w-3 h-4 sm:h-3.5 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-10">
          <div
            className="h-full bg-red-600 transition-all duration-700 ease-out"
            style={{
              width: `${((currentSlide + 1) / heroImages.length) * 100}%`
            }}
          />
        </div>
      </div>
    </section>
  )
}