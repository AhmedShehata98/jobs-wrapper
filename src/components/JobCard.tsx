import { JobResult } from "@/types/job";
import Link from "next/link";
import React from "react";

function JobCard({ job }: { job: JobResult }) {
  return (
    <div className="flex items-start justify-start gap-3 p-3 bg-zinc-50 shadow-xs rounded-sm border border-gray-300">
      <figure className="size-16 rounded-md overflow-hidden shrink-0">
        <img
          src={job.companyLogo || "https://placehold.co/100"}
          alt="https://placehold.co/400"
        />
      </figure>
      <div className="flex-1 flex flex-col items-start justify-start">
        <span className="w-full flex items-center justify-between mb-3">
          <span className="flex items-start justify-start gap-1 flex-col">
            <h3 className="font-medium text-base capitalize text-gray-800">
              {job.opportunityTitle}
            </h3>
            <span className="flex items-center justify-start gap-1.5">
              <p className="text-brand font-medium text-base">{job.company}</p>
              <p className="text-gray-400 font-normal text-sm">
                {job.companyLocation}
              </p>
            </span>
          </span>
          <div className="flex items-center justify-start gap-2 shrink-0">
            <img
              src={job.websiteLogo}
              alt={job.websiteName}
              className={"size-6"}
            />
            <p className="text-xs font-medium uppercase px-3 py-1 text-gray-600 bg-gray-200 rounded-sm">
              {job.websiteName}
            </p>
          </div>
        </span>
        <div className="flex items-center justify-start gap-2">
          <p className="flex items-center justify-center px-3 py-1 bg-gray-200 font-medium rounded-sm text-xs mb-2">
            {job.jobType}
          </p>
          <p className="flex items-center justify-center px-3 py-1 bg-gray-200 font-medium rounded-sm text-xs mb-2">
            {job.location}
          </p>
        </div>
        <p className="text-gray-400 font-medium text-xs">
          {job.opportunityDescription}
        </p>
        <ul className="text-gray-400 font-medium text-sm">
          {job.keywords.map((item, idx) => (
            <li key={`${item}_${idx}`} className="text-xs text-gray-400">
              {item}
            </li>
          ))}
        </ul>
        <span className="w-full flex items-center justify-between mt-4">
          {job.link && (
            <Link
              href={job.link}
              target="_blank"
              className="bg-brand text-white font-medium capitalize px-3.5 py-1.5 text-sm rounded-sm hover:brightness-75"
            >
              التقديم الان
            </Link>
          )}
          <p className="text-xs text-gray-400 font-medium capitalize">
            {job.opportunityDate}
          </p>
        </span>
      </div>
    </div>
  );
}

export default JobCard;
