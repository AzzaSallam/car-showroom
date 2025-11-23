import React from 'react';
import CarsGallary from '../components/CarsGallary';
import { useTranslation } from 'react-i18next';


const Category = () => {
  const {t} = useTranslation()

  return (
    <div id="gallary" className='text-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black/80 mb-4 sm:mb-8'>
        {t("gallary.title")}
      </h2>
      <p className='text-sm sm:text-base md:text-lg text-gray-500 mb-1'>
        {t("gallary.suptitle")}
      </p>
      <CarsGallary/>
    </div>
  )
}

export default Category ;
