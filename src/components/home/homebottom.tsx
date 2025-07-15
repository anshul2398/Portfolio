'use client'
import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google';
const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "700"], // Multiple weights

});

function homebottom() {
    return (
        <div className='l:mt-[5rem]  '>
            <div className='relative l:w-[99rem] w-full h-[40rem] mx-auto hidden l:block'>

                <Image alt='' src='/anotherdevelopment.jpg' layout='fill' className=' rounded-[2.5rem] ' />
            </div>

            <div className='l:mt-[10rem]  flex flex-col l:flex-row items-center l:h-[28.25rem] l:w-[99rem] l:mx-auto   l:rounded-[2.5rem]  l:bg-[#C53D34] bg-[#3F4AE7]'>
                <div className='h-full w-[28.625rem] relative shrink-0 hidden l:block'>
                    <Image alt='' src='/mywork.jpg' layout='fill' className='  rounded-l-[2.5rem]' />
                </div>

                <div className={` h-full text-[1rem] l:text-[1.5rem] font-bold text-[#fff] l:px-14 py-10 flex flex-col justify-between ${IBM_plex_mono.className}`}>
                    <p className=' px-4'> I love challenges, If you have a vision and you want it to become reality. I will take up the job. <br /><br />I have been working as web developer of India’s leading hourly hotels brand for over 3 years now.
                    </p>

                    <div className='h-[28.5rem] w-full  relative shrink-0 block l:hidden my-10'>
                    <Image alt='' src='/mywork.jpg' layout='fill' className='  ' />
                </div>


                    <div className='space-x-20 px-4 flex items-center justify-between'>
                        <a href='/aboutme' className='underline underline-offset-2'  >See my work</a>
                        <a href='/contact' className='underline underline-offset-2'>Contact me</a>



                    </div>

                </div>

            </div>


            <div className='relative l:hidden aspect-[375/369] mt-[9rem]'>
                <Image  layout='fill' alt='Plus ultra web developer' src='/PlusUltra.png'/>

            </div>

            <div className='relative l:hidden  '>
                <Image  width={378} height={378} alt='Super Saiyan web developer' className='w-full h-full object-contain' src='/Gohan.gif'/>

                <Image   alt='Super Saiyan web developer' width={241} height={64} className=' absolute bottom-8 left-1/2 transform -translate-x-1/2   ' src='/ALWAYSLOCKEDIN.png'/>

            </div>
        </div>
    )
}

export default homebottom