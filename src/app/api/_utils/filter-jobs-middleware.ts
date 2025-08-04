import { JobResult } from "@/types/job";
import { JobFilters } from "@/types/JobFilters";
import { getDateFromRelativeTime } from "./filter-date";

export function filterJobsMiddleware({
  filters,
  jobs,
}: {
  filters: JobFilters;
  jobs: JobResult[];
}) {
  return jobs.filter((job) => {
    if (filters.location) {
      return job.companyLocation.match(new RegExp(filters.location, "gi"));
    }
    if (filters.posted_within) {
      const postedWithin = getDateFromRelativeTime(job.opportunityDate);
      const filterDate = getDateFromRelativeTime(filters.posted_within);

      return postedWithin.getTime() <= filterDate.getTime();
    }
    return true;
  });
}
