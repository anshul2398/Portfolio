'use client'
import React from 'react'
import { IBM_Plex_Mono } from "next/font/google";

const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "700"], // Multiple weights

});

function aboutText() {
    return (
        <div>
            {/* About me section */}

            <div className='absolute  top-[5%]  right-[15%] -z-[1]'>

                <div className='relative w-[42.5rem] h-full  '>
                    <img src='/aboutborder.png' className='absolute top-0 left-0' /> {/* Border for element */}
                    <img src='/aboutborderbottom.png' className='absolute bottom-0 right-0' />

                    {/* About me text paragraph */}
                    <div className='px-12 pt-12 pb-10'>
                        <h2 className='font-bold text-[1.5rem] text-[#303030]'>Built Different</h2>
                        <p className={` ${IBM_plex_mono.className} mt-8 font-medium text-[1.5rem] text-[#303030] ;eading-[1.875rem]`}>Powered by caffeine, code, and the burning spirit of anime protagonists I'm Anshul, a web developer with 4 years of experience. Ready to level up your online presence. (May occasionally use otaku catchphrases while debugging. It's part of the charm.)</p>
                    </div>
                </div>
                {/* About me Bullet points */}
                <div className={` ${IBM_plex_mono.className} font-medium text-[#303030] text-[1.25rem] mt-[4rem] pl-10 flex items-center space-x-10`} >
                    <div className=' flex items-start flex-col space-y-10 '>
                        <p>Bounty on my head:</p>
                        <p>Bugs I have killed: </p>
                        <p>My bench-press PR :</p>
                        <p>My Dead-lift PR :</p>

                    </div>
                    <div className=' flex items-start flex-col space-y-10 '>
                        <p>Nothing, Everybody loves me</p>
                        <p>I can’t, They save my job</p>
                        <p>100 KG</p>
                        <p>200 KG</p>

                    </div>

                </div>

            </div>

            {/* About me details section */}

            <div className={` mt-40 mx-[21rem] text-[1.25rem] font-medium text-[#303030] space-y-8 ${IBM_plex_mono.className}`}>

                <p className='text-[#AAAAAA] text-[1rem]'>{"<HTML>"}</p>
                <p className='text-[#AAAAAA] text-[1rem]'>{"<BODY>"}</p>
                <p className='text-[#AAAAAA] text-[1rem]'>{"<DIV>"}</p>
                <p className='text-[#AAAAAA] text-[1rem]'>{"<P>"}</p>

                <p className='leading-[1.75rem] '>I have been working at Brevistay for past 3 years, Brevistay is India’s leading hourly hotels brand.I am responsible for <span className='font-bold'>100%</span> of their website development</p>
                <p className='text-[#AAAAAA] text-[1rem]'>{"</P>"}</p>

                <p className='text-[#AAAAAA] text-[1rem]'>{"<UL>"}</p>

                <ul className='list-disc list-inside space-y-8 font-bold'>
                    <p className='font-medium'>which includes</p>

                    <li className='mt-8'>Brevistay’s Desktop Website
                    </li>
                    <li className=''>Brevistay’s Mobile Website
                    </li>
                    <li className=''>Holida’s Desktop Website
                    </li>
                    <li className=''>Holida’s Mobile Website
                    </li>
                    <li className=''>Webview for both products
                    </li>
                    <li className=''>A Bunch of Brevistay’s Game tournament w ebsites over the years
                    </li>
                </ul>

                <p className='text-[#AAAAAA] text-[1rem]'>{"</UL>"}</p>
                <p className='text-[#AAAAAA] text-[1.25rem]'>
                    {'<a href="'}
                    <a
                        href='https://www.brevistay.com/'
                        target='_blank'
                        className='underline underline-offset-2 text-[#303030]'
                    >
                        www.brevistay.com
                    </a>
                    {'"> click this link to visit Brevistay </a>'}
                </p>

                <p className='text-[#AAAAAA] text-[1rem]'>{"<UL>"}</p>

                <ul className='list-disc list-inside space-y-8 font-bold'>
                    <p className='font-medium'>Over 3 years I have worked on</p>

                    <li className='mt-8'>Building & Managing Complete Front-end code
                    </li>
                    <li className=''>Deploying and Managing Website
                    </li>
                    <li className=''>Training Juniors under me
                    </li>
                    <li className=''>Collaborating with Marketing and SEO team to boost website’s performance and impressions
                    </li >
                    <li className=''>Working closely with Designer to im p rove websit e ’s quality
                    </li>

                </ul>

                <p className='text-[#AAAAAA] text-[1rem]'>{"</UL>"}</p>

                <p className='text-[#AAAAAA] text-[1rem]'>{"</DIV>"}</p>
                <p className='text-[#AAAAAA] text-[1rem]'>{"</BODY>"}</p>

                <p className='text-[#AAAAAA] text-[1rem]'>{"</HTML>"}</p>


            </div>


            <div className={` mt-28 mx-[21rem] p-10 space-x-10  text-[1.25rem] flex items-center justify-between font-bold text-[#303030]  border-[2px] border-[#303030] ${IBM_plex_mono.className}`}>
                <p>Intrigued with my skills and experience? Let’s have a chat then</p>
                <a href="#"
                    className="group flex items-center  shrink-0 justify-between w-[11.6875rem] px-3 h-11 text-[#303030] no-underline border-[2px] rounded-[0.25rem] border-[#3030330]">
                    <span className="relative overflow-hidden h-8">
                        <div className="transition-transform duration-[400ms] group-hover:-translate-y-[1.875rem]">
                            <span className="block text-[1.25rem] transition-transform duration-[400ms] origin-right font-medium">
                                Email Me
                            </span>
                            <span className="font-medium block text-[1.25rem]  transition-transform duration-[400ms] origin-left rotate-[20deg] group-hover:rotate-0">
                                Email Me
                            </span>
                        </div>
                    </span>
                    <div className="relative  w-8 h-4 flex justify-center items-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute transition-transform duration-[400ms] group-hover:translate-x-[40px]' viewBox="0 0 33 16" fill="none">
                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute -translate-x-[40px] transition-transform duration-[400ms] group-hover:translate-x-0' viewBox="0 0 33 16" fill="none">
                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#303030" />
                        </svg>


                    </div>
                </a >
            </div >


            <div className={` pb-40 border-t-[2px] border-[#303030] mx-[21rem] mt-14`}>

            </div>
        </div >
    )
}


export default aboutText;