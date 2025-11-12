'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'
import { galleryAlbums } from '@/data/gallery'

type GalleryImage = {
  src: string
}

const mapAlbum = (albumKey: keyof typeof galleryAlbums): GalleryImage[] =>
  galleryAlbums[albumKey].map((filename) => ({
    src: `/gallery/${albumKey}/${filename}`
  }))

const chineImages = mapAlbum('chine')
const drinkImages = mapAlbum('drink')
const espacoImages = mapAlbum('espaco')
const japaImages = mapAlbum('japa')
const sobremesaImages = mapAlbum('sobremesa')

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
    title: 'Restaurante',
    description: 'O espaço acolhedor e sofisticado do Ching Ling.',
    accent: 'from-slate-500/40 to-slate-200/10',
    images: espacoImages
  }
]

export default function ImageCarousel() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0].id)
  const [visibleCountByAlbum, setVisibleCountByAlbum] = useState<Record<string, number>>(() =>
    Object.fromEntries(albums.map((album) => [album.id, 6]))
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const album = useMemo(() => albums.find((item) => item.id === activeAlbum) ?? albums[0], [activeAlbum])
  const visibleCount = visibleCountByAlbum[album.id] ?? 6
  const highlightImages = useMemo(
    () => album.images.slice(0, Math.min(album.images.length, 6)),
    [album]
  )
  const visibleImages = useMemo(() => album.images.slice(0, visibleCount), [album, visibleCount])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const splideOptions = useMemo(
    () => ({
      type: 'loop',
      autoplay: true,
      interval: 3500,
      pauseOnHover: true,
      pauseOnFocus: true,
      perMove: 1,
      perPage: 2.8,
      focus: 'center',
      gap: '2.5rem',
      padding: '2rem',
      arrows: true,
      pagination: false,
      classes: {
        arrows: 'splide__arrows custom-arrows',
        arrow: 'splide__arrow custom-arrow',
        prev: 'splide__arrow--prev custom-prev',
        next: 'splide__arrow--next custom-next'
      },
      breakpoints: {
        1200: { perPage: 2.3, gap: '2rem', padding: '1.5rem' },
        1024: { perPage: 2, gap: '1.75rem', padding: '1.25rem' },
        768: { perPage: 1.4, gap: '1.25rem', padding: '1rem' },
        640: { perPage: 1.15, gap: '1.15rem', padding: '1rem' },
        520: { perPage: 1, gap: '1rem', padding: '0.75rem' }
      }
    }),
    []
  )

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
          {highlightImages.length > 0 && (
            <Splide options={splideOptions} aria-label={`Destaques do álbum ${album.title}`}>
              {highlightImages.map((image, index) => (
                <SplideSlide key={`${album.id}-splide-${index}`} className="carousel-slide">
                  <button
                    type="button"
                    onClick={() => {
                      setModalImage(image.src)
                      setIsModalOpen(true)
                    }}
                    className="group relative h-72 w-full overflow-hidden rounded-[34px] border border-white/20 bg-gradient-to-br from-zinc-950/80 to-black/60 shadow-[0_25px_80px_rgba(0,0,0,0.5)] sm:h-80 lg:h-[360px]"
                  >
                    <Image
                      src={image.src}
                      alt={`${album.title} destaque ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                    <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-left">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.5em] text-red-300">Destaque</p>
                        <p className="text-lg font-semibold text-white">{album.title}</p>
                      </div>
                      <span className="rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white transition group-hover:border-red-400 group-hover:text-red-200">
                        Ver
                      </span>
                    </div>
                  </button>
                </SplideSlide>
              ))}
            </Splide>
          )}

          {/* Masonry grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visibleImages.map((image, index) => (
              <div
                key={`${album.id}-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setModalImage(image.src)
                  setIsModalOpen(true)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setModalImage(image.src)
                    setIsModalOpen(true)
                  }
                }}
                className="group relative cursor-zoom-in overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 to-black/30 shadow-[0_25px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                <div className="relative w-full h-48 sm:h-56 lg:h-64">
                  <Image
                    src={image.src}
                    alt={`${album.title} imagem ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/40 bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white">
                      Ampliar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < album.images.length && (
            <div className="text-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCountByAlbum((prev) => ({
                    ...prev,
                    [album.id]: Math.min((prev[album.id] ?? 6) + 6, album.images.length)
                  }))
                }
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-red-500 hover:bg-red-500/10"
              >
                Exibir mais fotos
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-h-full w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/50 bg-black/60 p-2 text-white transition hover:border-red-500 hover:bg-red-500/30"
              aria-label="Fechar visualização"
            >
              ×
            </button>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <Image
                src={modalImage}
                alt="Imagem ampliada"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
