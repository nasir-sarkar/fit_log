"use client";
import { IWorkout } from "@/types/workouts.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";



export const MAX_PLAN_SIZE = 5;
const STORAGE_KEY = "fitlog-data";




interface IWorkoutsContext {
  todaysPlan: IWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkouts: IWorkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  doneWorkoutIds: number[];
  setDoneWorkoutIds: React.Dispatch<React.SetStateAction<number[]>>;
  isLoading: boolean;
}




export const WorkoutsContext = createContext<IWorkoutsContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
  doneWorkoutIds: [],
  setDoneWorkoutIds: () => {},
  isLoading: true,
});





const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);
  const [doneWorkoutIds, setDoneWorkoutIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);

        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setTodaysPlan(parsedData.todaysPlan ?? []);
          setSavedWorkouts(parsedData.savedWorkouts ?? []);
          setDoneWorkoutIds(parsedData.doneWorkoutIds ?? []);
        }
      } catch (error) {
        console.error("Error reading fitlog data:", error);
      }

      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  
  

  useEffect(() => {
    if (isLoading) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ todaysPlan, savedWorkouts, doneWorkoutIds }),
      );
    } catch (error) {
      console.error("Error saving fitlog data:", error);
    }
  }, [todaysPlan, savedWorkouts, doneWorkoutIds, isLoading]);



  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedWorkouts,
    setSavedWorkouts,
    doneWorkoutIds,
    setDoneWorkoutIds,
    isLoading,
  };

  

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};



export default WorkoutsProvider;