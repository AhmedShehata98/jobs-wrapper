import JobsFilterMenu from "@/components/jobs/JobsFilterMenu";
import JobsList from "@/components/jobs/JobsList";
import JobSearchBox from "@/components/jobs/JobSearchBox";
import { Suspense, use } from "react";
import SkeletonJobCard from "@/components/jobs/SkeletonJobCard";
import { ErrorBoundary } from "react-error-boundary";
import JobErrorBox from "@/components/jobs/JobErrorBox";
import { JobFilters } from "@/types/JobFilters";
import { JobResponse } from "@/types/job";
import { CircleAlert } from "lucide-react";
import clsx from "clsx";

const fetchJobs = async (filters: JobFilters): Promise<JobResponse> => {
  try {
    const searchParams = new URLSearchParams();
    if (!filters.track) {
      throw new Error("Track parameter is required");
    }
    searchParams.set("track", filters.track);

    if (filters.keywords?.length) {
      searchParams.set("keywords", filters.keywords.join(","));
    }

    const optionalParams: Array<keyof JobFilters> = [
      "location",
      "posted_within",
      "job_type",
      "experience_level",
      "publisher",
    ];

    optionalParams.forEach((param) => {
      const value = filters[param];
      if (value) {
        searchParams.set(param, value.toString());
      }
    });

    // Make request and handle potential errors
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ""}/api/jobs?${searchParams}`,
      {
        method: "GET",
        next: { revalidate: 7200, tags: ["jobs-list"] },
      }
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ track: string }>;
}) => {
  const { track } = await searchParams;
  return {
    title: `Search Jobs List | ${track || ""}`,
  };
};

function JobsPage(props: {
  searchParams: Promise<{
    track: string;
    posted_within: JobFilters["posted_within"];
    location: string;
    publisher: JobFilters["publisher"];
  }>;
}) {
  let data: JobResponse | null = null;
  const searchParams = use(props.searchParams);
  if (searchParams.track) {
    data = use(
      fetchJobs({
        track: searchParams.track,
        posted_within: searchParams.posted_within,
        location: searchParams.location,
        publisher: searchParams.publisher,
      })
    );
  }

  return (
    <div className="relative app-container min-h-[calc(100vh-14rem)] max-md:px-6 flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-start gap-3 pt-6">
        <JobSearchBox />
      </div>
      {/* Jobs wrapper */}
      <div
        className={clsx(
          "w-full flex items-start justify-start gap-6 mb-12",
          data?.jobs?.length === 0 && "flex-col items-center justify-center",
          !searchParams.track && "flex-col items-center justify-center"
        )}
      >
        <JobsFilterMenu />
        {data?.jobs?.length === 0 && (
          <div className="min-w-96 flex items-center justify-start gap-4 bg-cyan-300 m-auto px-4 py-5 rounded-md">
            <CircleAlert />
            <p className="text-base text-cyan-900 font-semibold capitalize">
              there is no jobs founded , try to change your search criteria
            </p>
          </div>
        )}
        {!searchParams.track && (
          <div className="min-w-96 flex items-center justify-start gap-4 bg-amber-200 m-auto px-4 py-5 rounded-md">
            <CircleAlert />
            <p className="text-base text-amber-900 font-semibold capitalize">
              please add track name at least to search
            </p>
          </div>
        )}
        <ErrorBoundary fallback={<JobErrorBox />}>
          <Suspense fallback={<SkeletonJobCard />}>
            <JobsList jobs={data?.jobs || []} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default JobsPage;
