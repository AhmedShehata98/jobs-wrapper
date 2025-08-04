import { JobFilters } from "@/types/JobFilters";
import { NextResponse } from "next/server";
import { crawlWuzzufJobs } from "@/app/api/_services/wuzzufCrawler";
import { crawlForasnaJobs } from "@/app/api/_services/forasnaCrawler";
import { crawlJobzella } from "@/app/api/_services/jobzillaCrawler";
import type { JobResult, WebsiteType } from "@/types/job";
import { crawlGlassdoorJobs } from "../_services/glassdoorCrawler";

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
    let jobs = [];
    const servicesMap: Record<
      WebsiteType,
      (filters: JobFilters) => Promise<JobResult[]>
    > = {
      wuzzuf: crawlWuzzufJobs,
      forasna: crawlForasnaJobs,
      jobzella: crawlJobzella,
      glassdoor: crawlGlassdoorJobs,
    };

    if (filters.publisher && filters.publisher in servicesMap) {
      const service = servicesMap[filters.publisher as WebsiteType];
      const jobResults = await service(filters);
      jobs.push(...jobResults);
    } else {
      for (const key in servicesMap) {
        const service = servicesMap[key as WebsiteType];
        const jobResults = await service(filters);
        jobs.push(...jobResults);
      }
    }

    if (filters.location) {
      const newJobs = jobs.filter((i) =>
        i.companyLocation.match(new RegExp(filters.location || "", "gi"))
      );
      jobs = newJobs || [];
    }

    return NextResponse.json(
      {
        message: "jobs collected success",
        jobs: jobs.filter((item) => item !== null),
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
