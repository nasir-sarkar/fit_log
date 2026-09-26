"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { CloseIcon, MenuIcon } from "./Icons";



const navLinks = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];



const Navbar = () => {
  const pathname = usePathname();
  const { todaysPlan, savedWorkouts } = useContext(WorkoutsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[#0c0d10]/95 backdrop-blur">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        
        
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Image src={logo} alt="FitLog Logo" width={28} height={28} priority />
          <span className="font-display text-lg font-bold uppercase leading-[28px] tracking-[0.05em] text-white">
            FitLog
          </span>
        </Link>

        
        
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-4 py-1.5 text-xs transition-colors ${
                    isActive
                      ? "bg-[#1a2312] font-semibold text-brand"
                      : "font-medium text-[#9ca3af] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        
        
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs font-medium text-[#d1d5db] transition-colors hover:text-white"
          >
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold leading-none text-black">
              {todaysPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 text-xs font-medium text-[#9ca3af] transition-colors hover:text-white"
          >
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2d313b] px-1 text-[11px] font-medium leading-none text-[#d1d5db]">
              {savedWorkouts.length}
            </span>
          </Link>

          
          
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-mr-2 flex size-9 items-center justify-center rounded-lg text-[#d1d5db] md:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </nav>

      
      
      {isMenuOpen && (
        <ul className="container mx-auto flex flex-col gap-1 border-t border-[#1c1f26] px-4 py-3 sm:px-6 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-full px-4 py-2 text-sm ${
                    isActive
                      ? "bg-[#1a2312] font-semibold text-brand"
                      : "font-medium text-[#9ca3af]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Navbar;