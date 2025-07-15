'use client'
import React, { useState } from 'react'
import { Kumar_One, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const kumar_one = Kumar_One({
    subsets: ["latin"],
    weight: ["400"], // Multiple weights
});

const IBM_plex_mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500"], // Multiple weights

});
function PowerCard() {
    const [flippedCards, setFlippedCards] = useState({
        react: false,
        tailwind: false,
        nextjs: false
    });

    const [expandedSkills, setExpandedSkills] = useState({
        redux: false,
        reactNative: false,
        nodejs: false,
        semantic: false,
        materialui: false,
        bootstrap: false
    });

    const handleCardClick = (cardName: 'react' | 'tailwind' | 'nextjs') => {
        setFlippedCards(prev => ({
            ...prev,
            [cardName]: !prev[cardName]
        }));
    };

    const handleSkillClick = (skillName: 'redux' | 'reactNative' | 'nodejs' | 'semantic' | 'materialui' | 'bootstrap') => {
        setExpandedSkills(prev => ({
            ...prev,
            [skillName]: !prev[skillName]
        }));
    };
    return (
        <div className=' relative  h-full l:mt-[4.25rem] l:pt-[4rem] l:mx-[8.25rem] pb-[10rem] pt-[10rem]'>
            <Image src='/powerbackground.png' alt='' layout='fill' className='-z-[1] hidden l:block' />
            <Image src='/MobileLineGrid.png' alt='' layout='fill' className='-z-[1] block l:hidden object-contain' />
            


            <div className='l:flex items-center justify-center gap-x-8 hidden '>
                <Image src='/powerlines.png' alt='' width={120} height={24} className='shrink-0' />
                <h2 className='font-bold text-[2.25rem] text-black text-center '>My Super Powers</h2>
                <Image src='/powerlines.png' alt='' width={120} height={24} className='shrink-0 rotate-y-180' />

            </div>
            <div className='flex items-center justify-center gap-x-4 l:hidden '>
                <Image src='/powerlines.png' alt='' width={67} height={13} className='' />
                <h2 className='font-bold text-[1.25rem] text-black text-center shrink-0'>My Super Powers</h2>
                <Image src='/powerlines.png' alt='' width={67} height={13} className=' rotate-y-180' />

            </div>

            <div className='l:mx-[2rem] mx-4'>

                {/*Power Card Main Power*/}
                <div className='flex items-center py-4 l:justify-between w-full mt-20 l:mt-28 l:overflow-x-hidden no-scrollbar overflow-x-scroll flex-nowrap gap-x-4'>

                    {/*Power Card ReactJs*/}
                    <div 
                        className='relative w-[16.3125rem] l:w-[25.6875rem] h-[22.8216247559rem] l:h-[35.9375rem] perspective-[1000px] group shrink-0 cursor-pointer'
                        onClick={() => handleCardClick('react')}
                    >
                        <div 
                            className={`rounded-[1.25rem]  transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180 l:group-hover:rotate-y-180 ${flippedCards.react ? 'rotate-y-180' : ''}`} 
                            style={{
                                transformStyle: 'preserve-3d'
                            }}  
                        >
                            <Image src='/assets/powercard/ReactFront.jpg' alt='' layout='fill' className='  rounded-[1.25rem]  backface-hidden'/>
                            <Image src='/assets/powercard/ReactBack.jpg' alt='' layout='fill' className='rotate-y-180   rounded-[1.25rem] backface-hidden'/>
                        </div>
                    </div>


                    {/*Power Card TailwindCss*/}
                    <div 
                        className='relative w-[16.3125rem] l:w-[25.6875rem] h-[22.8216247559rem] l:h-[35.9375rem] perspective-[1000px] group shrink-0 cursor-pointer'
                        onClick={() => handleCardClick('tailwind')}
                    >
                        <div 
                            className={`rounded-[1.25rem]  transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180 l:group-hover:rotate-y-180 ${flippedCards.tailwind ? 'rotate-y-180' : ''}`} 
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <Image src='/assets/powercard/TailwindFront.jpg' alt='' layout='fill' className='text-black  rounded-[1.25rem] bg-black backface-hidden'/>
                            <Image src='/assets/powercard/TailwindBack.jpg' alt='' layout='fill' className='rotate-y-180 text-black  rounded-[1.25rem] bg-black backface-hidden'/>
                        </div>
                    </div>



                    {/*Power Card NextJs*/}
                    <div 
                        className='relative w-[16.3125rem] l:w-[25.6875rem] h-[22.8216247559rem] l:h-[35.9375rem] perspective-[1000px] group shrink-0 cursor-pointer'
                        onClick={() => handleCardClick('nextjs')}
                    >
                        <div 
                            className={`rounded-[1.25rem]  transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180 l:group-hover:rotate-y-180 ${flippedCards.nextjs ? 'rotate-y-180' : ''}`} 
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <Image src='/assets/powercard/NextFront.jpg' alt='' layout='fill' className='text-black  rounded-[1.25rem] bg-black backface-hidden'/>
                            <Image src='/assets/powercard/NextBack.jpg' alt='' layout='fill' className='rotate-y-180 text-black  rounded-[1.25rem] bg-black backface-hidden'/>
                        </div>
                    </div>

                </div>


                {/*border seperater */}
                <div className=' h-1 mt-[5.25rem] w-full' style={{ background: 'linear-gradient(to right, #F6F6F6, #313131, #F6F6F6)' }} />


                {/* Skills  */}

                <div className={`${kumar_one.className} grid l:grid-cols-3 grid-cols-1  gap-y-10   mt-[6rem]   `}>



                    <div className=' flex items-center   '>

                        <div className='relative z-[2]  '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#B986FF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[26%]
'>
                                <Image alt='react' src='/react.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`shinebtn shinebtn-hover bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 text-[#D0AEFD] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] relative cursor-pointer ${expandedSkills.redux ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('redux')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.redux ? 'opacity-0' : ' opacity-100 '}`}>REDUX</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.redux ? 'opacity-100' : 'opacity-0'}`}> Centralise my states using Redux</span>

                        </div>

                    </div>
                    <div className='flex items-center  justify-end l:justify-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#F7E08C" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[28%]'>
                                <Image alt='react' src='/reactnative.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`shinebtn shinebtn-hover bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 text-[#F7E08C] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] relative cursor-pointer ${expandedSkills.reactNative ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('reactNative')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.reactNative ? 'opacity-0' : ' opacity-100 '}`}>REACT NATIVE</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium l:leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.reactNative ? 'opacity-100' : 'opacity-0'}`}>I build cross‑platform apps with Native</span>

                        </div>
                    </div>

                    <div className='flex items-center l:justify-end '>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#8FCE83" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[50%] w-[100%] inset-0 top-[25%]'>
                                <Image alt='react' src='/nodejs.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 shinebtn shinebtn-hover text-[#8FCE83] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] cursor-pointer ${expandedSkills.nodejs ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('nodejs')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.nodejs ? 'opacity-0' : ' opacity-100 '}`}>NODE JS</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium l:leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.nodejs ? 'opacity-100' : 'opacity-0'}`}>Helps me create fast server side apps</span>

                        </div>
                    </div>


                    <div className='flex items-center l:justify-start justify-end'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#34BDB2" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[29%]
'>
                                <Image alt='react' src='/semantic.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`shinebtn shinebtn-hover bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 text-[#34BDB2] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] cursor-pointer ${expandedSkills.semantic ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('semantic')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.semantic ? 'opacity-0' : ' opacity-100 '}`}>SEMANTIC UI</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium l:leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.semantic ? 'opacity-100' : 'opacity-0'}`}>I use this clean HTML library for intuitive theming</span>

                        </div>
                    </div>


                    <div className='flex items-center  l:justify-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#30B0FF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[30%]
'>
                                <Image alt='react' src='/materialui.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`shinebtn shinebtn-hover bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 text-[#30B0FF] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] cursor-pointer ${expandedSkills.materialui ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('materialui')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.materialui ? 'opacity-0' : ' opacity-100 '}`}>MATERIAL UI</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium l:leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.materialui ? 'opacity-100' : 'opacity-0'}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>

                    <div className='flex items-center justify-end'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='l:w-[6.5rem] l:h-[9.375rem] w-[3.9375rem] h-[4.5625rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#C08FFF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[29%]
'>
                                <Image alt='react' src='/bootstrap.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div 
                            className={`shinebtn shinebtn-hover bg-[#3D3D3D] group l:h-[3.875rem] h-[2.25rem] hover:h-[7.3625rem] l:group-hover:h-[7.3625rem] ml-[-2rem] l:ml-[-3.25rem] z-[1] transition-all duration-300 text-[#C08FFF] font-normal text-[1rem] l:text-[1.5rem] w-[14.7032756805rem] l:w-[22.4375rem] pt-1 flex items-center pl-[2.5rem] l:pl-[3.75rem] cursor-pointer ${expandedSkills.bootstrap ? 'h-[4.4rem]' : ''}`} 
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                            }}
                            onClick={() => handleSkillClick('bootstrap')}
                        >
                            <span className={` transition-opacity duration-300 absolute ${expandedSkills.bootstrap ? 'opacity-0' : ' opacity-100 '}`}>BOOTSTRAP</span>
                            <span className={`transition-opacity duration-300 l:text-[1.25rem] text-[0.875rem] font-medium l:leading-[1.5rem] ${IBM_plex_mono.className} ${expandedSkills.bootstrap ? 'opacity-100' : 'opacity-0'}`}>I use this library to design mobile first websites</span>

                        </div>
                    </div>
                </div>

                {/*border seperater */}

                <div className=' h-1 mt-[6rem] w-full hidden l:block' style={{ background: 'linear-gradient(to right, #F6F6F6, #313131, #F6F6F6)' }} />
            </div>



         

        </div>
    )
}

export default PowerCard