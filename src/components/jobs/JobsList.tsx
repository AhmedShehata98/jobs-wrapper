"use client";
import React from "react";
import { motion } from "motion/react";
import { JobResult } from "@/types/job";
import JobCard from "@/components/jobs/JobCard";

function JobsList({ jobs }: { jobs: JobResult[] }) {
  return (
    <ul className="w-full grid grid-flow-row-dense gap-y-2">
      {jobs?.map((job: JobResult, idx: number) => (
        <motion.li
          key={idx}
          initial={{
            translateX: -10,
            opacity: 0.2,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          exit={{ translateX: 6, opacity: 0.2 }}
        >
          <JobCard job={job} />
        </motion.li>
      ))}
    </ul>
  );
}

export default JobsList;
