import axios from "axios";
import * as cheerio from "cheerio";
import type { JobFilters, Pagination } from "@/types/JobFilters";
import type { JobResult } from "@/types/job";

const BASE_URL = `https://forasna.com/${encodeURIComponent(
  "وظائف-خالية"
)}?query=`;

export const crawlForasnaJobs = async (
  query: {
    track: string;
  } & Partial<Pagination>
): Promise<JobResult[]> => {
  const url = `${BASE_URL}${encodeURIComponent(query.track || "software")}`;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const jobs: JobResult[] = [];

  $(".result-wrp").each((_, element) => {
    console.count("element");
    const title = $(element).find(".job-title a").text().trim();
    const jobType = $(element).find(".job-details :nth-child(3)").text();
    const description = $(element).find(".job-details:last-child").text();
    const location = $(element).find(".location span").text().trim();
    const dateText = $(element).find(".date").text().trim();
    const link = $(element).find(".job-title a").attr("href");
    const company = $(element).find(".company-name a span").text();
    const companyLogo = $(element).find(".company-logo img").attr("src");

    const job: JobResult = {
      opportunityTitle: title || "Unknown",
      websiteName: "Forasna",
      websiteLogo: "https://forasna.com/favicon.ico",
      opportunityDescription: description,
      opportunityDate: dateText || "N/A",
      track: query.track || "",
      keywords: [query.track],
      jobType: jobType || "N/A",
      experienceLevel: "N/A",
      location: location || "N/A",
      link,
      company: company || "N/A",
      companyLocation: location,
      companyLogo,
    };

    jobs.push(job);
  });

  return jobs;
};
