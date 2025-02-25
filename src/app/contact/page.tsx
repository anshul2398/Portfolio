import Contact from '@/components/contact'
import React from 'react'
import { Anybody } from "next/font/google";
import Image from "next/image";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Multiple weights
});
function page() {
    return (
        <div className={`${anybody.className} w-full h-full`}>

            <Contact /> 
        </div>
    )
}

export default page