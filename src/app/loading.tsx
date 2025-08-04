import { Loader } from "lucide-react";
import React from "react";

function LoadingModule() {
  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-gray-50 shadow-2xl p-8 rounded">
        <span className="animate-spin flex items-center justify-center text-secondary">
          <Loader />
        </span>
        <p className="font-medium capitalize text-gray-600">please wait</p>
      </div>
    </div>
  );
}

export default LoadingModule;
