import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Results",
  description: "2025 UGKL FPV drone racing results — podium finishers from every event.",
};

interface PodiumEntry {
  position: number;
  pilot: string;
  flag: string;
}

interface RaceResult {
  event: string;
  date?: string;
  note?: string;
  categories?: { label: string; podium: PodiumEntry[] }[];
  podium?: PodiumEntry[];
}

const results: RaceResult[] = [
  {
    event: "Underground.KL 25 X1",
    date: "Jan 11",
    podium: [
      { position: 1, pilot: "Vynn", flag: "🇲🇾" },
      { position: 2, pilot: "Jirole", flag: "🇲🇾" },
      { position: 3, pilot: "Barracuda", flag: "🇲🇾" },
    ],
  },
  {
    event: "UGKL Cyber Prop 01",
    date: "Jan 25",
    podium: [
      { position: 1, pilot: "Ainol", flag: "🇲🇾" },
      { position: 2, pilot: "AK2", flag: "🇲🇾" },
      { position: 3, pilot: "Tommy", flag: "🇲🇾" },
    ],
  },
  {
    event: "UGKL Drone Race",
    date: "Feb 22",
    podium: [
      { position: 1, pilot: "CJFPV", flag: "🇰🇷" },
      { position: 2, pilot: "AMKFPV", flag: "🇲🇾" },
      { position: 3, pilot: "Isya", flag: "🇲🇾" },
    ],
  },
  {
    event: "Most Laps Grind",
    podium: [
      { position: 1, pilot: "Venrad", flag: "🇲🇾" },
      { position: 2, pilot: "Hanky", flag: "🇸🇬" },
      { position: 3, pilot: "Beast_FPV", flag: "🇲🇾" },
    ],
  },
  {
    event: "Cyber Prop 2",
    date: "Mar 15",
    podium: [
      { position: 1, pilot: "West", flag: "" },
      { position: 2, pilot: "Ainol", flag: "🇲🇾" },
      { position: 3, pilot: "OMNI_FPV", flag: "🇸🇬" },
    ],
  },
  {
    event: "Most Laps Grind to Win",
    podium: [
      { position: 1, pilot: "Beast_FPV", flag: "🇲🇾" },
      { position: 2, pilot: "ScreaM", flag: "🇲🇾" },
      { position: 3, pilot: "Obot", flag: "🇲🇾" },
    ],
  },
  {
    event: "Spring GQ",
    date: "May 10",
    podium: [
      { position: 1, pilot: "Vynn", flag: "🇲🇾" },
      { position: 2, pilot: "AMKFPV", flag: "🇲🇾" },
      { position: 3, pilot: "AK2", flag: "🇲🇾" },
    ],
  },
  {
    event: "Freedom Spec",
    podium: [
      { position: 1, pilot: "XiaoGuan-FPV", flag: "🇭🇰" },
      { position: 2, pilot: "AMKFPV", flag: "🇲🇾" },
      { position: 3, pilot: "Tommmy", flag: "🇲🇾" },
    ],
  },
  {
    event: "Summer GQ",
    date: "Aug 23",
    note: "Largest ever in Malaysia",
    categories: [
      {
        label: "Open",
        podium: [
          { position: 1, pilot: "Yuki", flag: "🇯🇵" },
          { position: 2, pilot: "LuckyStrike", flag: "🇨🇳" },
          { position: 3, pilot: "wxbFPV", flag: "🇨🇳" },
        ],
      },
      {
        label: "Pro",
        podium: [
          { position: 1, pilot: "guanLM", flag: "🇨🇳" },
          { position: 2, pilot: "Koco", flag: "🇨🇳" },
          { position: 3, pilot: "xiaoGuan", flag: "🇨🇳" },
        ],
      },
    ],
  },
  {
    event: "Freedom Spec City",
    categories: [
      {
        label: "Open",
        podium: [
          { position: 1, pilot: "AMKFPV", flag: "🇲🇾" },
          { position: 2, pilot: "Tommmy", flag: "🇲🇾" },
          { position: 3, pilot: "Nutcha", flag: "🇹🇭" },
        ],
      },
      {
        label: "Local",
        podium: [
          { position: 1, pilot: "Obot", flag: "🇲🇾" },
          { position: 2, pilot: "BunVirus", flag: "🇲🇾" },
          { position: 3, pilot: "jaysuman", flag: "🇲🇾" },
        ],
      },
    ],
  },
  {
    event: "One Last Round",
    categories: [
      {
        label: "Open",
        podium: [
          { position: 1, pilot: "FLOWERPIG", flag: "🇰🇷" },
          { position: 2, pilot: "YJCFPV", flag: "🇨🇳" },
          { position: 3, pilot: "Propfpv", flag: "🇦🇺" },
        ],
      },
      {
        label: "Local",
        podium: [
          { position: 1, pilot: "yz", flag: "🇲🇾" },
          { position: 2, pilot: "jirole", flag: "🇲🇾" },
          { position: 3, pilot: "FRED517", flag: "🇲🇾" },
        ],
      },
      {
        label: "Pro",
        podium: [
          { position: 1, pilot: "FLOWERPIG", flag: "🇰🇷" },
          { position: 2, pilot: "Ainol13", flag: "🇲🇾" },
          { position: 3, pilot: "AdilzFPV", flag: "🇲🇾" },
        ],
      },
    ],
  },
];

const positionColors = ["text-yellow-400", "text-gray-300", "text-amber-600"];

function Podium({ podium }: { podium: PodiumEntry[] }) {
  return (
    <div className="flex flex-wrap gap-4 mt-3">
      {podium.map((p) => (
        <div key={p.position} className="flex items-center gap-2">
          <span className={`text-sm font-bold ${positionColors[p.position - 1]}`}>
            {p.position}.
          </span>
          <span className="text-sm text-gray-200">
            {p.pilot} {p.flag}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Official Results</h1>
      <p className="text-gray-400 mb-10">2025 Race Season — Podium Finishers</p>

      <div className="space-y-4">
        {results.map((r) => (
          <div
            key={r.event}
            className="p-5 rounded-xl bg-card-bg border border-card-border"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-semibold text-gray-100">{r.event}</h3>
              {r.date && <span className="text-sm text-gray-500">({r.date})</span>}
              {r.note && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {r.note}
                </span>
              )}
            </div>

            {r.podium && <Podium podium={r.podium} />}

            {r.categories?.map((cat) => (
              <div key={cat.label} className="mt-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {cat.label}
                </span>
                <Podium podium={cat.podium} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
