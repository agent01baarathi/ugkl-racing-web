import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Partner with UGKL Racing — Malaysia's premier grassroots FPV drone racing league. Sponsorship tiers and 2026 event calendar.",
};

const tiers = [
  {
    name: "Bronze",
    price: "$500/year",
    benefits: [
      "Selected Digital Platforms",
      "Selected Social Platforms",
      "Selected Physical Media",
    ],
  },
  {
    name: "Gold",
    price: "$1,000/year",
    featured: true,
    benefits: [
      "Featured on all Digital platforms",
      "Featured on all Social platforms",
      "Featured on all Physical media",
    ],
  },
  {
    name: "Title Sponsor",
    price: "TBD/year or per event",
    benefits: [
      "Full ownership of race",
      "Featured on all platforms",
      "Custom branding integration",
    ],
  },
];

const calendar = [
  { num: 1, event: "UGKL Open Spec", date: "January", class: "Open", stream: "Yes", pilots: "24" },
  { num: 2, event: "Cyber Prop", date: "February", class: "Sim Race", stream: "Yes", pilots: "50" },
  { num: 3, event: "UGKL Whoop", date: "March", class: "Whoop", stream: "Yes", pilots: "30" },
  { num: 4, event: "International Race / GQ", date: "April/May", class: "Open Spec", stream: "Yes", pilots: "50+" },
  { num: 5, event: "UGKL Freedom Spec", date: "June", class: "Freedom Spec", stream: "Yes", pilots: "20" },
  { num: 6, event: "Selangor Cup", date: "August", class: "Open Spec", stream: "Yes", pilots: "35" },
];

export default function SponsorshipPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sponsorship</h1>
      <p className="text-gray-400 mb-10 max-w-2xl">
        The Underground.KL MultiGP FPV Drone Racing Series is Malaysia premier
        grassroots drone racing league. Partner with us to reach a passionate,
        tech-savvy audience of pilots, builders, and enthusiasts.
      </p>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-6 rounded-xl border ${
              tier.featured
                ? "bg-accent/5 border-accent/40"
                : "bg-card-bg border-card-border"
            }`}
          >
            <h3 className="text-lg font-bold text-accent">{tier.name}</h3>
            <p className="mt-1 text-2xl font-bold text-gray-100">{tier.price}</p>
            <ul className="mt-6 space-y-3">
              {tier.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-6 w-full inline-flex justify-center items-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                tier.featured
                  ? "bg-accent text-[#0a0a0a] hover:bg-accent-dim"
                  : "border border-card-border text-gray-300 hover:border-accent hover:text-accent"
              }`}
            >
              Get in Touch
            </Link>
          </div>
        ))}
      </div>

      {/* 2026 Calendar */}
      <h2 className="text-2xl font-bold mb-6">2026 Event Calendar</h2>
      <div className="overflow-x-auto rounded-xl border border-card-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card-bg text-left">
              <th className="px-4 py-3 font-semibold text-gray-300">#</th>
              <th className="px-4 py-3 font-semibold text-gray-300">Event</th>
              <th className="px-4 py-3 font-semibold text-gray-300">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-300">Class</th>
              <th className="px-4 py-3 font-semibold text-gray-300">Live Stream</th>
              <th className="px-4 py-3 font-semibold text-gray-300">Pilots</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((row) => (
              <tr key={row.num} className="border-t border-card-border">
                <td className="px-4 py-3 text-gray-500">{row.num}</td>
                <td className="px-4 py-3 text-gray-100">{row.event}</td>
                <td className="px-4 py-3 text-gray-400">{row.date}</td>
                <td className="px-4 py-3 text-gray-400">{row.class}</td>
                <td className="px-4 py-3 text-accent">{row.stream}</td>
                <td className="px-4 py-3 text-gray-400">{row.pilots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
