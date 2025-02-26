import React, { useState } from 'react'
import Image from 'next/image'

function Signal({ setsignalpopup, IBM_plex_mono }) {

    const [open, setopen] = useState(false)
    const [open1, setopen1] = useState(false)
    const [desc, setdesc] = useState('')


    return (
        <div className={`${IBM_plex_mono.className} z-50 fixed overflow-hidden  w-full h-full top-0 flex items-center justify-center `} >
            <div className='bg-black/50 absolute w-full h-full z-10' onClick={() => setsignalpopup(false)}>

            </div>

            <div className='w-[23rem] h-[34.75rem] bg-[#fff] font-medium text-[#303030] p-5 z-20' >

                <div className='flex items-center justify-end '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className='w-4 h-4 cursor-pointer' onClick={() => setsignalpopup(false)}>
                        <path d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#303030" />
                    </svg>
                </div>
                <div className='relative w-[17rem] h-[17rem] mx-auto mt-8'>
                <Image src='/signalqr.jpg' alt='' layout='fill' className=' ' />
                </div>
                <p className=' text-[1.25rem] text-center mt-5  w-[17rem] ml-3'>Scan this QR code to message me on Signal</p>
                <p className='text-[#888888] text-[0.875rem] mt-14  w-[17rem] mx-auto'>Note: Reply time might depend on whether I know you or not</p>
            </div>

        </div>
    )
}

export default Signal