import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";
import { IWorkout } from "@/types/workouts.type";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";



interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}



const getWorkouts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "https://api.abcz.workers.dev"}/api/fitlog`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};



export const generateMetadata = async ({
  params,
}: IWorkoutDetailsPageProps): Promise<Metadata> => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = Array.isArray(workoutsData)
    ? workoutsData.find((item: IWorkout) => String(item.id) === String(id))
    : undefined;

  return {
    title: workout ? workout.name : "Workout not found",
    description: workout?.description,
  };
};



const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = (
    Array.isArray(workoutsData)
      ? workoutsData.find((item: IWorkout) => String(item.id) === String(id))
      : undefined
  ) as IWorkout | undefined;

  if (!workout) {
    notFound();
  }



  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];



  return (
    <div className="bg-[#0f1115] pb-16 lg:pb-[111px]">
      <div className="container mx-auto px-4 pt-8 sm:px-6 lg:pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          
         
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={740}
              height={925}
              unoptimized
              priority
              className="h-full w-full object-cover"
            />
          </div>

          

          <div>
            <h1 className="mb-3 font-display text-3xl font-bold uppercase leading-[1.1111] tracking-[-0.025em] text-white sm:text-4xl">
              {workout.name}
            </h1>


            
            <p className="mb-5 max-w-xl text-base leading-6 text-[#9ca3af]">
              {workout.description}
            </p>

            

            <div className="mb-7 flex flex-wrap items-center gap-2.5">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-brand-alt px-3.5 py-1 text-xs font-semibold text-[#0f1115]"
                >
                  {group}
                </span>
              ))}
            </div>


            
            <div className="mb-8 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 border-t border-[#1e2330] px-6 py-3.5 first:border-t-0"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#9ca3af]">
                    {spec.label}
                  </span>

                  <span className="text-right text-sm font-medium text-[#e5e7eb]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>


            
            <div className="mb-9">
              <h2 className="mb-4 text-base font-extrabold uppercase leading-6 tracking-[0.05em] text-white">
                Instructions
              </h2>


              <ol className="space-y-3">
                {workout.instructions.map((step, index) => (
                  <li key={index} className="flex text-sm leading-[1.625]">
                    <span className="mr-2 text-[#9ca3af]">{index + 1}.</span>
                    <span className="text-[#d1d5db]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            

            <div className="flex flex-wrap items-center gap-4">
              <AddToPlanButton workout={workout} />

              <SaveButton workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WorkoutDetailsPage;