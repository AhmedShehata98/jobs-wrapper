"use client";
import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function HeroTrackSearchBox() {
  const [track, setTrack] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/jobs?${createQueryString("track", track)}`);
      }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
    >
      <Input
        type="search"
        placeholder="e.g., Frontend Developer, Data Scientist"
        className="flex-grow h-14 text-lg px-5 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        value={track}
        onChange={(e) => {
          setTrack(e.target.value);
        }}
      />
      <Button
        type="submit"
        size="lg"
        className="w-full flex items-center justify-center gap-2 shrink-0 md:w-auto px-8 py-4 text-lg h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 shadow-lg cursor-pointer disabled:bg-gray-400 disabled:text-gray-500"
        disabled={track.trim() === ""}
      >
        <Search className="w-5 h-5 mr-3" />
        Start Tracking
      </Button>
    </form>
  );
}

export default HeroTrackSearchBox;
