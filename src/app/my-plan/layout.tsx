import type { Metadata } from "next";
import React from "react";



export const metadata: Metadata = {
  title: "My Plan",
  description: "Today's plan and your saved lifts, all in one place.",
};



const MyPlanLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};



export default MyPlanLayout;