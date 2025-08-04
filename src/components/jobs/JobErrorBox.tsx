import { BadgeAlert } from "lucide-react";
import React from "react";

function JobErrorBox() {
  return (
    <div className="flex items-center justify-start gap-3 bg-red-200 rounded-sm p-2">
      <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
        <BadgeAlert className="text-red-500" />
      </div>
      <p className="text-red-600 font-medium">
        Oops, Error caused while fetching Jobs list. try again later
      </p>
    </div>
  );
}

export default JobErrorBox;
