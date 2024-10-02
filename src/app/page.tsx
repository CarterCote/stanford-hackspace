import Image from "next/image";
import Header from "./header";

import { crimson_regular_italic } from "./fonts";


export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col">
            <p className="text-4xl font-bold">
              ideas that <span className={` ${crimson_regular_italic.className} tracking-[-3px] text-5xl ml-1 mr-4`}>excite you</span>are <span className="border-b border-white pb-1">worth pursuing</span>.
            </p>
            <p className="text-xl">what will you build?</p>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://bases.stanford.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Stanford BASES Website →
          </a>
        </footer>
      </div>
    </>
  );
}
