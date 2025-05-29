import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Clientele = () => {

    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    if (!isLandingPage) return null;

  const clients = [
    { name: 'Google', logo: '/logos/google.png' },
    { name: 'Amazon', logo: '/logos/amazon.png' },
    { name: 'Netflix', logo: '/logos/netflix.png' },
    { name: 'Facebook', logo: '/logos/facebook.png' },
    { name: 'Apple', logo: '/logos/apple.png' },
    { name: 'Microsoft', logo: '/logos/microsoft.png' },
  ];

  return (
    <section className=" py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Clients
      </h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-xl hover:scale-105 transform transition">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientele;
