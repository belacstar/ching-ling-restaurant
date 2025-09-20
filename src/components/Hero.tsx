'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Imagens da pasta hero (assets)
  const heroImages = [
    {
      src: '/hero01.png',
      alt: 'Restaurante Ching Ling - Ambiente 1'
    },
    {
      src: '/hero02.png',
      alt: 'Restaurante Ching Ling - Ambiente 2'
    },
    {
      src: '/hero03.png',
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
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-[70vh] w-full overflow-hidden mt-36 bg-black">
      {/* Carousel Container */}
      <div className="relative h-full w-full">
        {/* Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === 0}
            />
            {/* Light overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 drop-shadow-lg"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 drop-shadow-lg"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
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