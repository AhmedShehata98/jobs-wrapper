import type { JobResult } from "@/types/job";
import type { JobFilters, Pagination } from "@/types/JobFilters";
import { JobzellaResponseType } from "@/types/jobzella";

export async function crawlJobzella(
  query: JobFilters & Partial<Pagination>
): Promise<JobResult[]> {
  // Rest API endpoint for fetching jobzella jobs by query and page number
  // https://www.jobzella.com/_next/data/ml61Qf0ENzd6t3375pjeH/en/search/jobs.json?page=1
  const endpointUrl = "/_next/data/ml61Qf0ENzd6t3375pjeH/en/search/jobs.json";
  // const searchUrl = `${baseUrl}${encodeURIComponent(query.track)}&page=1`;
  const searchUrl = new URL(endpointUrl, "https://www.jobzella.com");
  searchUrl.searchParams.set("page", query.page || "1");
  searchUrl.searchParams.set(
    "keyword",
    encodeURIComponent(
      query.keywords && query.keywords.length > 0
        ? query.keywords?.join(" ")
        : query.track
    )
  );
  try {
    const res = await fetch(searchUrl.href);
    const data = (await res.json()) as JobzellaResponseType;

    const jobs = data?.pageProps?.jobs?.map((item) => {
      const jobApplyLink = `https://www.jobzella.com/search/jobs?page=${
        query.page || "1"
      }&selectedJobId=${item.id}`;

      return {
        opportunityTitle: `${item.position.name} (${item.workplace_type.name})`,
        websiteName: "jobzella",
        websiteLogo:
          "https://jz-images.s3.eu-west-1.amazonaws.com/companies/logo/1542299874_logo_289_.jpeg",
        opportunityDescription: item.description
          ?.replace(/<[^>]*>/g, "")
          .trim(),
        opportunityDate: item.postDate,
        track: item.position.name,
        keywords: query.keywords || query.track,
        jobType: item.employment_type.name_en || item.employment_type.name_ar,
        experienceLevel: item.aspects.find((i) => i.aspect === "career_level")
          ?.value,
        experienceYears: item.aspects.find((i) => i.aspect === "career_level")
          ?.value,
        location: item.location,
        company: item.company.title || item.company.username,
        link: jobApplyLink,
        companyLogo: item.company.image,
        companyLocation: item.location,
      };
    });

    return jobs.filter((item) => {
      if (!item.opportunityDate) return false;

      const jobDate = new Date(item.opportunityDate);
      const currentDate = new Date();
      const daysDiff = Math.floor(
        (currentDate.getTime() - jobDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      switch (query.posted_within) {
        case "day":
          return daysDiff <= 1;
        case "week":
          return daysDiff <= 7;
        case "2weeks":
          return daysDiff <= 14;
        case "month":
          return daysDiff <= 30;
        default:
          return true;
      }
    }) as JobResult[];
  } catch (err) {
    console.error("Error crawling Jobzella:", err);
    return [];
  }
}
