import React from 'react'
import Image from 'next/image'



function Header() {
    
  return (

    <div className={`  absolute  z-[11] l:w-[16.56rem] l:h-[7.31rem] h-[5.625rem] w-[6.5rem]`}>
        <Image className=' text-[4rem] top-0  mt-[2rem] ml-[3.375rem] l:block hidden' alt='Anshul Web Developer' layout='fill'  src='/ANSHUL.png'  />
        <Image className=' text-[4rem] top-0   ml-[1rem] l:hidden block' alt='Anshul Web Developer' layout='fill'  src='/anshul.png'  />



    </div>
  )
}

export default Header