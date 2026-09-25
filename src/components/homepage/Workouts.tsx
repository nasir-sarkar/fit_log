import React, { Suspense } from "react";
import WorkoutsGrid from "./WorkoutsGrid";

const Workouts = () => {
  return (
    <section
      id="library"
      className="container mx-auto scroll-mt-24 px-4 pt-12 sm:px-6 md:pt-16"
    >
      
      
      <div className="mb-8">
        <h2 className="font-display text-[30px] font-bold uppercase leading-[1.2] tracking-[-0.025em] text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      
      
      <Suspense
        fallback={
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm text-[#9ca3af]">Loading workouts…</p>
          </div>
        }
      >
        <WorkoutsGrid />
      </Suspense>
    </section>
  );
};

export default Workouts;