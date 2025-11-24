import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const {t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';



  return (
    <div className='relative p-0 m-0' dir={isRTL ? 'rtl' : 'ltr'}>
      <div className='relative overflow-hidden bg-gray-950 h-[350px] md:h-[500px] flex items-center'>
        {/* BIG RED CIRCLE  */}
        <div className={`absolute 
          ${isRTL
            ? 'right-1/2 translate-x-1/2 md:right-[-120px] md:translate-x-0 lg:right-[450px] ' 
            : 'left-1/2 -translate-x-1/2 md:-translate-x-1/4 '
          }
          top-16 md:top-48 lg:top-11
          w-[350px] h-[350px] md:w-[1300px] md:h-[1300px] 
          bg-[#B71C1C]/80 blur-3xl rounded-full`}>
        </div>

        {/* RED SMALL CIRCLE TOP */}
        <div className={`hidden md:block absolute top-28 
          ${isRTL ? 'right-[800px]' : 'left-[550px]'} 
          w-[50px] h-[50px] bg-[#B71C1C]/80 rounded-full`}>
        </div>

        {/* RED CIRCLE BOTTOM */}
        <div className={`hidden md:block absolute bottom-10 
            ${isRTL ? 'right-30' : 'left-30'} 
            w-[100px] h-[100px] bg-[#B71C1C]/80 rounded-full`}>
        </div>

        {/* CONTENT  */}
        <div className={`p-6 relative -top-4 md:-top-14 
          ${isRTL ? ' md:right-48 lg:right-18' : 'right-10 lg:left-18'}`}>

          <h1 className={`relative -top-12 text-4xl md:text-6xl font-extrabold text-white inline-block overflow-hidden mb-4
            ${isRTL ? 'right-12' : 'left-12'}`}>
            <span className="block">{t("name")}</span>
            {/* reveal overlay */}
            <span className={`absolute top-0 h-full w-full bg-[#070B16] animate-reveal
              ${isRTL ? 'right-0' : 'left-0'}`}></span>
          </h1>

          <p className={`text-gray-200/80 inline-block text-lg relative -top-18 sm:-top-12 md:-top-12
            ${isRTL
              ? ' xxs:right-20 sm:-right-5 sm:md:left-10 top-[-40px] md:right-[-20px]  ' 
              : 'left-20 sm:left-[-165px]  md:right-10'
            }`}>
              {t("manage")}
            <span className={`block h-0.5 bg-[#B71C1C] mt-2 w-0 animate-underline
              ${isRTL ? 'mr-auto' : 'ml-0'}`}></span>
          </p>
        </div>

      </div>

        <Image
        src="/assets/elipses/hero-car.png"
        alt="Hero car"
        width={1200}
        height={500}
        className={`absolute w-[550px] -bottom-15 
          md:w-[600px] md:left-[80px] md:-bottom-20
          lg:w-[850px] lg:bottom-[-120px]
          ${isRTL
            ? 'lg:left-1 scale-x-[-1] xl:right-[650px]' 
            : ' md:left-[165px] lg:left-[250px] xl:left-[570px] '
          }`
        }
      />


    </div>
  )
}

export default Hero ;