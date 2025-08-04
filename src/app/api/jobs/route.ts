import { JobFilters } from "@/types/JobFilters";
import { NextResponse } from "next/server";
import { crawlWuzzufJobs } from "@/app/api/_services/wuzzufCrawler";
import { crawlForasnaJobs } from "@/app/api/_services/forasnaCrawler";
import { crawlJobzella } from "@/app/api/_services/jobzillaCrawler";
import type { JobResult } from "@/types/job";

export async function GET(req: Request) {
  if (typeof Request === "undefined" || !req.url) {
    return NextResponse.json(
      { message: "Invalid execution context" },
      { status: 400 }
    );
  }
  const { searchParams } = new URL(req.url);

  const filters: JobFilters = {
    track: searchParams.get("track") || "software",
    keywords: searchParams.getAll("keywords"),
    location: searchParams.get("location") || undefined,
    experience_level: searchParams.get("experience_level") || undefined,
    publisher: searchParams.get("publisher") || undefined,
    job_type: searchParams.get("job_type") || undefined,
    posted_within:
      (searchParams.get("posted_within") as JobFilters["posted_within"]) ||
      ("week" as JobFilters["posted_within"]),
  };

  if (!searchParams.get("track")) {
    return NextResponse.json(
      {
        message: "Please provide a valid track",
      },
      { status: 400 }
    );
  }

  try {
    const jobs = await Promise.allSettled([
      crawlWuzzufJobs(filters),
      crawlForasnaJobs(filters),
      crawlJobzella(filters),
    ]);

    return NextResponse.json(
      {
        message: "jobs collected success",
        jobsFilters: jobs.map((item) => item.status),
        jobs: jobs
          .filter(
            (result): result is PromiseFulfilledResult<JobResult[]> =>
              result.status === "fulfilled"
          )
          .map((item) => item.value)
          .flat(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error?.message
            : "Something wrong happened while collecting jobs list",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Job created", data });
}
