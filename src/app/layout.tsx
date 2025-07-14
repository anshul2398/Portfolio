import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Head from "next/head";
import Menu from "@/components/Menu";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "ANSHUL SHARMA | WEB DEV",
  description: "I'm a web developer specializing in building responsive, high-performance websites and apps using React, Next.js, and Node.js. I focus on clean code, great UX, and SEO optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning className="s:text-[16px] m:text-[16px] l:text-[7px] xl:text-[9px] 2xl:text-[11px] 3xl:text-[12px] 4xl:text-[13px]   5xl:text-[13.5px] 6xl:text-[14px] 7xl:text-[14.5px] 8xl:text-[15px] 9xl:text-[15.5px] 10xl:text-[16px] 11xl:text-[17px] 12xl:text-[19px] ">

      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      <meta property="og:image" content="/anotherdevelopment.jpg" />

      <meta property="og:title" content="ANSHUL SHARMA | WEB DEV" />

      <meta property="og:description" content="I'm a web developer specializing in building responsive, high-performance websites and apps using React, Next.js, and Node.js. I focus on clean code, great UX, and SEO optimization." />

      <body
        className={` antialiased bg-[#fff]`}
      >
        <Providers>

          {children}
          <Menu />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
