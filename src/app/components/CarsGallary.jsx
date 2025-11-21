"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const CarsGallary = () => {
  const { i18n } = useTranslation();
const isRTL = i18n.language === 'ar';

  const [cars , setCars] = useState([]);

  useEffect(()=>{
    fetch("api/cars")
    .then((res)=>res.json())
    .then((data)=>setCars(data))
  },[]);


  return (
    <section className="px-0 sm:px-4 md:px-6 lg:px-8 sm:py-12 md:py-1" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="px-4 sm:px-6 md:px-8">
        <Swiper
          className="cars-swiper"
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          dir={isRTL ? 'rtl' : 'ltr'}
          key={isRTL ? 'rtl' : 'ltr'} // Force re-render when direction changes
          breakpoints={{
            640: { 
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 24
            },
            1280: { 
              slidesPerView: 4,
              spaceBetween: 28
            },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mx-2 sm:mx-0">
                {/* Image */}
                <div className="w-full h-52 sm:h-56 md:h-60 lg:h-64">
                  <Image
                    src={car.img}
                    alt={car.model}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
    
                {/* Bottom dark section */}
                <div className="bg-gray-950 text-white p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-2.5 relative">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase">
                    {car.brand}
                  </h3>
    
                  <div className="flex justify-between items-center w-full">
                    <p className="text-gray-300 text-base sm:text-lg">{car.model}</p>
                    <p className="text-sm sm:text-base font-bold">{car.year}</p>
                  </div>
    
                  <p className="text-gray-400 text-sm sm:text-base">{car.transmission}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarsGallary;
