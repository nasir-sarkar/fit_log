"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CheckIcon, ClockIcon, CloseIcon, FlameIcon, StarIcon } from "./Icons";



interface IPlanWorkoutCardProps {
  workout: IWorkout;
  type: "plan" | "saved";
}



const PlanWorkoutCard = ({ workout, type }: IPlanWorkoutCardProps) => {
  const {
    setTodaysPlan,
    setSavedWorkouts,
    doneWorkoutIds,
    setDoneWorkoutIds,
  } = useContext(WorkoutsContext);

  const isDone = doneWorkoutIds.includes(workout.id);

  const handleMarkAsDone = () => {
    setDoneWorkoutIds((prevIds) => [...prevIds, workout.id]);
    toast.success(`Nice work! "${workout.name}" is marked as done`);
};



  const handleRemove = () => {
    if (type === "plan") {
      setTodaysPlan((prevPlan) =>
        prevPlan.filter((item) => item.id !== workout.id),
      );
      setDoneWorkoutIds((prevIds) => prevIds.filter((id) => id !== workout.id));
      toast.info(`Removed "${workout.name}" from today's plan`);
    } else {
      setSavedWorkouts((prevSaved) =>
        prevSaved.filter((item) => item.id !== workout.id),
      );
      toast.info(`Removed "${workout.name}" from saved`);
    }
  };




  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 sm:flex-row sm:items-center sm:justify-between">
     
      <div className="flex items-center gap-4">
        <div className="h-20 w-36 shrink-0 overflow-hidden rounded-xl bg-[#1f2937]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={288}
            height={160}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>



        <div className="flex min-w-0 flex-col gap-0.5">
          <h2 className="font-display text-base font-bold uppercase leading-6 tracking-[0.025em] text-white">
            {workout.name}
          </h2>

          <p className="text-xs text-[#8a92a0]">{workout.equipment}</p>

          <div className="flex flex-wrap items-center gap-3 pt-1.5 text-xs text-[#d1d5db]">
            <div className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5 text-brand-alt" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FlameIcon className="size-3.5 text-brand-alt" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <StarIcon className="size-3.5 text-brand-alt" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      

      <div className="flex items-center gap-3 sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="flex h-[34px] items-center rounded-full border border-[#374151] px-[17px] text-xs text-white transition-colors hover:border-[#4b5563] hover:bg-white/5"
        >
          View Details
        </Link>


        {type === "plan" && (
          <button
            className={`flex h-8 items-center gap-1.5 rounded-full px-4 text-xs font-semibold shadow-sm transition-all ${
              isDone
                ? "cursor-default border border-brand-alt/40 bg-brand-alt/10 text-brand-alt"
                : "bg-brand-alt text-black hover:brightness-110"
            }`}
            onClick={() => handleMarkAsDone()}
            disabled={isDone}
          >
            <CheckIcon className="size-3.5" />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}


        <button
          aria-label={`Remove ${workout.name}`}
          className="flex size-7 items-center justify-center rounded-full text-[#9ca3af] transition-colors hover:bg-white/10 hover:text-white"
          onClick={() => handleRemove()}
        >
          <CloseIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};



export default PlanWorkoutCard;