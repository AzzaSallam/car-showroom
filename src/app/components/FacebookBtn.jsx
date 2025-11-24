'use client';
import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'react-i18next';

const FacebookBtn = () => {

    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    // Function to handle Facebook redirection
    function goToFacebook() {
        window.open("https://www.facebook.com/profile.php?id=61568360861145", "_blank");
    }


    return (
        <button
            onClick={goToFacebook}
            className={`fixed bottom-28 w-[76px] h-[76px] rounded-full flex items-center justify-center bg-[#EBE8E033] z-30 ${isRTL ? 'right-4' : 'left-4'}`}
            >
                <Image src='/assets/icons/FaceLogo.png' alt='Facebook' width={100} height={100}  className='w-[65%] h-[65%]'/>
        </button>
      )
}

export default FacebookBtn;