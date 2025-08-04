"use client";
import { Briefcase, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function JobSearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const track = formData.get("track");
    if (track) {
      router.push(`?track=${track}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-start flex-col md:flex-row gap-2.5 mb-6"
    >
      {/* Job Track */}
      <div
        className={
          "w-full h-12 flex items-center justify-start gap-1.5 ps-3 border text-gray-700 bg-gray-200 border-gray-200 rounded3sm focus-within:bg-gray-100 focus-within:border-gray-400"
        }
      >
        <Briefcase className="size-5" />
        <input
          type="search"
          name="track"
          id="track"
          placeholder="What job are you looking for?"
          className={
            "flex-1 pe-1 ps-3 py-2 rounded-sm bg-inherit placeholder:text-gray-400 text-gray-700 text-start focus:outline-none"
          }
          defaultValue={searchParams.get("track") || ""}
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2.5 bg-brand px-10 py-3 max-md:self-start rounded-sm text-white cursor-pointer hover:bg-brand/80"
      >
        <p>Search</p>
        <Search className="size-5" />
      </button>
    </form>
  );
}

export default JobSearchBox;
