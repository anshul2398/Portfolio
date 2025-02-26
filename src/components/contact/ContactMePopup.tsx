import React, { useState } from 'react'

function ContactMePopup({ setemailpopup, IBM_plex_mono }) {

    const [open, setopen] = useState(false)
    const [open1, setopen1] = useState(false)
    const [desc, setdesc] = useState('')


    return (
        <div className={`${IBM_plex_mono.className} z-50 fixed overflow-hidden  w-full h-full top-0 flex items-center justify-center `} >
            <div className='bg-black/50 absolute w-full h-full z-10' onClick={() => setemailpopup(false)}>

            </div>

            <div className='w-[34.75rem] h-[34.75rem] bg-[#fff] font-medium text-[#303030] p-5 z-20' >

                <div className='flex items-center justify-between '>
                    <p className='text-[1.375rem]' >Email</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className='w-4 h-4 cursor-pointer' onClick={() => setemailpopup(false)}>
                        <path d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#303030" />
                    </svg>

                </div>

                <form className='mt-8 w-full relative z-20'>
                    <div className={`${open ? ' border-t-[1px] border-l-[1px] border-r-[1px]  ' : ' border-[1px] '} text-[1rem]  relative z-30 px-4  bg-[#fff] h-10 flex items-center justify-between cursor-pointer w-full select-none`} onClick={() => {
                        setopen(!open)
                        setopen1(false)
                    }
                    }>
                        <p className={`${open ? 'text-[0.75rem] text-[#888888]' : ''} transition-all duration-250`}> Who are you?
                        </p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" className='w-3 h-2'>
                            <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#303030" />
                        </svg>

                        {open ?
                            <ul className="dropdown_menu dropdown_menu-4 bg-[#fff]   text-[#303030]  border-b-[1px] border-l-[1px] border-r-[1px] z-30 ">
                                <li className={` dropdown_item-1 select-none`}>I am a recruiter</li>
                                <li className={` dropdown_item-2 select-none`}>I am your friend</li>
                                <li className={` dropdown_item-3 select-none`}>I am your rival</li>
                                <li className={` dropdown_item-4 select-none`}>I am just a regular guy man</li>
                                <li className={`dropdown_item-5 select-none`}>I am a girl (rare event)</li>
                                <li className={` dropdown_item-6 select-none`}>I am from Akatsuki</li>
                                <li className={` dropdown_item-7 select-none`}>I am Nigerian prince (I need money)</li>
                            </ul>
                            : null}
                    </div>

                    <div className={`${open1 ? ' border-t-[1px] border-l-[1px] border-r-[1px]  ' : ' border-[1px] '} text-[1rem]  relative z-20 px-4  bg-[#fff] h-10 flex items-center justify-between cursor-pointer w-full select-none mt-5`} onClick={() => {
                        setopen(false)
                        setopen1(!open1)
                    }}>
                        <p className={`${open1 ? 'text-[0.75rem] text-[#888888]' : ''} transition-all duration-250`}> What you want?
                        </p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" className='w-3 h-2'>
                            <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#303030" />
                        </svg>

                        {open1 ?
                            <ul className="dropdown_menu dropdown_menu-4 bg-[#fff] pb-2 text-[#303030]  border-b-[1px] border-l-[1px] border-r-[1px]  z-20">
                                <li className={` dropdown_item-2 select-none`}>I want to talk to you
                                </li>
                                <li className={` dropdown_item-3 select-none`}>I want to hire you
                                </li>
                                <li className={` dropdown_item-4 select-none`}>I want to challenge you for a duel
                                </li>
                                <li className={`dropdown_item-5 select-none`}>I want to give you a suitcase full of money
                                </li>
                                <li className={` dropdown_item-6 select-none`}>I want you to capture one person</li>
                            </ul>
                            : null}
                    </div>

                    <textarea className='mt-5 relative border-[1px] h-[13rem] w-full outline-none px-4 py-3  z-10 resize-none
' placeholder='What is it that you want to say...' onChange={(e) => setdesc(e.target.value)} value={desc}>

                    </textarea>

                    <button className='w-full bg-[#303030] text-[#fff] h-11 mt-5'>
                        SEND
                    </button>
                </form>
                <p className='text-[#888888] text-[0.875rem] text-center mt-7'>I usually respond back in 24-48 hours</p>
            </div>

        </div>
    )
}

export default ContactMePopup