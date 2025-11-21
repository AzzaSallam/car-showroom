import Image from 'next/image'
import React from 'react'

const Types = () => {

    const imgs = [
        '/assets/vectors/sedan.png' ,
        '/assets/vectors/caboriolet.png' ,
        '/assets/vectors/coupa.png' ,
        '/assets/vectors/suv.png' ,
        '/assets/vectors/micro3.png'
    ]

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 py-18 sm:py-20 md:py-28 lg:py-30 xl:py-36'>
        {
            imgs.map((img , idx) =>(
                <div key={idx} className='border-2 border-gray-200 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8'>
                    <Image 
                        src={img} 
                        width={80} 
                        height={70} 
                        alt=''
                        className='w-12 h-auto sm:w-16 md:w-20 lg:w-24'
                    />
                </div>
            ))
        }
    </div>
  )
}

export default Types
