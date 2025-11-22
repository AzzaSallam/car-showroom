'use client'
import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from 'react-i18next';



const Footer = () => {

  const {t , i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className='bg-gray-950 text-gray-100 mt-12 sm:mt-16 md:mt-20 lg:mt-24' dir={isRTL ? 'rtl' : 'ltr'}>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-6 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16'>
    
        {/* Logo Section */}
        <div className='text-center'>
          <div className='flex justify-center mb-3 sm:mb-4'>
            <Image 
              className='bg-gray-200 rounded-full' 
              src='/assets/logo.png' 
              width={60} 
              height={60} 
              alt='عربيتك موتورز'
            />
          </div>
          <h4 className='text-red-500 text-lg sm:text-xl font-semibold'>{t("footer.brand")}</h4>
        </div>
    
        {/* Contact Section */}
        <div className={`text-center max-w-md ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <h4 className='text-red-500 text-lg sm:text-xl font-semibold mb-3 sm:mb-4'>{t("footer.contact_us")}</h4>
    
          <p className={`flex sm:flex-row items-center ${isRTL ? 'justify-center md:justify-start' : 'justify-center md:justify-start'} gap-2 mb-3 sm:mb-4 text-sm sm:text-base`}>
            <FaPhoneAlt className='text-red-500' />
            <span>{isRTL ? '1002354425(+20)' : '(+20)1002354425'}</span>
            <span className='inline text-red-500'>|</span>
            <span>{isRTL ? '1222402258(+20)' : '(+20)1222402258'}</span>
          </p>
    
          <p className={`flex sm:flex-row items-start ${isRTL ? 'justify-center md:justify-end' : 'justify-center md:justify-start'} gap-2 text-sm sm:text-base`}>
            <span className='flex-shrink-0'>
              <IoLocation className='text-red-500' size={20} />
            </span>
            <span className={`${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
              {t("footer.location")}
            </span>
          </p>
        </div>
    
        {/* Social Media Section */}
        <div className='text-center'>
          <h4 className='text-red-500 text-lg sm:text-xl font-semibold mb-3 sm:mb-4'>{t("footer.follow_us")}</h4>
          <div className='flex items-center justify-center gap-6 sm:gap-8'>
            <a 
              href="https://www.facebook.com/profile.php?id=61568360861145&locale=ar_AR" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:scale-110 transition-transform duration-300'
            >
              <FaFacebookSquare size={28} className='hover:text-blue-500'/>
            </a>
    
            <a 
              href="https://wa.me/201222402258" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:scale-110 transition-transform duration-300'
            >
              <IoLogoWhatsapp size={28} className='hover:text-green-400'/>
            </a>
          </div>
        </div>
    
      </div>
    
      {/* Copyright Bar */}
      <div className='border-t border-gray-800 py-4 text-center text-xs sm:text-sm text-gray-400'>
        <p>© {new Date().getFullYear()} {t("name")} {t("footer.rights")}</p>
      </div>
    </footer>
  )
}

export default Footer