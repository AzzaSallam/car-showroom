import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaClock } from "react-icons/fa";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";


const Why = () => {

  const {t} = useTranslation() ;

  return (
    <div className='text-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
  <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black/80 mb-2 sm:mb-3'>
    {t("why.title")}
  </h2>
  <p className='text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 md:mb-12'>
    {t("why.suptitle")}
  </p>

  <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10'>
    {/* FIRST FEATURE */}
    <div className='flex items-center justify-center flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300'>
        <FaClock className='text-gray-100' size={24} />
      </div>

      <div className='max-w-xs'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3'>
          {t("why.products.title")}
        </h2>
        <p className='text-sm sm:text-base text-gray-500 leading-relaxed'>
          {t("why.products.desc")}
        </p>
      </div>
    </div>

    {/* SECOND FEATURE */}
    <div className='flex items-center justify-center flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300'>
        <MdSentimentSatisfiedAlt className='text-gray-100' size={24} />
      </div>

      <div className='max-w-xs'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3'>
          {t("why.quality.title")}
        </h2>
        <p className='text-sm sm:text-base text-gray-500 leading-relaxed'>
          {t("why.quality.desc")}
        </p>
      </div>
    </div>

    {/* THIRD FEATURE */}
    <div className='flex items-center justify-center flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300'>
        <RiSparkling2Fill className='text-gray-100' size={24} />
      </div>

      <div className='max-w-xs'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3'>
          {t("why.fast.title")}
        </h2>
        <p className='text-sm sm:text-base text-gray-500 leading-relaxed'>
          {t("why.fast.desc")}
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Why;
