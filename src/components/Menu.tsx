'use client'
import React, { useEffect, useRef, useState } from 'react'

function Menu() {

    const [open, setOpen] = useState(false)
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            popupRef.current &&
            !popupRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        // Main div making whole element fix at one place
        <div className=' fixed bottom-[5%]  w-[5.875rem] left-1/2 -translate-x-[50%] h-[6rem] cursor-pointer  z-[10]'>


            {/* This div contains all the menu options and their relative position */}
            <div className='relative      w-full h-full z-10' >
                <div className='w-[50%] h-[50%] left-[26%]  top-[26%] absolute z-[9] rounded-[1.5rem] circle-animation  '></div> {/* This div is for the circle animation */}


                {/* This div contains the main menu button at the center */}
                <div style={{ background: 'linear-gradient(180deg, #535353 0%, #000 100%)' }} className={`  transition-all duration-1000  rounded-[1.5rem]   h-full w-full  fixed z-10 p-0.5`} ref={buttonRef} onClick={() => setOpen((prev) => !prev)}>
                    <div style={{ background: 'linear-gradient(180deg, #393939 0%, #202020 100%)' }} className='w-full h-full rounded-[1.5rem]' >
                        <div className={`  ${open ? ' rotate-180  ' : ''}  transition-all duration-500 flex flex-col items-center justify-center space-y-3 h-full py-6 px-5 `}>
                            <div style={{ boxShadow: '0px 2px 4px 0px rgba(254, 254, 254, 0.63) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.25)' }} className={` ${open ? ' rotate-45 translate-y-[250%]' : ''} transition-all duration-500 w-full h-2 bg-[#e3e3e3] rounded-[3px]`} />

                            <div style={{ boxShadow: '0px 2px 4px 0px rgba(254, 254, 254, 0.63) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.25)' }} className={`${open ? ' opacity-0 ' : ''} transition-all duration-500  w-full h-2  bg-[#e3e3e3] rounded-[3px]`} />

                            <div style={{ boxShadow: '0px 2px 4px 0px rgba(254, 254, 254, 0.63) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.25)' }} className={` ${open ? ' -rotate-45  -translate-y-[290%] ' : ''} transition-all duration-500 w-full h-2 bg-[#e3e3e3] rounded-[3px]`} />
                        </div>
                    </div>
                </div>

                {/* These are the menu options */}
                {/* About Navigation div */}
                <div ref={popupRef} >
                    <div className={`${open ? ' -translate-y-[150%]  ' : ' invisible   scale-50'} shinebtn1 shinebtn1-hover z-[5]    transition-all duration-500 ease-out absolute  w-[5rem] left-1/2 -translate-x-[54%] rounded-[1.5rem] h-[5rem]  cursor-pointer active:scale-90 `} onClick={() => window.open('/aboutme', '_self')}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 84 84" fill="none" >
                            <rect x="0.5" y="0.5" width="83" height="83" rx="19.5" fill="url(#paint0_linear_12865_21)" stroke="url(#paint1_linear_12865_21)" />
                            <g filter="url(#filter0_i_12865_21)">
                                <path d="M55.3539 32.4295H47.6818V24.7574L55.3539 32.4295Z" fill="#B3B3B3" stroke="#AAAAAA" stroke-width="1.36364" />
                                <path d="M47 23.1113V33.1113H57" fill="#B3B3B3" />
                                <path d="M47 23.1113V33.1113H57" stroke="#AAAAAA" stroke-width="2.72727" stroke-miterlimit="10" />
                                <path d="M48.2582 23.1113H27V59.778H57V32.2645L48.2582 23.1113Z" fill="#525252" stroke="url(#paint2_linear_12865_21)" stroke-width="1.36364" stroke-miterlimit="10" stroke-linecap="square" />
                                <path d="M33.667 33.1113H40.3337" stroke="#AAAAAA" stroke-width="2.72727" stroke-miterlimit="10" stroke-linecap="square" />
                                <path d="M33.667 41.4443H50.3337" stroke="#AAAAAA" stroke-width="2.72727" stroke-miterlimit="10" stroke-linecap="square" />
                                <path d="M33.667 49.7783H50.3337" stroke="#AAAAAA" stroke-width="2.72727" stroke-miterlimit="10" stroke-linecap="square" />
                            </g>
                            <defs>
                                <filter id="filter0_i_12865_21" x="26.3184" y="22.4297" width="31.3633" height="43.4848" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="5.45455" />
                                    <feGaussianBlur stdDeviation="2.72727" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12865_21" />
                                </filter>
                                <linearGradient id="paint0_linear_12865_21" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#363636" />
                                    <stop offset="1" stop-color="#212121" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_12865_21" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#525252" />
                                    <stop offset="1" stop-color="#0B0B0B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_12865_21" x1="42" y1="23.1113" x2="42" y2="59.778" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.125808" stop-color="#212121" />
                                    <stop offset="1" stop-color="#AAAAAA" />
                                </linearGradient>
                            </defs>
                        </svg>


                    </div>

                    {/* Home Navigation div */}
                    <div className={`${open ? ' -translate-x-[149%] -translate-y-[51%] ' : ' invisible  scale-50'} shinebtn1 shinebtn1-hover z-[5] transition-all duration-500 ease-out absolute  w-[5rem] left-0 rounded-[1.5rem] h-[5rem]   cursor-pointer active:scale-90 `} onClick={() => window.open('/', '_self')}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 84 84" fill="none" >
                            <rect x="0.5" y="0.5" width="83" height="83" rx="19.5" fill="url(#paint0_linear_12865_16)" stroke="url(#paint1_linear_12865_16)" />
                            <g filter="url(#filter0_i_12865_16)">
                                <path d="M23 37.467C23 35.8743 23.7588 34.3769 25.0432 33.435L39.0432 23.1683C40.8031 21.8777 43.1969 21.8777 44.9568 23.1683L58.9568 33.435C60.2412 34.3769 61 35.8743 61 37.467V54C61 56.7614 58.7614 59 56 59H28C25.2386 59 23 56.7614 23 54V37.467Z" fill="#525252" />
                            </g>
                            <path d="M23.5 37.467C23.5 36.0336 24.1829 34.6859 25.3389 33.8382L39.3389 23.5715C40.9228 22.41 43.0772 22.41 44.6611 23.5715L58.6611 33.8382C59.8171 34.6859 60.5 36.0336 60.5 37.467V54C60.5 56.4853 58.4853 58.5 56 58.5H28C25.5147 58.5 23.5 56.4853 23.5 54V37.467Z" stroke="url(#paint2_linear_12865_16)" />
                            <g filter="url(#filter1_d_12865_16)">
                                <path d="M42 36L44.1607 41.8393L50 44L44.1607 46.1607L42 52L39.8393 46.1607L34 44L39.8393 41.8393L42 36Z" fill="#AAAAAA" />
                            </g>
                            <defs>
                                <filter id="filter0_i_12865_16" x="23" y="22.2002" width="40" height="38.7998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="2" dy="2" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12865_16" />
                                </filter>
                                <filter id="filter1_d_12865_16" x="30" y="32" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12865_16" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12865_16" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_12865_16" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#363636" />
                                    <stop offset="1" stop-color="#212121" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_12865_16" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#525252" />
                                    <stop offset="1" stop-color="#0B0B0B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_12865_16" x1="42" y1="21" x2="42" y2="59" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.274613" stop-color="#212121" />
                                    <stop offset="1" stop-color="#AAAAAA" />
                                </linearGradient>
                            </defs>
                        </svg>


                    </div>

                    {/* Contact Navigation div */}
                    <div className={`${open ? ' translate-x-[150%] -translate-y-[50%] ' : ' invisible  scale-50'}  shinebtn1 shinebtn1-hover z-[5] transition-all duration-500 ease-out absolute w-[5rem] right-0  rounded-[1.5rem] h-[5rem]  cursor-pointer active:scale-90`} onClick={() => window.open('/contact', '_self')}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 84 84" fill="none">
                            <rect x="0.5" y="0.5" width="83" height="83" rx="19.5" fill="url(#paint0_linear_12865_30)" stroke="url(#paint1_linear_12865_30)" />
                            <path d="M25.5175 31.5004V31.5C25.5175 29.8479 26.8544 28.5 28.5 28.5H56.5C58.1489 28.5 59.5 29.8511 59.5 31.5V52.5C59.5 54.1489 58.1489 55.5 56.5 55.5H28.5C26.8512 55.5 25.5001 54.149 25.5 52.5002C25.5 52.5001 25.5 52.5001 25.5 52.5L25.5175 31.5004ZM56.765 35.424L57 35.2771V35V31.5V30.5979L56.235 31.076L42.5 39.6604L28.765 31.076L28 30.5979V31.5V35V35.2771L28.235 35.424L42.235 44.174L42.5 44.3396L42.765 44.174L56.765 35.424Z" fill="#5C5C5C" stroke="url(#paint2_linear_12865_30)" />
                            <defs>
                                <linearGradient id="paint0_linear_12865_30" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#363636" />
                                    <stop offset="1" stop-color="#212121" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_12865_30" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#525252" />
                                    <stop offset="1" stop-color="#0B0B0B" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_12865_30" x1="42.5" y1="28" x2="42.5" y2="56" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#212121" />
                                    <stop offset="1" stop-color="#AAAAAA" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>




        </div >
    )
}

export default Menu