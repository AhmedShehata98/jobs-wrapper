import { JobFilters, Pagination } from "@/types/JobFilters";
import { NextResponse } from "next/server";
import { crawlWuzzufJobs } from "@/app/api/_services/wuzzufCrawler";
import { crawlForasnaJobs } from "@/app/api/_services/forasnaCrawler";
import { crawlJobzella } from "@/app/api/_services/jobzillaCrawler";
import type { JobResult, WebsiteType } from "@/types/job";
import { crawlGlassdoorJobs } from "../_services/glassdoorCrawler";
import { filterJobsMiddleware } from "../_utils/filter-jobs-middleware";

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
    publisher: (searchParams.get("publisher") as WebsiteType) || undefined,
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
    const servicesMap: Record<
      WebsiteType,
      (query: { track: string } & Partial<Pagination>) => Promise<JobResult[]>
    > = {
      wuzzuf: crawlWuzzufJobs,
      forasna: crawlForasnaJobs,
      jobzella: crawlJobzella,
      glassdoor: crawlGlassdoorJobs,
    };

    const service = servicesMap[filters.publisher || "wuzzuf"];
    const jobs = await service({
      track: filters.track,
      page: "1",
      limit: "25",
    });

    const filteredJobs = filterJobsMiddleware({
      filters,
      jobs: jobs.filter((item) => item !== null),
    });

    return NextResponse.json(
      {
        message: "jobs collected success",
        jobs: filteredJobs,
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
