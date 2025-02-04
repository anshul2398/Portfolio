'use client'
import { useTheme } from 'next-themes';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const DarkModeButton = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);


    return (
        <>
        <button className="w-[14rem] h-[4rem] bg-black text-[#fff] text-[2rem] rounded-[5rem] dark:bg-[#fff] dark:text-[#000]" onClick={
            () => {
                setIsAnimating(true);
                setTimeout(() => {
                    resolvedTheme == 'dark' ? setTheme('light') : setTheme('dark')
                    setIsAnimating(false);
                }, 2000); // Match the animation duration

            }
        }>Light</button>
 
        {isAnimating && (
         <>
         {/* Left Water Stream */}
         <div
           className="fixed inset-0  w-full h-full overflow-hidden"
        
         >
          <Image layout="fill" src="/bankai.gif" alt="portfolio" />
         </div>

        
       </>
        )}
      </>
    )
}

export default DarkModeButton