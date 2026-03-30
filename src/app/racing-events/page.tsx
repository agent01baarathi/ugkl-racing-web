import type { Metadata } from "next";
import RacingEventsClient from "./RacingEventsClient";

export const metadata: Metadata = {
  title: "Racing Events",
  description:
    "Browse all UGKL FPV drone racing events — from sim racing to open spec global qualifiers.",
};

export interface RaceEvent {
  title: string;
  date: string;
  year: number;
  category: string;
}

export const events: RaceEvent[] = [
  { title: "UGKL Racing Round 2", date: "March 28, 2026", year: 2026, category: "Open Class" },
  { title: "UGKL CyberProp 2026", date: "February 28, 2026", year: 2026, category: "E-Sport Class" },
  { title: "UGKL Racing Round 1", date: "January 31, 2026", year: 2026, category: "Open Class" },
  { title: "UGKL One Last Round 2025", date: "December 7, 2025", year: 2025, category: "Open Class" },
  { title: "UGKL MultiGP Summer GQ", date: "August 23, 2025", year: 2025, category: "Open Class" },
  { title: "UGKL MultiGP Spring Global Qualifier", date: "May 10, 2025", year: 2025, category: "Open Class" },
  { title: "UGKL Most Laps – Grind to win", date: "April 5, 2025", year: 2025, category: "Open Class" },
  { title: "Cyber Prop 2", date: "March 15, 2025", year: 2025, category: "E-Sport Class" },
  { title: "UGKL Drone Race", date: "February 22, 2025", year: 2025, category: "Open Class" },
  { title: "UGKL Cyber Prop 01", date: "January 25, 2025", year: 2025, category: "E-Sport Class" },
  { title: "Underground.KL 25 X1", date: "January 11, 2025", year: 2025, category: "Open Class" },
  { title: "Whooptology 2024", date: "December 14, 2024", year: 2024, category: "Whoop Class" },
  { title: "UGKL Rookie Cup", date: "November 9, 2024", year: 2024, category: "Open Class" },
  { title: "Underground.KL X04", date: "October 5, 2024", year: 2024, category: "Open Class" },
  { title: "Summer MultiGP Global Qualifier", date: "August 24, 2024", year: 2024, category: "Open Class" },
  { title: "Freedom Spec Race", date: "July 13, 2024", year: 2024, category: "Freedom Spec" },
  { title: "Spring MultiGP Global Qualifier", date: "May 25, 2024", year: 2024, category: "Open Class" },
  { title: "Underground.KL – X02", date: "April 27, 2024", year: 2024, category: "Open Class" },
  { title: "Most laps in X March", date: "March 23, 2024", year: 2024, category: "Open Class" },
  { title: "Fastest 3 consecutive @ Underground.KL", date: "February 24, 2024", year: 2024, category: "Open Class" },
  { title: "Most laps in X Feb", date: "February 17, 2024", year: 2024, category: "Open Class" },
  { title: "Underground.KL-X01", date: "January 27, 2024", year: 2024, category: "Open Class" },
];

export default function RacingEventsPage() {
  return <RacingEventsClient events={events} />;
}
