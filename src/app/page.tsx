import DarkModeButton from "@/components/DarkModeButton";
import Header from "@/components/header";
import HomeHeroImage from "@/components/HomeHeroImage";
import PowerCard from "@/components/PowerCard";
import { useTheme } from "next-themes";
import { Anybody } from "next/font/google";
import Image from "next/image";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Multiple weights
});

export default function Home() {


  return (
    <main className={`${anybody.className} pb-40`}>
      <Header />
      <HomeHeroImage />
      <PowerCard />
    </main>

  );
}
