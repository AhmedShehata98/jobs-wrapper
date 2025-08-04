import axios from "axios";
import * as cheerio from "cheerio";
import dayjs from "dayjs";
import {
  parsePostDateText,
  postedWithinToDays,
} from "@/app/api/_utils/filter-date";
import type { JobFilters } from "@/types/JobFilters";
import type { JobResult } from "@/types/job";

const BASE_URL = `https://forasna.com/${encodeURIComponent(
  "وظائف-خالية"
)}?query=`;

export const crawlForasnaJobs = async (
  filters: JobFilters
): Promise<JobResult[]> => {
  const keywordQuery =
    filters.keywords?.join(" + ") || filters.track || "software";
  const url = `${BASE_URL}${encodeURIComponent(keywordQuery)}`;

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
    const adDate = parsePostDateText(dateText);

    if (filters.posted_within) {
      const cutoffDate = dayjs().subtract(
        postedWithinToDays(filters.posted_within),
        "day"
      );
      if (dayjs(adDate).isBefore(cutoffDate)) return;
    }

    const job: JobResult = {
      opportunityTitle: title || "Unknown",
      websiteName: "Forasna",
      websiteLogo: "https://forasna.com/favicon.ico",
      opportunityDescription: description,
      opportunityDate: dateText || filters.posted_within || "N/A",
      track: filters.track || "",
      keywords: filters.keywords || [],
      jobType: jobType || filters.job_type || "N/A",
      experienceLevel: filters.experience_level || "N/A",
      // Removed 'publisher' property as it's not defined in JobResult type
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
