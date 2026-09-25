import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ClockIcon, FlameIcon, StarIcon } from "./Icons";


interface IWorkoutCardProps {
  workout: IWorkout;
}


const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-black/40"
    >
      
      
      <div className="h-48 shrink-0 overflow-hidden bg-[#1f232b]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={400}
          unoptimized
          className="h-full w-full object-cover object-[center_20%] transition duration-500 group-hover:scale-105"
        />
      </div>

      
      
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          
          <div className="flex flex-wrap items-center gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold uppercase leading-[17px] tracking-[0.05em] text-black"
              >
                {group}
              </span>
            ))}
          </div>

          
          <h3 className="mt-3 font-display text-lg font-bold uppercase leading-7 tracking-[0.025em] text-white transition-colors group-hover:text-brand">
            {workout.name}
          </h3>

          
          <p className="mt-1 text-xs text-[#9ca3af]">{workout.equipment}</p>
        </div>

        
        <div className="mt-4 flex items-center gap-4 border-t border-[#20242e] pt-3 text-xs text-[#9ca3af]">
          <div className="flex items-center gap-1.5">
            <ClockIcon className="size-3.5" />
            <span>{workout.duration} min</span>
          </div>


          <div className="flex items-center gap-1.5">
            <FlameIcon className="size-3.5" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>


          <div className="flex items-center gap-1.5">
            <StarIcon className="size-3.5" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default WorkoutCard;