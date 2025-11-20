import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative p-0 m-0'>
      <div className='relative overflow-hidden bg-gray-950 h-80 md:h-[500px] lg:h-[600px]  flex items-center'>
        {/*BIG RED CIRCLE BOTTOM RIGHT */}
        <div className="absolute 
          left-1/2 -translate-x-1/2 
          top-16 
          w-[350px] h-[350px]  
          md:block md:top-48 md:-left-120
          lg:left-[10px] lg:top-30
          md:w-[1300px] md:h-[1300px] 
          bg-[#B71C1C]/80 
          blur-3xl rounded-full 
          md:translate-x-1/3 "></div>

        {/* RED SMALL CIRCLE TOP LEFT */}
        <div className=" hidden md:block absolute top-28 left-[550PX] w-[50px] h-[50px] bg-[#B71C1C]/80 rounded-full"></div>

        {/* RED CIRCLE BOTTOM LEFT */}
        <div className="hidden md:block absolute bottom-10 left-30 w-[100px] h-[100px] bg-[#B71C1C]/80 rounded-full"></div>

        {/* LEFT CONTENT */}
        <div className="p-6  relative -top-4 md:-top-14  lg:left-18">

          <h1 style={{marginBottom:'1rem'}} className="relative -top-12 left-12 text-4xl md:text-6xl font-extrabold text-white inline-block overflow-hidden">
            <span className="block ">Arabitak Motors</span>
            {/* reveal overlay */}
            <span className="absolute left-0 top-0 h-full w-full bg-[#070B16] animate-reveal"></span>
          </h1>

          <p className=" text-gray-200/80 inline-block text-lg relative left-20 -top-18 md:left-[-200]" >
            Managed by Mr. Mahmoud Gaafer
            <span className="block h-0.5 bg-[#B71C1C] mt-2 w-0 animate-underline"></span>
          </p>
          
 
        </div>

      </div>

      <Image
        src="/assets/elipses/hero-car.png"
        alt=""
        width={1200}
        height={500}
        className="
          absolute w-[600px] -bottom-14
          lg:bottom-[-160px] lg:right-[-230px] 
          md:w-[750px] md:right-[-150px] md:bottom-[-100px]
          lg:w-[1200px]  
        "
      />

    </div>
  )
}

export default Hero ;
{/* <Image className='absolute bottom-[-161] right-[-185]' src="/assets/elipses/hero-car.png" width={1200} height={500} alt=''/> */}

{/* <Image className=' absolute bottom-0 right-[-120] overflow-hidden' src="/assets/elipses/Ellipse1.png" width={1000} height={500} alt=''/> */}
{/* <Image  className=' absolute top-[-210] left-[-150]' src="/assets/elipses/Ellipse2.png" width={500} height={500} alt=''/> */}
{/* <Image  className=' absolute bottom-10 left-30' src="/assets/elipses/Ellipse3.png" width={100} height={100} alt=''/> */}
{/* <Image  className=' absolute top-20 left-96' src="/assets/elipses/Ellipse4.png" width={50} height={50} alt=''/> */}
{/* <Image className='absolute  bottom-[-145] right-[-180] overflow-x-hidden' src="/assets/elipses/hero-car.png" width={1070} height={625} alt=''/> */}