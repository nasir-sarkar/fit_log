import React from "react";
import { DumbbellIcon } from "./Icons";



const Footer = () => {
  return (
    <footer className="border-t border-[#1a1d24] bg-[#090a0d] py-8 md:py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center sm:px-6 md:flex-row md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <DumbbellIcon className="size-5 text-brand" />
          <span className="font-display text-sm font-bold uppercase leading-5 tracking-[0.05em] text-white">
            FitLog
          </span>
        </div>

        
        <p className="text-xs text-[#6b7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};


export default Footer;