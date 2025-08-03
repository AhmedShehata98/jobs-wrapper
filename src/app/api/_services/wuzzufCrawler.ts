import axios from "axios";
import * as cheerio from "cheerio";
import type { JobFilters } from "@/types/JobFilters";
import type { JobResult } from "@/types/job";
import {
  parsePostDateText,
  postedWithinToDays,
} from "@/app/api/_utils/filter-date";
import dayjs from "dayjs";

const BASE_URL = "https://wuzzuf.net/search/jobs/?a=hpb&q=";

export const crawlWuzzufJobs = async (
  filters: JobFilters
): Promise<JobResult[]> => {
  const keywordQuery =
    filters?.keywords?.join(" + ") || filters.track || "software";
  const url = `${BASE_URL}${encodeURIComponent(keywordQuery)}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const jobs: JobResult[] = [];

  $(".css-1gatmva").each((_, element) => {
    const title = $(element)
      .find(".css-laomuu .css-m604qf a.css-o171kl")
      .text()
      .trim();
    const company = $(element)
      .find(".css-laomuu .css-d7j1kk a")
      .first()
      .text()
      .trim();

    const companyLocation = $(element)
      .find(".css-laomuu .css-5wys0k")
      .first()
      .text()
      .trim();
    const location = $(element).find(".css-5wys0k > span").eq(1).text().trim();
    const dateText = $(element)
      .find("div.css-laomuu > div > div")
      .last()
      .text()
      .trim();
    const jobType = $(element)
      .find(".css-pkv5jc .css-y4udm8 .css-1lh32fc .css-n2jc4m .css-1ve4b75")
      .text();
    const jobLocation = $(element)
      .find(".css-pkv5jc .css-y4udm8 .css-1lh32fc a .css-o1vzmt")
      .text();
    const description = $(element)
      .find(".css-pkv5jc .css-y4udm8 :nth-child(2) a")
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" - ");
    const link = $(element)
      .find(".css-laomuu .css-m604qf a.css-o171kl")
      .attr("href");

    const companyLogo = $(element).find(".css-pkv5jc a img").attr("src");

    const job: JobResult = {
      opportunityTitle: title || "Unknown",
      websiteName: "Wuzzuf",
      websiteLogo: "https://wuzzuf.net/favicon.ico",
      opportunityDescription: description,
      opportunityDate: dateText,
      track: filters.track || "",
      keywords: filters.keywords || [],
      jobType: jobType || filters.job_type || "N/A",
      experienceLevel: filters.experience_level || "N/A",
      // Removed 'publisher' property as it's not defined in JobResult type
      location: jobLocation || location || "N/A",
      company: company.replace("-", ""),
      link: link,
      companyLogo: companyLogo,
      companyLocation: companyLocation,
    };

    const adDate = parsePostDateText(dateText);
    if (filters.posted_within) {
      const daysLimit = postedWithinToDays(filters.posted_within);
      const cutoffDate = dayjs().subtract(daysLimit, "day");

      if (dayjs(adDate).isBefore(cutoffDate)) {
        return; // ignore the job
      }
    }

    jobs.push(job);
  });

  return jobs;
};
