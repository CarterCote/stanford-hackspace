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

interface WorkspaceCardProps {
  title: string;
  image: string;
  features: string[];
  positive: boolean;
  viewMore?: boolean;
}

const WorkspaceCard = ({ title, image, features, positive, viewMore }: WorkspaceCardProps) => {
  return (
    <div className={`${viewMore ? "bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.25)]" : ""} rounded-lg overflow-hidden w-[340px] text-white `}>
      <Image src={image} alt={title} width={384} height={256} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[15px]">
              <span className={`mr-2 text-xl ${positive ? 'text-green-500' : 'text-red-500'}`}>
                {positive ? '✓' : '✗'}
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {viewMore && (
          <Button variant="outline" className="w-full">
            view more
          </Button>
        )}
      </div>
    </div>
  );
};


export default function Home() {
  const { width, height } = useWindowSize();

  return (
    <>
      <div style={{ backgroundImage: 'url(/hackspaceBg.png)', backgroundSize: 'cover', backgroundPosition: 'center', overflowX: 'hidden' }}>
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
      <div className="flex flex-wrap justify-center gap-8 my-12">
        <WorkspaceCard
          title="build at starb*cks"
          image="/cardCoffee.png"
          features={[
            "loud, corny pop music",
            "stiff, painful stools",
            "closes at 3pm ~ 5pm (wtf)",
            "overpriced food & drinks",
          ]}
          positive={false}
        />
        <WorkspaceCard
          title="build at hackspace"
          image="/cardHackspace.png"
          features={[
            "vibey, ambient & focus music",
            "access to cool ppl + mentors",
            "opens until 12am midnight daily",
            "free food & drinks (sometimes boba)",
          ]}
          positive={true}
          viewMore={true}
        />
        <WorkspaceCard
          title="build at ur dorm/apt"
          image="/hackspaceBg.png"
          features={[
            "too many distractions (ur bed or fridge)",
            "super cramped work area",
            "uncomfy seats",
            "no free food",
          ]}
          positive={false}
        />
      </div>
    </>
  );
}
