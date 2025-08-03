export type JobPost = {
  id: number;
  user_id: number;
  company_id: number;
  company: {
    id: number;
    user_id: number;
    industry_id: number;
    username: string;
    title: string;
    size_id: number;
    type_id: number;
    founded: string; // ISO date string
    email: string;
    status: number;
    is_active: number;
    phone: string;
    website: string | null;
    description: string;
    created_at: string;
    user_email: string | null;
    logo:
      | string
      | null
      | {
          id: number;
          name: string;
          type: string;
          imageable_type: string;
          imageable_id: number;
          updated_at: string;
        };
    image?: string; // appears in second company object
  };
  title: string | null;
  position_id: number;
  is_confidential: number;
  workplace_type_id: number;
  employment_type_id: number;
  min_experience: number;
  max_experience: number;
  min_salary: string;
  max_salary: string;
  show_salary: number;
  salary_rate_id: number;
  currency: string;
  through_website: string | null;
  through_email: string | null;
  description: string;
  requirements: string;
  skills: number[];
  positions: number;
  show_profile: number;
  status: number;
  start_date: string;
  end_date: string;
  location: string;
  industries_id: number;
  role_id: string;
  created_at: string;
  views: number;
  user: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    position: string | null;
    education_b: string | null;
    email: string;
    phone: string | null;
    birthdate: string | null;
    is_verified: number;
    type: string | null;
    completed_at: string | null;
    location: string | null;
    address: string | null;
    latitude: string | null;
    longitude: string | null;
    country_code: string | null;
    place_id: string | null;
    headline: string | null;
    headline_visibility: number;
    summary: string | null;
    is_old: number;
    score: number;
    visits: number;
    search_appearance: number;
    country_id: number;
    city_id: number;
    created_at: string;
    is_activated: number;
    deleted_at: string | null;
    updated_at: string;
    education_id: number | null;
    websites: string[];
  };
  position: {
    id: number;
    name: string;
    deleted_at: string | null;
  };
  workplace_type: {
    id: number;
    name: string;
    deleted_at: string | null;
  };
  employment_type: {
    id: number;
    name_ar: string;
    name_en: string;
  };
  salary_rate: {
    id: number;
    name: string;
    deleted_at: string | null;
  };
  aspects: {
    id: number;
    aspect: string;
    job_id: number;
    value: string;
  }[];
  postDate: string;
  jobRole: {
    id: number;
    name_ar: string;
    name: string;
    created_at: string | null;
    updated_at: string | null;
  };
  start_date_zone: string;
};

export type JobzellaResponseType = {
  pageProps: {
    jobs: JobPost[];
  };
  totalCount: number;
};
