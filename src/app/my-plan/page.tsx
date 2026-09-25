"use client";
import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";
import { ChevronDownIcon } from "@/components/shared/Icons";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import Link from "next/link";
import { useContext, useState } from "react";



type TTab = "plan" | "saved";
type TSortBy = "duration" | "calories" | "rating";



const MyPlan = () => {
  const { todaysPlan, savedWorkouts, isLoading } = useContext(WorkoutsContext);
  const [activeTab, setActiveTab] = useState<TTab>("plan");
  const [sortBy, setSortBy] = useState<TSortBy>("duration");

  


  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );



  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };



  const currentWorkouts = sortWorkouts(
    activeTab === "plan" ? todaysPlan : savedWorkouts,
  );



  const tabs: { key: TTab; label: string }[] = [
    { key: "plan", label: "Today's Plan" },
    { key: "saved", label: "Saved" },
  ];




  const metrics = [
    { label: "Exercises", value: isLoading ? 0 : todaysPlan.length },
    { label: "Minutes", value: isLoading ? 0 : totalMinutes },
    { label: "Calories", value: isLoading ? 0 : totalCalories },
  ];




  return (
    <div className="bg-[#0f1115] pb-10">
      <div className="container mx-auto space-y-6 px-4 pt-10 sm:px-6 lg:px-12">
        
        

        <div className="space-y-2">
          <h1 className="font-display text-[30px] font-bold uppercase leading-[1.2] tracking-[-0.025em] text-white">
            MY PLAN
          </h1>

          <p className="text-sm text-[#8a92a0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        
        <div className="grid divide-y divide-[#232732]/60 rounded-2xl border border-[#232732] bg-[#13161d] px-6 pb-6 pt-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`py-4 first:pt-0 last:pb-0 md:py-0 ${
                index === 0
                  ? "md:pr-6"
                  : index === 1
                    ? "md:px-8"
                    : "md:pl-8"
              }`}
            >
              <p className="mb-1 text-xs text-[#8a92a0]">{metric.label}</p>

              <p
                className={`font-display text-4xl font-bold leading-[1.1111] ${
                  index === 0 ? "py-0.5 text-brand-alt" : "text-white"
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        
        
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div
            role="tablist"
            className="flex items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-lg px-4 py-1.5 text-xs transition-colors ${
                    isActive
                      ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                      : "border border-transparent text-[#8a92a0] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>


          <div className="flex items-center gap-3">
            <label htmlFor="sort-by" className="text-xs text-[#8a92a0]">
              Sort By
            </label>

            <div className="relative">
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as TSortBy)}
                className="h-[34px] w-[93px] cursor-pointer appearance-none rounded-[9px] border border-[#232732] bg-[#13161d] pl-2.5 pr-7 text-xs text-white outline-none transition-colors hover:border-[#374151] focus:border-brand-alt/60"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[#8a92a0]" />
            </div>
          </div>
        </div>

        
        
        {isLoading ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm text-[#9ca3af]">Loading workouts…</p>
          </div>
        ) : currentWorkouts.length > 0 ? (
          <div className="space-y-4">
            {currentWorkouts.map((workout: IWorkout) => {
              return (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111317]/50 px-4 py-24 text-center">
            <h2 className="mb-2 font-display text-xl font-bold uppercase leading-none tracking-[0.035em] text-white">
              NOTHING HERE YET
            </h2>

            <p className="mb-6 text-xs text-[#a1a1aa]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#c2f10d] px-6 py-2.5 text-xs font-semibold tracking-[-0.025em] text-black shadow-lg shadow-[#c2f10d]/10 transition-all hover:brightness-110"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;