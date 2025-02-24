import Header from "@/components/header";
import HomeHeroImage from "@/components/home/HomeHeroImage";
import Menu from "@/components/Menu";
import PowerCard from "@/components/home/PowerCard";
import HomeBottom from "@/components/home/homebottom";

import { useTheme } from "next-themes";
import { Anybody } from "next/font/google";
import Image from "next/image";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Multiple weights
});

export default function Home() {


  return (
    <main className={`${anybody.className} pb-40 `}>
      <Header />
      <HomeHeroImage />
      <PowerCard />
      <HomeBottom />
     
    </main>

  );
}
