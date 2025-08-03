export interface JobFilters {
  track: string; // ex: "Frontend"
  keywords?: string[]; // ex: ["React", "Tailwind"]
  location?: string; // ex: "القاهرة" أو "عن بعد"
  job_type?: string; // ex: "Full-time"
  experience_level?: string; // ex: "Junior"
  publisher?: string; // ex: "Jobzilla"
  posted_within?: "day" | "week" | "2weeks" | "month";
}

export type Pagination = {
  page: string;
  limit: string;
};
