import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
 

  return (
    <div id="services" className='text-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black/80 mb-8 sm:mb-10 md:mb-12'>
        {t("services.title")}
      </h2>
      <p className='text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 md:mb-12'>
        {t("services.suptitle")}
      </p>

      <div className='space-y-5 sm:space-y-8 md:space-y-10'>
        {/* FIRST LINE OF SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Image  */}
          <div className="hidden md:block col-span-1 w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/icons/serv1.jpg" 
              width={600} 
              height={400} 
              alt="Selling service"
              className="w-full h-full object-cover "
            />
          </div>
          
          {/* Service card */}
          <div className="md:col-span-2 bg-gradient-to-br from-red-900 to-red-800 text-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center rounded-2xl min-h-[280px] md:min-h-[320px] shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-red-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-wide'>
              {t("services.selling.title")}
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-center max-w-2xl text-gray-200 leading-relaxed'>
              {t("services.selling.desc")}
            </p>
          </div>
        </div>

        {/* SECOND LINE OF SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Service card 1 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 text-gray-100 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center rounded-2xl min-h-[280px] md:min-h-[320px] shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-red-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-wide'>
              {t("services.buying.title")}
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-center text-gray-200 leading-relaxed'>
              {t("services.buying.desc")}
            </p>
          </div>

          {/* Image - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block w-full h-[600px] lg:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/assets/icons/serv2.jpg" 
              width={600} 
              height={400} 
              alt="Buying service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service card 2 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 text-gray-100 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center rounded-2xl min-h-[280px] md:min-h-[320px] shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-red-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 tracking-wide'>
              {t("services.exchange.title")}
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-center text-gray-200 leading-relaxed'>
              {t("services.exchange.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
