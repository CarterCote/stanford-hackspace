import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import { Button } from "@/components/ui/button";
import { crimson_regular_italic } from "./fonts";


export default function Home() {
  return (
    <div style={{ backgroundImage: 'url(/hackspaceBg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-black bg-opacity-40">
        <Header />
        <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
        >
          <main className="flex flex-col gap-8 row-start-2 justify-center items-center sm:items-start text-white">
            <div className="flex gap-4 items-center flex-col">
              <p className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                ideas that <span className={` ${crimson_regular_italic.className} tracking-[-3px] text-5xl ml-1 mr-4`}>excite you</span>are <span className="border-b border-white pb-1">worth pursuing</span>.
              </p>
              <p className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>what will you build?</p>
            </div>
            <div className="flex flex-row w-full space-x-4 items-center justify-center">
              <Button href="https://airtable.com/appey9cwVC1uMIt24/pagHg0eBEB677V7vc/form">
                apply to our f24 cohort
              </Button>
              <Button href="https://lu.ma/stanfordhackspace" variant={"outline"}>
                attend upcoming sessions 
              </Button>
            </div>
          </main>
          <footer className="row-start-3 flex gap-3 flex-wrap items-center justify-center text-white">
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
