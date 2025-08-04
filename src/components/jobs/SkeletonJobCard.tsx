import React from "react";

function SkeletonJobCard() {
  return (
    <div className="w-full h-64 p-5 bg-zinc-50 border border-gray-200 animate-pulse">
      <div className="flex gap-3">
        <div className="size-16 bg-zinc-400 animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <span className="inline-block bg-zinc-300 rounded-md h-6 w-56 animate-pulse"></span>
          <span className="inline-block bg-zinc-300 rounded-md h-4 w-30 animate-pulse"></span>
        </div>
        <div className="flex gap-2 ms-auto">
          <span className="inline-block bg-zinc-300 rounded-md size-6 animate-pulse"></span>
          <span className="inline-block bg-zinc-300 rounded-md h-6 w-28 animate-pulse"></span>
        </div>
      </div>
      <div className="flex items-start gap-2 flex-wrap mt-5">
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-10/12 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-28 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-56 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-3/6 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-3/6 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-44 animate-pulse mt-1"></span>
        <span className="inline-block bg-zinc-300 rounded-md h-5 w-60 animate-pulse mt-1"></span>
      </div>
      <span className="inline-block bg-zinc-300 rounded-md h-8 w-28 animate-pulse mt-4"></span>
    </div>
  );
}

export default SkeletonJobCard;
