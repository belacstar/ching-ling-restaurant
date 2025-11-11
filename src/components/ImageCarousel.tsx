'use client'

import Image, { type StaticImageData } from 'next/image'
import { useMemo, useRef, useState } from 'react'

type GalleryImage = {
  src: StaticImageData
}

type WebpackImageContext = {
  keys: () => string[]
  (key: string): { default: StaticImageData }
}

const importAlbum = (context: WebpackImageContext): GalleryImage[] =>
  context.keys().map((key: string) => ({
    src: context(key).default as StaticImageData
  }))

const chineImages = importAlbum(require.context('@/assets/images/chine', false, /\.(png|jpe?g)$/) as WebpackImageContext)
const drinkImages = importAlbum(require.context('@/assets/images/drink', false, /\.(png|jpe?g)$/) as WebpackImageContext)
const espacoImages = importAlbum(require.context('@/assets/images/espaco', false, /\.(png|jpe?g)$/) as WebpackImageContext)
const japaImages = importAlbum(require.context('@/assets/images/japa', false, /\.(png|jpe?g)$/) as WebpackImageContext)
const sobremesaImages = importAlbum(require.context('@/assets/images/sobremesa', false, /\.(png|jpe?g)$/) as WebpackImageContext)

const albums = [
  {
    id: 'chine',
    title: 'Sabores Chineses',
    description: 'Clássicos da culinária chinesa com apresentações vibrantes.',
    accent: 'from-red-600/40 to-red-500/10',
    images: chineImages
  },
  {
    id: 'japa',
    title: 'Essência Japonesa',
    description: 'Sushis, sashimis e criações autorais cheias de cor.',
    accent: 'from-rose-500/40 to-rose-300/10',
    images: japaImages
  },
  {
    id: 'drink',
    title: 'Coquetéis Exclusivos',
    description: 'Drinks autorais que harmonizam com os pratos da casa.',
    accent: 'from-amber-500/40 to-amber-200/10',
    images: drinkImages
  },
  {
    id: 'sobremesa',
    title: 'Sobremesas',
    description: 'Doces e sobremesas com toque oriental.',
    accent: 'from-pink-500/40 to-pink-200/10',
    images: sobremesaImages
  },
  {
    id: 'espaco',
    title: 'Ambientes',
    description: 'O espaço acolhedor e sofisticado do Ching Ling.',
    accent: 'from-slate-500/40 to-slate-200/10',
    images: espacoImages
  }
]

export default function ImageCarousel() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0].id)
  const highlightRef = useRef<HTMLDivElement | null>(null)

  const album = useMemo(() => albums.find((item) => item.id === activeAlbum) ?? albums[0], [activeAlbum])
  const highlights = useMemo(() => album.images.slice(0, 8), [album])

  const scrollHighlights = (direction: 'prev' | 'next') => {
    if (!highlightRef.current) return
    const container = highlightRef.current
    const offset = direction === 'next' ? container.clientWidth * 0.8 : -container.clientWidth * 0.8
    container.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="galeria" className="py-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-500 mb-2">Galeria</p>
            <h2 className="text-3xl md:text-5xl font-bold">Memórias do Ching Ling</h2>
            <p className="text-gray-300 mt-4 max-w-2xl">
              Explore pratos icônicos, drinks especiais, sobremesas autorais e o ambiente acolhedor do restaurante.
            </p>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {albums.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveAlbum(item.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                  activeAlbum === item.id
                    ? 'border-red-500 bg-red-500/10 text-white'
                    : 'border-white/20 text-white/70 hover:border-red-500/60 hover:text-white'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className={`rounded-[32px] border border-white/10 bg-gradient-to-br ${album.accent} p-6 md:p-8 space-y-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold">{album.title}</h3>
              <p className="text-gray-300 mt-2 max-w-2xl">{album.description}</p>
            </div>
            <div className="text-sm text-white/70">
              {album.images.length} {album.images.length === 1 ? 'registro' : 'registros'}
            </div>
          </div>

          {/* Horizontal highlight carousel */}
          {highlights.length > 0 && (
            <div className="relative">
              <div
                ref={highlightRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-red-600/60 scrollbar-track-transparent"
              >
                {highlights.map((image, index) => (
              <div
                key={`${album.id}-highlight-${index}`}
                className="relative min-w-[260px] sm:min-w-[320px] h-64 snap-center overflow-hidden rounded-3xl border border-white/15 bg-black/40"
              >
                <Image
                  src={image.src}
                  alt={`${album.title} destaque ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-red-400">Destaque</p>
                </div>
              </div>
            ))}
          </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent hidden md:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent hidden md:block" />
              <div className="hidden md:flex justify-between absolute inset-y-0 left-0 right-0 px-2">
                <button
                  type="button"
                  onClick={() => scrollHighlights('prev')}
                  className="pointer-events-auto self-center rounded-full border border-white/30 bg-black/40 p-3 text-white hover:border-red-500 hover:bg-red-500/20 transition"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollHighlights('next')}
                  className="pointer-events-auto self-center rounded-full border border-white/30 bg-black/40 p-3 text-white hover:border-red-500 hover:bg-red-500/20 transition"
                >
                  ›
                </button>
              </div>
            </div>
          )}

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {album.images.map((image, index) => (
              <div
                key={`${album.id}-${index}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={image.src}
                    alt={`${album.title} imagem ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-red-400 mb-1">{album.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
