import React from 'react'

function PowerCard() {
    return (
        <div className='mt-[10.25rem]'>
            <h2 className='font-bold text-[2.25rem] text-black text-center w-full'>My powers are</h2>

            <div className='flex items-center justify-center mt-14 '>
                <div className='w-[25.6875rem] h-[35.9375rem] perspective-[1000px] group 
'>
                    <div className='  rounded-[1.25rem]  transition-transform duration-600 inset-0 relative w-full h-full group-hover:rotate-y-180' style={{
                        transformStyle: 'preserve-3d'
                    }}>
                        <p className='text-black absolute rounded-[1.25rem] w-full h-full bg-orange-500 backface-hidden
'>anshul</p>
                        <p className='text-white absolute rounded-[1.25rem] w-full h-full bg-pink-500 backface-hidden rotate-y-180
'>wow</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PowerCard