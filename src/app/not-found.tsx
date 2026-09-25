import Link from "next/link";
import React from "react";


const NotFound = () => {
  
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#0f1115] px-4 py-16">
      <div className="text-center">
        <p className="font-display text-8xl font-bold leading-none tracking-[-0.025em] text-brand-alt sm:text-9xl">
          404
        </p>


        <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.035em] text-white">
          Page not found
        </h1>


        <p className="mx-auto mt-2 max-w-sm text-sm text-[#a1a1aa]">
          The page you are looking for does not exist, or the lift was moved.
          Head back to the library and pick another one.
        </p>


        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c2f10d] px-6 py-2.5 text-xs font-semibold tracking-[-0.025em] text-black shadow-lg shadow-[#c2f10d]/10 transition-all hover:brightness-110"
        >
          Go to workouts
        </Link>
      </div>
    </section>
  );
};


export default NotFound;