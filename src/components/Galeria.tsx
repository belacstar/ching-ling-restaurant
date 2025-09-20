'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Galeria() {
  // Lista das imagens disponíveis em public/images
  const images = [
    '/images/restaurante.jpg',
    '/images/34881891_1921907387879644_7342816109470416896_n.jpg',
    '/images/36063595_1942391089164607_3257693322050797568_n.png',
    '/images/37351528_1992831807453868_3613004013554892800_n.png',
    '/images/39966142_2066964880040560_6630465529679183872_n.png',
    '/images/463777822_27087310377579331_5645851554213346041_n.jpg',
    '/images/463896525_27086823260961376_531374894847262872_n.jpg',
    '/images/463930402_27089472907363078_6530345039602037571_n.jpg',
    '/images/464038869_27087081807602188_5295790513955989267_n.jpg',
    '/images/464124178_27089571324019903_4985746401440436917_n.jpg'
  ];

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça nossos pratos e ambiente através das imagens
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="galeria-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={image}
                    alt={`Prato ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .galeria-swiper .swiper-pagination-bullet {
          background: #ef4444;
          opacity: 0.7;
        }
        
        .galeria-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .galeria-swiper .swiper-button-next,
        .galeria-swiper .swiper-button-prev {
          color: #ef4444;
        }
      `}</style>
    </section>
  );
}