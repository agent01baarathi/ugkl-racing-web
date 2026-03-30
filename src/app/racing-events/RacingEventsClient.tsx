"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import type { RaceEvent } from "./page";

const yearFilters = ["All", "2026", "2025", "2024"];
const categoryFilters = [
  "All",
  "E-Sport Class",
  "Freedom Spec",
  "Open Class",
  "Whoop Class",
];

export default function RacingEventsClient({ events }: { events: RaceEvent[] }) {
  const [yearFilter, setYearFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = events.filter((e) => {
    if (yearFilter !== "All" && e.year !== Number(yearFilter)) return false;
    if (categoryFilter !== "All" && e.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Racing Events</h1>
      <p className="text-gray-400 mb-8">
        All UGKL FPV drone racing events — from sim racing to open spec global qualifiers.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {yearFilters.map((y) => (
          <button
            key={y}
            onClick={() => setYearFilter(y)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
              yearFilter === y
                ? "bg-accent text-[#0a0a0a] border-accent"
                : "border-card-border text-gray-400 hover:border-accent/40"
            }`}
          >
            {y}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categoryFilters.map((c) => (
          <button
            key={c}
            onClick={() => setCategoryFilter(c)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
              categoryFilter === c
                ? "bg-accent text-[#0a0a0a] border-accent"
                : "border-card-border text-gray-400 hover:border-accent/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-gray-500 py-8 text-center">No events match the selected filters.</p>
        )}
        {filtered.map((e) => (
          <EventCard
            key={e.title + e.date}
            title={e.title}
            date={e.date}
            category={e.category}
          />
        ))}
      </div>
    </div>
  );
}
