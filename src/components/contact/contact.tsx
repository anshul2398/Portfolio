'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { IBM_Plex_Mono } from "next/font/google";
import ContactMePopup from './ContactMePopup';
import Signal from './Signal';

const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "700"], // Multiple weights

});


function Contact() {

    const [emailpopup, setemailpopup] = useState(false)
    const [signalpopup, setsignalpopup] = useState(false)


    return (
        <div className='w-full h-full '>
            
            <div className='w-[85.375rem] h-full  mx-auto relative mt-[6rem] pt-10 mb-40'>
                <Image src='/powerbackground.png' alt='' layout='fill' className='-z-[1] ' />

                <h1 className='text-[6rem] font-semibold leading-[8rem] text-[#303030] '>Let’s take your idea to<br /> the <span className='font-bold italic'>next</span> level</h1>
                <div className={`${IBM_plex_mono.className}`}>
                    <p className='text-[2rem] font-medium leading-[6rem] text-[#303030] '>CONTACT ME</p>

                    <div className='flex items-center justify-between mt-[7rem]'>

                        <div className='text-[2rem] font-medium text-[#303030] space-y-3'>
                            <a className='flex items-center  ' href='https://www.linkedin.com/in/anshul-sharma23' target='_blank'>
                                <span className='relative group'> LinkedIn
                                    <span className=' absolute w-0 group-hover:w-full transition-width  duration-500 left-0 h-1 bottom-0 bg-[#303030]' />
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ml-3' viewBox="0 0 24 24" fill="none">
                                    <path d="M2 22L22 2" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 2H22V22" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a className='flex items-center  ' href='https://www.instagram.com/anshul.sharma23/' target='_blank'>
                                <span className='relative group'> Instagram
                                    <span className=' absolute w-0 group-hover:w-full transition-width  duration-500 left-0 h-1 bottom-0 bg-[#303030]' />
                                </span> <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ml-3' viewBox="0 0 24 24" fill="none">
                                    <path d="M2 22L22 2" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 2H22V22" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                            <p className='flex items-center cursor-pointer ' onClick={()=>setsignalpopup(true)} >
                                <span className='relative group'> Signal
                                    <span className=' absolute w-0 group-hover:w-full transition-width  duration-500 left-0 h-1 bottom-0 bg-[#303030]' />
                                </span> <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ml-3' viewBox="0 0 24 24" fill="none">
                                    <path d="M2 22L22 2" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 2H22V22" stroke="#303030" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </p>

                        </div>


                        <div className="w-[44rem] h-[5.75rem]  relative  emailrotation text-[1.875rem] font-medium text-[#303030] cursor-pointer" style={{ transformStyle: 'preserve-3d' }} onClick={() => setemailpopup(true)}>
                            <span className="absolute w-full h-full flex items-center justify-between px-9 top-0 left-0 border-[2px] border-[#303030]     transition-transform duration-500 bg-[rgba(255,255,255,1)] ">EMAIL ME <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-4' viewBox="0 0 33 16" fill="none">
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                            </svg></span>
                            <span className="absolute w-full h-full flex items-center justify-between px-9 top-0 left-0 border-[2px] border-[#303030]     transition-transform duration-500 bg-[rgba(255,255,255,0.9)]">EMAIL ME <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-4' viewBox="0 0 33 16" fill="none">
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                            </svg></span>
                            <span className="absolute w-full h-full flex items-center justify-between px-9 top-0 left-0 border-[2px] border-[#303030]     transition-transform duration-500 bg-[rgba(255,255,255,0.9)] ">EMAIL ME <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 16" fill="none" className='w-8 h-4'>
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                            </svg></span>
                            <span className="absolute w-full h-full flex items-center justify-between px-9 top-0 left-0 border-[2px] border-[#303030]     transition-transform duration-500 bg-[rgba(255,255,255,0.9)]">EMAIL ME <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 16" fill="none" className='w-8 h-4'>
                                <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                            </svg></span>

                        </div>

                    </div>
                </div>



                <Image alt='' src='/contact.jpg' width={1366} height={487} className='mx-auto mt-[10rem]' />

            </div>
            {emailpopup ? 
            <ContactMePopup setemailpopup={setemailpopup} IBM_plex_mono={IBM_plex_mono}/>
           
            
        :null}
        {signalpopup ? 
         <Signal setsignalpopup={setsignalpopup} IBM_plex_mono={IBM_plex_mono}/>
           
            
        :null}
        </div>
    )
}

export default Contact