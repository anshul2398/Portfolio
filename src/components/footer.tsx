'use client'
import React from 'react'
import Image from 'next/image'
import { IBM_Plex_Mono } from 'next/font/google';
const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "700"], // Multiple weights

});

function Footer() {
    return (
        <div className=' bg-[#303030] flex flex-col items-center pt-16  pb-20'>

            <Image alt='' className='hidden l:block' src='/ANSHUL.png' width={265} height={117} />
            <Image alt='' className='block l:hidden' src='/ANSHUL.png' width={209} height={93} />

            <p className={`${IBM_plex_mono.className} text-[0.875rem] l:text-[1.25rem] font-medium text-[#fff] mt-14`}>MADE with {'<'}3 using NextJs</p>

            <div className='flex items-center l:space-x-[10rem] space-x-28 mt-20 l:scale-100 scale-50'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className='w-5 h-5'>
                    <path d="M18.5 0L22.2413 14.7587L37 18.5L22.2413 22.2413L18.5 37L14.7587 22.2413L0 18.5L14.7587 14.7587L18.5 0Z" fill="#D9D9D9" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className='w-7 h-7'>
                    <path d="M18.5 0L22.2413 14.7587L37 18.5L22.2413 22.2413L18.5 37L14.7587 22.2413L0 18.5L14.7587 14.7587L18.5 0Z" fill="#D9D9D9" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className='w-9 h-9'>
                    <path d="M18.5 0L22.2413 14.7587L37 18.5L22.2413 22.2413L18.5 37L14.7587 22.2413L0 18.5L14.7587 14.7587L18.5 0Z" fill="#D9D9D9" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className='w-7 h-7'>
                    <path d="M18.5 0L22.2413 14.7587L37 18.5L22.2413 22.2413L18.5 37L14.7587 22.2413L0 18.5L14.7587 14.7587L18.5 0Z" fill="#D9D9D9" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className='w-5 h-5'>
                    <path d="M18.5 0L22.2413 14.7587L37 18.5L22.2413 22.2413L18.5 37L14.7587 22.2413L0 18.5L14.7587 14.7587L18.5 0Z" fill="#D9D9D9" />
                </svg>

               
            </div>
        </div>
    )
}

export default Footer