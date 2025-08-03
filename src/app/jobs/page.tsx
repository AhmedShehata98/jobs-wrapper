"use client";

import { JobResult } from "@/types/job";
import { JobFilters } from "@/types/JobFilters";
import { useDebounce } from "@uidotdev/usehooks";
import { Briefcase, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import JobCard from "./../../components/JobCard";
import { SUPPORTED_WEBSITES } from "@/constants/supported-websites";

function JobsPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<JobFilters>({
    track: searchParams.get("track") || "software",
    keywords: [],
    location: "",
    experience_level: undefined,
    job_type: undefined,
    posted_within: undefined,
    publisher: undefined,
  });
  const filtersDebounceValue = useDebounce(filters, 300);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<{
    jobs: JobResult[];
  } | null>(null);

  useEffect(() => {
    const jobsFetcher = async (filter: JobFilters) => {
      try {
        setLoading(true);
        // Create base URL with origin for absolute path
        const url = new URL("/api/jobs", window.location.origin);

        // Validate and set required track parameter
        if (!filter.track) {
          throw new Error("Track parameter is required");
        }
        url.searchParams.set("track", filter.track);

        if (filter.keywords?.length) {
          url.searchParams.set("keywords", filter.keywords.join(","));
        }

        // Add optional filter parameters if they exist
        const optionalParams: Array<keyof JobFilters> = [
          "location",
          "posted_within",
          "job_type",
          "experience_level",
          "publisher",
        ];

        optionalParams.forEach((param) => {
          const value = filter[param];
          if (value) {
            url.searchParams.set(param, value.toString());
          }
        });

        // Make request and handle potential errors
        const res = await fetch(url, {
          method: "GET",
          next: { revalidate: 10800, tags: ["jobs-list"] },
        });

        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }

        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error while fetching jobs: ", error);
        setJobs(null);
      } finally {
        setLoading(false);
      }
    };
    jobsFetcher(filtersDebounceValue);
  }, [filtersDebounceValue]);

  useEffect(() => {
    if (isLoading) {
      window.document.body.classList.add("overflow-hidden");
    } else {
      window.document.body.classList.remove("overflow-hidden");
    }
  }, [isLoading]);

  return (
    <div className="relative app-container min-h-[calc(100vh-14rem)] max-md:px-6 flex flex-col items-center justify-start">
      {/* {isLoading &&
        createPortal(
          <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center">
            <div className="flex flex-col gap-3 bg-gray-50 shadow-2xl p-8 rounded">
              <span className="animate-spin flex items-center justify-center text-secondary">
                <Loader />
              </span>
              <p className="font-medium capitalize text-gray-600">
                please wait
              </p>
            </div>
          </div>,
          document.body
        )} */}
      <div className="w-full flex items-center justify-start gap-3 pt-6">
        <div className="w-full flex items-center justify-start flex-col md:flex-row gap-2.5 mb-6">
          {/* Job Track */}
          <div
            className={
              "w-full h-12 flex items-center justify-start gap-1.5 ps-3 border text-gray-700 bg-gray-200 border-gray-200 rounded3sm focus-within:bg-gray-100 focus-within:border-gray-400"
            }
          >
            <Briefcase className="size-5" />
            <input
              type="search"
              name="track"
              id="track"
              placeholder="إيه المجال اللي بتدور عليه؟"
              className={
                "flex-1 pe-1 ps-3 py-2 rounded-sm bg-inherit placeholder:text-gray-400 text-gray-700 text-start focus:outline-none"
              }
              value={filters.track}
              onChange={(evt) =>
                setFilters((prev) => ({
                  ...prev,
                  track: evt.target.value,
                }))
              }
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 bg-brand px-10 py-3 rounded-sm text-white cursor-pointer hover:bg-brand/80"
          >
            <p>Search</p>
            <Search className="size-5" />
          </button>
        </div>
      </div>
      {/* Jobs wrapper */}
      <div className="w-full flex items-start justify-start gap-6 mb-12">
        <aside className="w-1/4 shrink-0 bg-zinc-50 border p-4 border-gray-300">
          <div className="flex flex-col gap-4">
            {/* Date Filter */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="posted_within"
                className="text-sm font-medium text-gray-700"
              >
                Posted Within
              </label>
              <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
                <select
                  id="posted_within"
                  className="w-full focus:outline-none"
                  value={filters.posted_within || ""}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      posted_within: e.target
                        .value as JobFilters["posted_within"],
                    }))
                  }
                >
                  <option value="">Any time</option>
                  <option value="day">Last 24 hours</option>
                  <option value="week">Last 7 days</option>
                  <option value="2weeks">Last 14 days</option>
                  <option value="month">Last 30 days</option>
                </select>
              </span>
            </div>

            {/* Location Filter */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
                <select
                  id="location"
                  className="w-full focus:outline-none"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                >
                  <option value="">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="cairo">Cairo</option>
                  <option value="alexandria">Alexandria</option>
                  <option value="giza">Giza</option>
                  <option value="sharm-el-sheikh">Sharm El Sheikh</option>
                  <option value="luxor">Luxor</option>
                  <option value="aswan">Aswan</option>
                  <option value="hurghada">Hurghada</option>
                  <option value="mansoura">Mansoura</option>
                  <option value="tanta">Tanta</option>
                  <option value="asyut">Asyut</option>
                  <option value="ismailia">Ismailia</option>
                  <option value="port-said">Port Said</option>
                  <option value="suez">Suez</option>
                  <option value="zagazig">Zagazig</option>
                  <option value="damietta">Damietta</option>
                </select>
              </span>
            </div>

            {/* Publisher Filter */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="publisher"
                className="text-sm font-medium text-gray-700"
              >
                Publisher Website
              </label>
              <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
                <select
                  id="publisher"
                  className="w-full focus:outline-none"
                  value={filters.publisher || ""}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      publisher: e.target.value || undefined,
                    }))
                  }
                >
                  <option value="">All Publishers</option>
                  {SUPPORTED_WEBSITES.map((publisher) => (
                    <option key={publisher.value} value={publisher.value}>
                      {publisher.name}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            {/* Apply Filters Button */}
            <button
              className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors"
              onClick={() => {
                // The filters will automatically apply due to the useDebounce hook
                console.log("Filters applied:", filters);
              }}
            >
              Apply Filters
            </button>
          </div>
        </aside>
        <ul className="w-full grid grid-flow-row-dense gap-y-2">
          {isLoading && (
            <>
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
            </>
          )}
          {jobs?.jobs?.map((job: JobResult, idx: number) => (
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
      </div>
    </div>
  );
}

export default JobsPage;
