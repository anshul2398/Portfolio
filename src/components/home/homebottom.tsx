'use client'
import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google';
const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500","700"], // Multiple weights

});

function homebottom() {
    return (
        <div className='mt-[5rem]'>

            <Image alt='' src='/anotherdevelopment.jpg' width={1584} height={640} className='mx-auto rounded-[2.5rem]' />


            <div className='mt-[10rem] flex items-center h-[28.25rem] w-[99rem] mx-auto rounded-[2.5rem]  bg-[#C53D34]'>
                <div className='h-full w-[28.625rem] relative shrink-0'>
                    <Image alt='' src='/mywork.jpg' layout='fill' className='  rounded-l-[2.5rem]' />
                </div>

                <div className={` h-full text-[1.5rem] font-bold text-[#fff] px-14 py-10 flex flex-col justify-between ${IBM_plex_mono.className}`}>
             <p> I love challenges, If you have a vision and you want it to become reality. I will take up the job. <br/><br/>I have been working as web developer of India’s leading hourly hotels brand for over 3 years now.
             </p>

             <div className='space-x-20'>
                <a href='/aboutme' className='underline underline-offset-2'  >See my work</a>
                <a href='/contact' className='underline underline-offset-2'>Contact me</a>

               

             </div>

                </div>

            </div>
        </div>
    )
}

export default homebottom