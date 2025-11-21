'use client';
import Image from 'next/image';
import React from 'react'

const WhatsAppBtn = () => {

    // Function to handle WhatsApp redirection
    function sendToWhatsApp() {
        window.open("https://wa.me/201222402258", "_blank");
    }


    return (
        <button
            onClick={sendToWhatsApp}
            className="fixed bottom-8 right-4 w-[76px] h-[76px] rounded-full flex items-center justify-center bg-[#EBE8E033] z-30"
            >
                <span className='absolute w-3 h-3 rounded-full bg-[#F52338] top-4 right-5'></span>
                <Image src='/assets/icons/whatsapp.png' alt='WhatsApp' width={100} height={100}  className='w-[65%] h-[65%]'/>
        </button>
      )
}

export default WhatsAppBtn;