import React from "react";


const GlobalLoading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-sm text-[#9ca3af]">Loading...</p>
    </div>
  );
};


export default GlobalLoading;