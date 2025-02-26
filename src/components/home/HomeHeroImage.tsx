'use client'
import React, { useEffect, useState } from 'react'
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

    const [popup, setpopup] = useState(false)

    useEffect(() => {
        const tipButtons = document.querySelectorAll(".tip-button");

        tipButtons.forEach((button: any) => {
            let coin: any = button.querySelector(".coin");
            if (!coin) return;

            coin.maxMoveLoopCount = 90;

            button.addEventListener("click", () => {
                if (button.clicked) return;

                button.classList.add("clicked");

                setTimeout(() => {
                    coin.sideRotationCount = Math.floor(Math.random() * 5) * 90;
                    coin.maxFlipAngle = (Math.floor(Math.random() * 4) + 3) * Math.PI;
                    button.clicked = true;
                    flipCoin();
                }, 50);
            });

            const flipCoin = () => {
                coin.moveLoopCount = 0;
                flipCoinLoop();
            };

            const resetCoin = () => {
                coin.style.setProperty("--coin-x-multiplier", 0);
                coin.style.setProperty("--coin-scale-multiplier", 0);
                coin.style.setProperty("--coin-rotation-multiplier", 0);
                coin.style.setProperty("--shine-opacity-multiplier", 0.4);
                coin.style.setProperty("--shine-bg-multiplier", "50%");
                coin.style.setProperty("opacity", 1);

                setTimeout(() => {
                    button.clicked = false;
                }, 300);
            };

            const flipCoinLoop = () => {
                coin.moveLoopCount++;
                let percentageCompleted = coin.moveLoopCount / coin.maxMoveLoopCount;
                coin.angle =
                    -coin.maxFlipAngle * Math.pow(percentageCompleted - 1, 2) +
                    coin.maxFlipAngle;

                coin.style.setProperty(
                    "--coin-y-multiplier",
                    -11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11
                );
                coin.style.setProperty("--coin-x-multiplier", percentageCompleted);
                coin.style.setProperty(
                    "--coin-scale-multiplier",
                    percentageCompleted * 0.6
                );
                coin.style.setProperty(
                    "--coin-rotation-multiplier",
                    percentageCompleted * coin.sideRotationCount
                );

                coin.style.setProperty(
                    "--front-scale-multiplier",
                    Math.max(Math.cos(coin.angle), 0)
                );
                coin.style.setProperty("--front-y-multiplier", Math.sin(coin.angle));

                coin.style.setProperty(
                    "--middle-scale-multiplier",
                    Math.abs(Math.cos(coin.angle))
                );
                coin.style.setProperty(
                    "--middle-y-multiplier",
                    Math.cos((coin.angle + Math.PI / 2) % Math.PI)
                );

                coin.style.setProperty(
                    "--back-scale-multiplier",
                    Math.max(Math.cos(coin.angle - Math.PI), 0)
                );
                coin.style.setProperty(
                    "--back-y-multiplier",
                    Math.sin(coin.angle - Math.PI)
                );

                coin.style.setProperty(
                    "--shine-opacity-multiplier",
                    4 * Math.sin((coin.angle + Math.PI / 2) % Math.PI) - 3.2
                );
                coin.style.setProperty(
                    "--shine-bg-multiplier",
                    -40 * (Math.cos((coin.angle + Math.PI / 2) % Math.PI) - 0.5) + "%"
                );

                if (coin.moveLoopCount < coin.maxMoveLoopCount) {
                    if (coin.moveLoopCount === coin.maxMoveLoopCount - 6)
                        button.classList.add("shrink-landing");
                    window.requestAnimationFrame(flipCoinLoop);
                } else {
                    button.classList.add("coin-landed");
                    coin.style.setProperty("opacity", 0);
                    setTimeout(() => {
                        button.classList.remove("clicked", "shrink-landing", "coin-landed");
                        setTimeout(() => {
                            resetCoin();
                        }, 300);
                    }, 1500);
                }
            };
        });
    }, []);

    return (
        <div>
            <div className="relative aspect-[1920/787] z-[10] ">
                <Image src='/WebDeveloper.png' alt='Anshul Web Developer' layout="fill" />
                <div className={` absolute bottom-[5rem] ml-[3.375rem] z-1`} >
                    <span className={`${anybody.className} text-white italic  text-[2.25rem] w-[24.375rem] font-bold `}>I am a web designer</span>
                    <p className={`${IBM_plex_mono.className} text-white text-[1.25rem] leading-[1.625rem] w-[24.3125rem] font-medium`}>I have been building webs on<br />internet for past 4 years, that has caught lot’s of <span className='line-through'>preys</span> customers</p>



                    <button className={`tip-button mt-5 ${IBM_plex_mono.className}`} onClick={() => {
                        setTimeout(() => {
                            setpopup(true)

                        }, 1300);
                    }}>
                        <span className="tip-button__text text-[1.25rem]">Hire Me</span>
                        <div className="coin-wrapper">
                            <div className="coin">
                                <div className="coin__middle"></div>
                                <div className="coin__back">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='w-full h-full'>
                                        <circle cx="16" cy="16" r="16" fill="#3064B3" />
                                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_12961_31)" />
                                        <g filter="url(#filter0_d_12961_31)">
                                            <path d="M14.8483 9.49393C13.8719 11.9184 14.3995 14.803 16.4077 16.7309C17.3588 17.6471 18.563 18.2567 19.8645 18.4809C21.166 18.7051 22.5048 18.5335 23.7076 17.9883C24.4018 17.6819 25.0633 18.4791 24.6684 19.1269C24.3801 19.596 24.0471 20.033 23.6529 20.4436C20.4776 23.7512 15.0929 23.6514 12.047 20.0571L11.8819 19.8117C11.2973 18.9428 10.847 17.9909 10.5461 16.9878C9.88703 14.7911 10.2933 12.4125 11.6442 10.5591L11.7188 10.4567C12.2823 9.68966 12.9478 9.06392 13.6769 8.57476C14.3026 8.1594 15.1264 8.79888 14.8483 9.49393Z" fill="#D9E8FF" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_12961_31" x="7.23633" y="5.44336" width="20.5508" height="20.3984" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="1.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12961_31" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12961_31" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_12961_31" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.166542" stop-color="#89B8FF" />
                                                <stop offset="0.496249" stop-color="#2F64B3" />
                                                <stop offset="0.755806" stop-color="#79A9F1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="coin__front">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className='w-full h-full'>
                                        <circle cx="16" cy="16" r="16" fill="#D3CA77" />
                                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_12961_27)" />
                                        <g filter="url(#filter0_d_12961_27)">
                                            <path d="M11.7127 10.526L10.24 9.05479L9.08636 10.2137L10.5509 11.6849L11.7127 10.526ZM9.45455 15.1781H7V16.8219H9.45455V15.1781ZM16.8182 7H15.1818V9.42466H16.8182V7ZM22.9136 10.2137L21.76 9.05479L20.2955 10.526L21.4491 11.6849L22.9136 10.2137ZM20.2873 21.474L21.7518 22.9534L22.9055 21.7945L21.4327 20.3233L20.2873 21.474ZM22.5455 15.1781V16.8219H25V15.1781H22.5455ZM16 11.0685C13.2918 11.0685 11.0909 13.2795 11.0909 16C11.0909 18.7205 13.2918 20.9315 16 20.9315C18.7082 20.9315 20.9091 18.7205 20.9091 16C20.9091 13.2795 18.7082 11.0685 16 11.0685ZM15.1818 25H16.8182V22.5753H15.1818V25ZM9.08636 21.7863L10.24 22.9452L11.7045 21.4658L10.5509 20.3068L9.08636 21.7863Z" fill="url(#paint1_linear_12961_27)" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_12961_27" x="3" y="3" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12961_27" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12961_27" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_12961_27" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.166542" stop-color="#F6FF89" />
                                                <stop offset="0.496249" stop-color="#C5CC6E" />
                                                <stop offset="0.841805" stop-color="#F6FF8B" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_12961_27" x1="16" y1="7" x2="16" y2="25" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.267735" stop-color="#FCFFDF" />
                                                <stop offset="0.483253" stop-color="#F9FFB2" />
                                                <stop offset="0.775158" stop-color="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>



                </div>

                <div className='absolute -bottom-20 h-[16.875rem] w-full ' style={{
                    background: 'linear-gradient(180deg, rgba(246, 246, 246, 0.00) 0%, rgba(253, 253, 253, 0.63) 60.12%, rgba(254, 254, 254, 0.84) 72.07%, #FFF 86.08%)'
                }}>
                </div>
            </div>
            {popup ?
                // <div className='fixed w-full h-full  top-0 left-0 z-[50]  '  >
                //     <div className='absolute w-full h-full bg-black/50' onClick={() => setpopup(false)} />

                //     <div className='flex items-center justify-center mt-28 '>

                //         {/*Power Card ReactJs*/}
                //         <div className='relative w-[25.6875rem] h-[35.9375rem] perspective-[62.5rem] group '>
                //             <div className='  rounded-[1.25rem]  transition-transform duration-600 inset-0  relative w-full h-full  group-hover:-rotate-y-90 group-hover:-translate-z-[12.525rem] group-hover:-translate-x-[3rem] -translate-z-[8rem]' style={{
                //                 transformStyle: 'preserve-3d'
                //             }}>



                //                 <Image src='/HirePopupOne.png' alt='' layout='fill' className=' group-hover:opacity-0 opacity-100 rotate-y-0 translate-z-[8rem] rounded-[1.25rem]  transition-all duration-600'/>

                //                 <Image src='/HirePopupTwo.png' alt='' layout='fill' className='   group-hover:opacity-100 opacity-0 rotate-y-90 -translate-z-[2rem] translate-x-[12.525rem] rounded-[1.25rem]    transition-all duration-600'/>

                //             </div>


                //             <div className='absolute w-[11.5625rem] h-[22.625rem] rotate-[7.48deg] top-0 right-0 transition-all duration-600  group-hover:-translate-x-[95%]  group-hover:translate-y-[55%] group-hover:rotate-z-[70deg] '>
                //                 <Image src='/sword.png' alt='' layout='fill' className='img-wrapper ' />
                //             </div>
                //         </div>
                //     </div>

                // </div>
                <div>
                    </div>
                : null}
        </div>

    )
}

export default HomeHeroImage