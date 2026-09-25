import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";
import React from "react";


export const dynamic = "force-dynamic";


const page = () => {
  return (
    <div className="bg-[#0c0d10] pb-[76px]">
      <Banner />
      <Workouts />
    </div>
  );
};


export default page;