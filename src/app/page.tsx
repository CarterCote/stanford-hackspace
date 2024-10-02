"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import { Button } from "@/components/ui/button";
import { crimson_regular_italic } from "./fonts";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { useWindowSize } from 'react-use';

export default function Home() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ backgroundImage: 'url(/hackspaceBg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#FF7F7F"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={height}  // Scale down height
        width={width -15}    // Scale down width
      />
      <div className="bg-black bg-opacity-40">
        <Header />
        <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20"
        >

          <BlurIn className="flex flex-col gap-8 row-start-2 justify-center items-center sm:items-start text-white">
            <div className="flex gap-4 items-center flex-col text-center lg:text-start">
              <p className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                ideas that <span className={` ${crimson_regular_italic.className} tracking-[-3px] text-5xl ml-1 mr-4`}>excite you</span>are <span className="border-b border-white pb-1">worth pursuing</span>.
              </p>
              <p className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>what will you build?</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center">
              <Link href="https://airtable.com/appey9cwVC1uMIt24/pagHg0eBEB677V7vc/form">
              <RainbowButton>apply to our f24 cohort</RainbowButton>
              </Link>
              <Button href="https://lu.ma/stanfordhackspace" variant={"outline"} className="px-8 w-full lg:w-auto">
                attend upcoming sessions 
              </Button>
            </div>
          </BlurIn>
          <footer className="row-start-3 flex flex-wrap items-center justify-center text-white">
            <Link
              className="flex items-center gap-1 no-underline hover:no-underline hover:border-b hover:border-white transition-all duration-300"
              href="https://bases.stanford.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/basesLogo.png"
                className="mt-0.5"
                alt="bases"
                width={48}
                height={24}
              />
              website →
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
