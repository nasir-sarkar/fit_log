"use client";
import { MAX_PLAN_SIZE, WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { PlusSquareIcon } from "../shared/Icons";



const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext);
  const isAlreadyAdded = todaysPlan.some((item) => item.id === workout.id);
  const isPlanFull = todaysPlan.length >= MAX_PLAN_SIZE;


  const handleAddToPlan = () => {
    if (isAlreadyAdded) {
      toast.info(`"${workout.name}" is already in today's plan`);
      return;
    }


    if (isPlanFull) {
      toast.warn(`Today's plan is full (${MAX_PLAN_SIZE} lifts)`);
      return;
    }


    setTodaysPlan([...todaysPlan, workout]);
    toast.success(`Added "${workout.name}" to today's plan`);
  };




  return (

    <button
      className="btn h-11 min-h-0 flex-1 gap-2 rounded-xl border-0 bg-brand-alt px-6 text-sm font-semibold text-[#0f1115] shadow-sm hover:brightness-110 disabled:cursor-not-allowed disabled:bg-[#2a2f38] disabled:text-[#6b7280] disabled:shadow-none sm:flex-none"
      onClick={() => handleAddToPlan()}
      disabled={isPlanFull && !isAlreadyAdded}
      title={
        isPlanFull && !isAlreadyAdded
          ? `Today's plan is full (${MAX_PLAN_SIZE} lifts)`
          : undefined
      }
    >
      <PlusSquareIcon className="size-4" />
      Add to today&apos;s plan
    </button>
  );
  
};


export default AddToPlanButton;