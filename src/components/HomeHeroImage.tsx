import React from 'react'
import Image from 'next/image'
import { Anybody, IBM_Plex_Mono } from 'next/font/google'

const anybody = Anybody({
    subsets: ["latin"],
    weight: ["700"], // Multiple weights
    style: ["normal", "italic"]
});
const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500"], // Multiple weights

});

function HomeHeroImage() {
    return (
        <div className="relative aspect-[1920/787] ">
            <Image src='/WebDeveloper.jpg' alt='Anshul Web Developer' layout="fill"  />
            <div className={` absolute bottom-[5rem] ml-[3.375rem] z-1`} >
                <span className={`${anybody.className} text-white italic  text-[2.25rem] w-[24.375rem] font-bold `}>I am a web designer</span>
                <p className={`${IBM_plex_mono.className} text-white text-[1.25rem] leading-[1.625rem] w-[24.3125rem] font-medium`}>I have been building webs on<br />internet for past 4 years, that has caught lot’s of <span className='line-through'>preys</span> customers</p>

                <button className={`${IBM_plex_mono.className} flex items-center mt-5 font-medium text-black px-5 text-[1rem] bg-white rounded-[0.5rem] h-[2.25rem] leading-[1.25rem]`}>Hire me <svg viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[2rem] h-3 ml-3'>
                    <path d="M32.5303 6.53033C32.8232 6.23744 32.8232 5.76256 32.5303 5.46967L27.7574 0.696699C27.4645 0.403806 26.9896 0.403806 26.6967 0.696699C26.4038 0.989592 26.4038 1.46447 26.6967 1.75736L30.9393 6L26.6967 10.2426C26.4038 10.5355 26.4038 11.0104 26.6967 11.3033C26.9896 11.5962 27.4645 11.5962 27.7574 11.3033L32.5303 6.53033ZM0 6.75H32V5.25H0V6.75Z" fill="black" />
                </svg></button>

            </div>

            <div className='absolute -bottom-20 h-[16.875rem] w-full' style={{background: 'linear-gradient(180deg, rgba(246, 246, 246, 0.00) 0%, rgba(253, 253, 253, 0.63) 60.12%, rgba(254, 254, 254, 0.84) 72.07%, #FFF 86.08%)'
}}>
            </div>
        </div>
    )
}

export default HomeHeroImage