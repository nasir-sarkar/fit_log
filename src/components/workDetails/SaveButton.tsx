"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { BookmarkIcon } from "../shared/Icons";



const SaveButton = ({ workout }: { workout: IWorkout }) => {
  
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutsContext);

  const handleSaveForLater = () => {
    const isAlreadySaved = savedWorkouts.some((item) => item.id === workout.id);

    if (isAlreadySaved) {
      toast.info(`"${workout.name}" is already saved`);
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success(`Saved "${workout.name}" for later`);
  };



  return (
    
    <button
      className="btn h-[46px] min-h-0 flex-1 gap-2 rounded-xl border border-[#374151] bg-transparent px-6 text-sm font-medium text-[#e5e7eb] shadow-none hover:border-[#4b5563] hover:bg-white/5 sm:flex-none"
      onClick={() => handleSaveForLater()}
    >
      <BookmarkIcon className="size-4" />
      Save for later
    </button>
  );

};


export default SaveButton;