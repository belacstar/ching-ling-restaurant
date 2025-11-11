'use client'

import Image, { type StaticImageData } from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import page01 from '@/assets/cardapio/cardapio-japones/1.png'
import page02 from '@/assets/cardapio/cardapio-japones/2.png'
import page03 from '@/assets/cardapio/cardapio-japones/3.png'
import page04 from '@/assets/cardapio/cardapio-japones/4.png'
import page05 from '@/assets/cardapio/cardapio-japones/5.png'
import page06 from '@/assets/cardapio/cardapio-japones/6.png'
import page07 from '@/assets/cardapio/cardapio-japones/7.png'
import page08 from '@/assets/cardapio/cardapio-japones/cardapio-japa-ching_ling.png'

const RAW_IMAGES: StaticImageData[] = [
  page01,
  page02,
  page03,
  page04,
  page05,
  page06,
  page07,
  page08
]

export default function CardapioJapones() {
  const pages = useMemo(() => RAW_IMAGES, [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const TURN_ANIMATION_DURATION = 550
  const turnTimeout = useRef<NodeJS.Timeout | null>(null)
  const pendingDirection = useRef<'next' | 'prev' | null>(null)
  const [isTurning, setIsTurning] = useState(false)
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | null>(null)

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= 760)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => window.removeEventListener('resize', updateMobile)
  }, [])

  useEffect(() => {
    return () => {
      if (turnTimeout.current) {
        clearTimeout(turnTimeout.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#cardapio-japones') {
        setIsOpen(true)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const step = isMobile ? 1 : 2
  const maxIndex = Math.max(0, pages.length - step)
  const totalViews = isMobile ? pages.length : Math.ceil(pages.length / 2)
  const currentView = isMobile ? currentIndex + 1 : Math.floor(currentIndex / 2) + 1

  useEffect(() => {
    if (!isMobile && currentIndex % 2 !== 0) {
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    }
  }, [isMobile, currentIndex])

  const initiateTurn = useCallback((direction: 'next' | 'prev') => {
    setTurnDirection(direction)
    setIsTurning(true)
    setCurrentIndex((prev) => {
      const delta = direction === 'next' ? step : -step
      const next = prev + delta
      if (direction === 'next') {
        return Math.min(next, maxIndex)
      }
      return Math.max(0, next)
    })

    if (turnTimeout.current) {
      clearTimeout(turnTimeout.current)
    }

    turnTimeout.current = setTimeout(() => {
      setIsTurning(false)
      setTurnDirection(null)
    }, TURN_ANIMATION_DURATION)
  }, [maxIndex, step])

  const goToNext = useCallback(() => {
    if (currentIndex >= maxIndex) return
    if (isTurning) {
      pendingDirection.current = 'next'
      return
    }
    initiateTurn('next')
  }, [currentIndex, maxIndex, isTurning, initiateTurn])

  const goToPrev = useCallback(() => {
    if (currentIndex === 0) return
    if (isTurning) {
      pendingDirection.current = 'prev'
      return
    }
    initiateTurn('prev')
  }, [currentIndex, isTurning, initiateTurn])

  useEffect(() => {
    if (!isTurning && pendingDirection.current) {
      const direction = pendingDirection.current
      pendingDirection.current = null

      if (direction === 'next' && currentIndex < maxIndex) {
        initiateTurn('next')
      } else if (direction === 'prev' && currentIndex > 0) {
        initiateTurn('prev')
      }
    }
  }, [isTurning, currentIndex, maxIndex, initiateTurn])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext()
      }
      if (event.key === 'ArrowLeft') {
        goToPrev()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goToNext, goToPrev])

  const leftPageIndex = currentIndex
  const rightPageIndex = isMobile ? null : currentIndex + 1

  const renderPage = (pageIndex: number) => {
    const page = pages[pageIndex]

    return (
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center p-4 sm:p-6">
        {page ? (
          <Image
            key={page.src ?? pageIndex}
            src={page}
            alt={`Página ${pageIndex + 1} do cardápio japonês`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority={pageIndex <= 1}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800" />
        )}
      </div>
    )
  }

  return (
    <section id="cardapio-japones" className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Cardápio Japonês
          </p>
          <p className="text-gray-400 text-base mt-2">
            Clique para explorar o cardápio
          </p>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-red-500/60 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white hover:bg-red-600/20 transition"
          >
            {isOpen ? 'Fechar cardápio' : 'Abrir cardápio'}
          </button>
        </div>

        {isOpen && (
          <div className="relative max-w-6xl mx-auto">
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-red-600/40 via-transparent to-red-600/40 blur-3xl opacity-40" aria-hidden />
            <div
              className={`relative bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_60%)] shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden ${turnDirection === 'next' ? 'page-turn-next' : ''} ${turnDirection === 'prev' ? 'page-turn-prev' : ''}`}
            >
              <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-col lg:flex-row'}`}>
                <div className="flex-1">
                  {renderPage(leftPageIndex)}
                </div>
                {!isMobile && (
                  <>
                    <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden />
                    <div className="flex-1">
                      {renderPage(rightPageIndex ?? leftPageIndex)}
                    </div>
                  </>
                )}
              </div>

              {!isMobile && (
                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-40" aria-hidden />
              )}

              <button
                type="button"
                onClick={goToPrev}
                className="group absolute left-4 top-1/2 -translate-y-1/2 px-4 py-4 rounded-full bg-white/10 border border-white/30 text-white hover:bg-red-600/30 hover:border-red-500 transition disabled:opacity-30"
                disabled={currentIndex === 0}
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="group absolute right-4 top-1/2 -translate-y-1/2 px-4 py-4 rounded-full bg-white/10 border border-white/30 text-white hover:bg-red-600/30 hover:border-red-500 transition disabled:opacity-30"
                disabled={currentIndex >= maxIndex}
                aria-label="Próxima página"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="px-6 py-3 rounded-full border border-white/30 hover:border-red-500 hover:bg-red-500/10 transition disabled:opacity-30"
                  disabled={currentIndex === 0}
                  aria-label="Página anterior do cardápio japonês"
                >
                  Página anterior
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="px-6 py-3 rounded-full border border-white/30 hover:border-red-500 hover:bg-red-500/10 transition disabled:opacity-30"
                  disabled={currentIndex >= maxIndex}
                  aria-label="Próxima página do cardápio japonês"
                >
                  Próxima página
                </button>
              </div>

              <div className="text-center text-sm text-gray-400">
                {isMobile ? `Página ${currentView} de ${totalViews}` : `Folha ${currentView} de ${totalViews}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
