import type { JobResult } from "@/types/job";
import type { Pagination } from "@/types/JobFilters";
import { JobzellaResponseType } from "@/types/jobzella";

export async function crawlJobzella(
  query: { track: string } & Partial<Pagination>
): Promise<JobResult[]> {
  const endpointUrl = "/_next/data/ml61Qf0ENzd6t3375pjeH/en/search/jobs.json";
  // const searchUrl = `${baseUrl}${encodeURIComponent(query.track)}&page=1`;
  const searchUrl = new URL(endpointUrl, "https://www.jobzella.com");
  searchUrl.searchParams.set("page", query.page || "1");
  searchUrl.searchParams.set("keyword", encodeURIComponent(query.track));
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
        keywords: [query.track],
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

    return jobs as JobResult[];
  } catch (err) {
    console.error("Error crawling Jobzella:", err);
    return [];
  }
}
