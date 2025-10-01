'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ImageCarousel() {
    const images = [
        '/images/463777822_27087310377579331_5645851554213346041_n.jpg',
        '/images/463896525_27086823260961376_531374894847262872_n.jpg',
        '/images/463930402_27089472907363078_6530345039602037571_n.jpg',
        '/images/464038869_27087081807602188_5295790513955989267_n.jpg',
        '/images/464124178_27089571324019903_4985746401440436917_n.jpg',
        '/images/464153913_27091040047206364_6361849550253398206_n.jpg',
        '/images/468303125_18346454764133795_5886306277354499692_n.jpg',
        '/images/469377285_18347770483133795_1291712881640459610_n.jpg'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Galeria
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                        Uma amostra dos nossos pratos e do ambiente acolhedor do Ching Ling
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {images.slice(currentIndex, currentIndex + 3).concat(
                            images.slice(0, Math.max(0, (currentIndex + 3) - images.length))
                        ).map((image, index) => (
                            <div key={`${currentIndex}-${index}`} className="relative w-full rounded-lg overflow-hidden shadow-lg">
                                {/* Responsive heights: smaller on mobile, wider aspect on desktop */}
                                <div className="relative w-full h-36 sm:h-44 md:h-56 lg:h-64 lg:aspect-[16/9] lg:h-auto">
                                    <Image
                                        src={image}
                                        alt={`Prato ou ambiente ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-fill transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                                className={`w-4 sm:w-3.5 md:w-3 h-4 sm:h-3.5 md:h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}