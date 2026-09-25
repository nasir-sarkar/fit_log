import WorkoutCard from "../shared/WorkoutCard";
import { IWorkout } from "@/types/workouts.type";



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



const WorkoutsGrid = async () => {
  const workoutsData = await getWorkouts();

  if (!Array.isArray(workoutsData) || workoutsData.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-[#9ca3af]">
        Could not load the workouts right now. Please try again in a moment.
      </p>
    );
  }


  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workoutsData.map((workout: IWorkout) => {
        return <WorkoutCard key={workout.id} workout={workout} />;
      })}
    </div>
  );
};


export default WorkoutsGrid;