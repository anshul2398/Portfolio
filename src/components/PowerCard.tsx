import React from 'react'
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
    return (
        <div className=' relative  h-full pt-[8.25rem] mx-[10.25rem] '>
            <Image src='/powerbackground.png' alt='' layout='fill' className='-z-[1]' />
            <div className='flex items-center justify-center gap-x-8 '>
                <Image src='/powerlines.png' alt='' width={120} height={24} className='shrink-0' />
                <h2 className='font-bold text-[2.25rem] text-black text-center '>My Super Powers</h2>
                <Image src='/powerlines.png' alt='' width={120} height={24} className='shrink-0 rotate-y-180' />

            </div>
            <div className='mx-[3rem]'>


                <div className='flex items-center justify-between mt-28 '>

                    {/*Power Card ReactJs*/}
                    <div className='relative w-[25.6875rem] h-[35.9375rem] perspective-[1000px] group '>
                        <div className='  rounded-[1.25rem] shadow-2xl transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180' style={{
                            transformStyle: 'preserve-3d'
                        }}>



                            <Image src='/assets/powercard/ReactFront.jpg' alt='' layout='fill' className='text-black  rounded-[1.25rem] bg-black backface-hidden
'/>
                            <Image src='/assets/powercard/ReactBack.jpg' alt='' layout='fill' className='rotate-y-180 text-black  rounded-[1.25rem] bg-black backface-hidden
'/>

                        </div>
                    </div>


                    {/*Power Card TailwindCss*/}
                    <div className='relative w-[25.6875rem] h-[35.9375rem] perspective-[1000px] group '>
                        <div className='  rounded-[1.25rem] shadow-2xl transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180' style={{
                            transformStyle: 'preserve-3d'
                        }}>



                            <Image src='/assets/powercard/TailwindFront.jpg' alt='' layout='fill' className='text-black  rounded-[1.25rem] bg-black backface-hidden
'/>
                            <Image src='/assets/powercard/TailwindBack.jpg' alt='' layout='fill' className='rotate-y-180 text-black  rounded-[1.25rem] bg-black backface-hidden
'/>

                        </div>
                    </div>



                    {/*Power Card NextJs*/}
                    <div className='relative w-[25.6875rem] h-[35.9375rem] perspective-[1000px] group '>
                        <div className='  rounded-[1.25rem] shadow-2xl transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180' style={{
                            transformStyle: 'preserve-3d'
                        }}>



                            <Image src='/assets/powercard/NextFront.jpg' alt='' layout='fill' className='text-black  rounded-[1.25rem] bg-black backface-hidden
'/>
                            <Image src='/assets/powercard/NextBack.jpg' alt='' layout='fill' className='rotate-y-180 text-black  rounded-[1.25rem] bg-black backface-hidden
'/>

                        </div>
                    </div>

                </div>

                <div className=' h-1 mt-[5.25rem] w-full' style={{ background: 'linear-gradient(to right, #F6F6F6, #313131, #F6F6F6)' }} />


                {/* Skills  */}

                <div className={`${kumar_one.className} grid grid-cols-3  gap-y-10  mt-[6rem]  ml-12`}>

                    <div className='flex items-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#F7E08C" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[28%]'>
                                <Image alt='react' src='/reactnative.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className='bg-[#3D3D3D] group relative h-[3.875rem] hover:h-[7.3625rem]  -translate-x-[3.25rem] z-[1] transition-all duration-300  shinebtn shinebtn-hover  text-[#F7E08C] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem]' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>REACT</span>
                            <span className={` transition-all ease-in-out opacity-0 group-hover:opacity-100 duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>

                    <div className=' flex items-center    '>

                        <div className='relative z-[2]  '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#B986FF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[26%]
'>
                                <Image alt='react' src='/react.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className=' bg-[#3D3D3D] group h-[3.875rem] hover:h-[7.3625rem] -translate-x-[3.25rem] z-[1] transition-all duration-300  text-[#D0AEFD] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem] relative' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>REDUX</span>
                            <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#F7E08C" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[28%]'>
                                <Image alt='react' src='/reactnative.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className='bg-[#3D3D3D] group relative h-[3.875rem] hover:h-[7.3625rem] -translate-x-[3.25rem] z-[1] transition-all duration-300  text-[#F7E08C] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem]' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>REACT NATIVE</span>
                            <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>


                    <div className='flex items-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#34BDB2" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[29%]
'>
                                <Image alt='react' src='/semantic.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className='bg-[#3D3D3D] group relative h-[3.875rem] hover:h-[7.3625rem] -translate-x-[3.25rem] z-[1] transition-all duration-300  text-[#34BDB2] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem]' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>SEMANTIC UI</span>
                            <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>


                    <div className='flex items-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#30B0FF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[30%]
'>
                                <Image alt='react' src='/materialui.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className='bg-[#3D3D3D] group relative h-[3.875rem] hover:h-[7.3625rem] -translate-x-[3.25rem] z-[1] transition-all duration-300  text-[#30B0FF] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem]' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>MATERIAL UI</span>
                            <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='relative z-[2] '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 120" fill="none" className='w-[6.5rem] h-[9.375rem] shrink-0 '>
                                <path d="M2 31.1551L52 2.30897L102 31.1551V88.8449L52 117.691L2 88.8449V31.1551Z" fill="#302E2E" stroke="#C08FFF" strokeWidth="4" />
                            </svg>
                            <div className='absolute h-[40%] w-[100%] inset-0 top-[29%]
'>
                                <Image alt='react' src='/bootstrap.png' className=' object-scale-down top-0 mix-blend-lighten' layout='fill' />
                            </div>
                        </div>

                        <div className='bg-[#3D3D3D] group relative h-[3.875rem] hover:h-[7.3625rem] -translate-x-[3.25rem] z-[1] transition-all duration-300  text-[#C08FFF] font-normal text-[1.5rem]  w-[22.4375rem] pt-1 flex items-center pl-[3.75rem]' style={{
                            clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        }}>
                            <span className=' opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute '>BOOTSTRAP</span>
                            <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[1.25rem] font-medium leading-[1.5rem] ${IBM_plex_mono.className}`}>I use this library to build react based minimalist interfaces</span>

                        </div>
                    </div>
                </div>


                <div className=' h-1 mt-[6rem] w-full' style={{ background: 'linear-gradient(to right, #F6F6F6, #313131, #F6F6F6)' }} />
            </div>

        </div>
    )
}

export default PowerCard