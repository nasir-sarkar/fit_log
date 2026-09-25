import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "@/assets/banner.png";
import { ArrowDownIcon } from "../shared/Icons";



const Banner = () => {
  return (
    <section className="container mx-auto px-4 pt-8 sm:px-6 md:pt-12">
      <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]">
        <div className="flex flex-col items-center justify-between gap-10 p-6 sm:p-10 md:flex-row lg:p-14">
          
          
          <div className="flex w-full flex-col gap-5 text-center md:max-w-xl md:pt-1.5 md:text-left">
            <span className="text-[11px] font-bold uppercase leading-normal tracking-[0.1em] text-brand">
              WORKOUT LIBRARY
            </span>


            <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>


            <p className="max-w-lg text-base leading-6 text-[#9ca3af]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>


            <div className="pt-2">
              <Link
                href="#library"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand px-6 text-xs font-bold uppercase tracking-[0.025em] text-black shadow-sm transition-all hover:brightness-110"
              >
                BROWSE WORKOUTS
                <ArrowDownIcon className="size-3.5" />
              </Link>
            </div>
          </div>



          
          <Image
            src={bannerImg}
            alt="Muscle anatomy illustration of a seated curl"
            priority
            className="size-[280px] shrink-0 object-contain sm:size-[334px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;