export interface JobResult {
  opportunityTitle: string;
  websiteName: string;
  websiteLogo: string;
  opportunityDescription: string;
  opportunityDate: string;
  track: string;
  keywords: string[];
  jobType: string;
  experienceLevel: string;
  // Removed 'experienceYears' property as it's not defined in JobResult type
  location: string;
  company: string;
  link?: string;
  companyLogo?: string;
  companyLocation: string;
}

export type JobResponse = {
  message: string;
  jobsFilters: string[];
  jobs: JobResult[];
};

export type WebsiteType = "wuzzuf" | "glassdoor" | "jobzella" | "forasna";
