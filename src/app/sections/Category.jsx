import React from 'react';
import CarsGallary from '../components/CarsGallary';


const Category = () => {


  return (
    <div className='text-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black/80 mb-6 sm:mb-8'>
        In Our Gallery
      </h2>
      <CarsGallary/>
    </div>
  )
}

export default Category ;
