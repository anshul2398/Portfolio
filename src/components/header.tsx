import React from 'react'
import Image from 'next/image'



function Header() {
    
  return (

    <div className={`  absolute  z-[11] w-[16.56rem] h-[7.31rem]`}>
        <Image className=' text-[4rem] top-0  mt-[2rem] ml-[3.375rem]' alt='Anshul Web Developer' layout='fill'  src='/ANSHUL.png'  />


    </div>
  )
}

export default Header