'use client'

import Image, { type StaticImageData } from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import drink01 from '@/assets/cardapio/cardapio-drink/1.png'
import drink02 from '@/assets/cardapio/cardapio-drink/2.png'
import drink03 from '@/assets/cardapio/cardapio-drink/3.png'
import drink04 from '@/assets/cardapio/cardapio-drink/4.png'

const RAW_IMAGES: StaticImageData[] = [drink01, drink02, drink03, drink04]

export default function CardapioBebidas() {
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
      if (window.location.hash === '#cardapio-bebidas') {
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

  const initiateTurn = useCallback(
    (direction: 'next' | 'prev') => {
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
    },
    [maxIndex, step]
  )

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
      <div className="relative flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-4 sm:p-6">
        {page ? (
          <Image
            key={page.src ?? pageIndex}
            src={page}
            alt={`Página ${pageIndex + 1} do cardápio de bebidas`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority={pageIndex <= 1}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-800" />
        )}
      </div>
    )
  }

  return (
    <section id="cardapio-bebidas" className="py-24 text-white bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-red-500/40 px-4 py-1 text-xs uppercase tracking-[0.5em] text-red-300">
            Cardápio de Bebidas
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-white">Drinks autorais e clássicos da casa</h2>
          <p className="mt-3 text-base text-gray-300">
            Experimente combinações exclusivas, insumos frescos e apresentações perfeitas para brindar.
          </p>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-red-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-red-400 hover:bg-red-500/10"
          >
            {isOpen ? 'Fechar cardápio' : 'Abrir cardápio'}
          </button>
        </div>

        {isOpen && (
          <div className="relative mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
            <div
              className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-red-600/40 via-transparent to-red-600/40 blur-3xl opacity-40"
              aria-hidden
            />
            <div
              className={`relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_60%)] shadow-[0_25px_70px_rgba(0,0,0,0.4)] ${
                turnDirection === 'next' ? 'page-turn-next' : ''
              } ${turnDirection === 'prev' ? 'page-turn-prev' : ''}`}
            >
              <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-col lg:flex-row'}`}>
                <div className="flex-1">{renderPage(leftPageIndex)}</div>
                {!isMobile && (
                  <>
                    <div className="hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" aria-hidden />
                    <div className="flex-1">{renderPage(rightPageIndex ?? leftPageIndex)}</div>
                  </>
                )}
              </div>

              {!isMobile && (
                <div
                  className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-40"
                  aria-hidden
                />
              )}

              <button
                type="button"
                onClick={goToPrev}
                className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 px-4 py-4 text-white transition hover:border-red-500 hover:bg-red-600/30 disabled:opacity-30"
                disabled={currentIndex === 0}
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 px-4 py-4 text-white transition hover:border-red-500 hover:bg-red-600/30 disabled:opacity-30"
                disabled={currentIndex >= maxIndex}
                aria-label="Próxima página"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="rounded-full border border-white/30 px-6 py-3 transition hover:border-red-500 hover:bg-red-500/10 disabled:opacity-30"
                  disabled={currentIndex === 0}
                  aria-label="Página anterior do cardápio de bebidas"
                >
                  Página anterior
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="rounded-full border border-white/30 px-6 py-3 transition hover:border-red-500 hover:bg-red-500/10 disabled:opacity-30"
                  disabled={currentIndex >= maxIndex}
                  aria-label="Próxima página do cardápio de bebidas"
                >
                  Próxima página
                </button>
              </div>

              <div className="text-center text-sm text-gray-300">
                {isMobile ? `Página ${currentView} de ${totalViews}` : `Folha ${currentView} de ${totalViews}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
