'use client';
import Image from 'next/image';
import React from 'react'

const FacebookBtn = () => {

    // Function to handle WhatsApp redirection
    function goToFacebook() {
        window.open("https://www.facebook.com/profile.php?id=61568360861145", "_blank");
    }


    return (
        <button
            onClick={goToFacebook}
            className="fixed bottom-28 right-4 w-[76px] h-[76px] rounded-full flex items-center justify-center bg-[#EBE8E033] z-30"
            >
                <Image src='/assets/icons/FaceLogo.png' alt='WhatsApp' width={100} height={100}  className='w-[65%] h-[65%]'/>
        </button>
      )
}

export default FacebookBtn;