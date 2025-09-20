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
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Galeria
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Uma amostra dos nossos pratos e do ambiente acolhedor do Ching Ling
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {images.slice(currentIndex, currentIndex + 3).concat(
                            images.slice(0, Math.max(0, (currentIndex + 3) - images.length))
                        ).map((image, index) => (
                            <div key={`${currentIndex}-${index}`} className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={image}
                                    alt={`Prato ou ambiente ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}