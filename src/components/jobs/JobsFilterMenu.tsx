"use client";
import { SUPPORTED_WEBSITES } from "@/constants/supported-websites";
import clsx from "clsx";
import { ListFilter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function JobsFilterMenu() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(false);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const fd = new FormData(evt.currentTarget);
    const location = fd.get("location");
    const posted_within = fd.get("posted_within");
    const publisher = fd.get("publisher");

    const sp = new URLSearchParams(searchParams.toString());
    if (location) {
      sp.set("location", location as string);
    } else {
      sp.delete("location");
    }
    if (posted_within) {
      sp.set("posted_within", posted_within as string);
    } else {
      sp.delete("posted_within");
    }
    if (publisher) {
      sp.set("publisher", publisher as string);
    } else {
      sp.delete("publisher");
    }

    router.push(`?${sp.toString()}`);
  };
  return (
    <>
      <aside
        className={clsx(
          "max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full w-1/3 xl:w-1/4 max-md:h-screen shrink-0 bg-zinc-50 border p-4 border-gray-300 transition-all",
          {
            "max-md:translate-y-20 max-md:opacity-0 max-md:scale-98 max-md:pointer-events-none":
              !openFilter,
          }
        )}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Date Filter */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="posted_within"
              className="text-sm font-medium text-gray-700"
            >
              Posted Within
            </label>
            <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
              <select
                id="posted_within"
                name="posted_within"
                className="w-full focus:outline-none"
              >
                <option value="">Any time</option>
                <option value="day">Last 24 hours</option>
                <option value="week">Last 7 days</option>
                <option value="2weeks">Last 14 days</option>
                <option value="month">Last 30 days</option>
              </select>
            </span>
          </div>

          {/* Location Filter */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
              <select
                id="location"
                name="location"
                className="w-full focus:outline-none"
              >
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="cairo">Cairo</option>
                <option value="alexandria">Alexandria</option>
                <option value="giza">Giza</option>
                <option value="sharm-el-sheikh">Sharm El Sheikh</option>
                <option value="luxor">Luxor</option>
                <option value="aswan">Aswan</option>
                <option value="hurghada">Hurghada</option>
                <option value="mansoura">Mansoura</option>
                <option value="tanta">Tanta</option>
                <option value="asyut">Asyut</option>
                <option value="ismailia">Ismailia</option>
                <option value="port-said">Port Said</option>
                <option value="suez">Suez</option>
                <option value="zagazig">Zagazig</option>
                <option value="damietta">Damietta</option>
              </select>
            </span>
          </div>

          {/* Publisher Filter */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="publisher"
              className="text-sm font-medium text-gray-700"
            >
              Publisher Website
            </label>
            <span className="p-2 pe-4 flex items-center justify-center border border-gray-300 rounded-sm">
              <select
                id="publisher"
                name="publisher"
                className="w-full focus:outline-none"
              >
                <option value="">All Publishers</option>
                {SUPPORTED_WEBSITES.map((publisher) => (
                  <option key={publisher.value} value={publisher.value}>
                    {publisher.name}
                  </option>
                ))}
              </select>
            </span>
          </div>

          {/* Apply Filters Button */}
          <button
            className="w-full mt-2 py-2 px-4 bg-brand text-white rounded-sm hover:bg-brand/80 transition-colors cursor-pointer"
            type="submit"
          >
            Apply Filters
          </button>
        </form>
      </aside>
      <button
        type="button"
        className="md:hidden fixed bottom-4 right-4 size-14 flex items-center justify-center shadow-xl rounded-full bg-secondary cursor-pointer"
        onClick={() => setOpenFilter((p) => !p)}
      >
        {openFilter ? <X /> : <ListFilter />}
      </button>
    </>
  );
}

export default JobsFilterMenu;
