import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation",
  description:
    "Explore UGKL Racing innovations — from open-source timing systems to custom racing frames and cloud-linked race management.",
};

const innovations = [
  {
    icon: "🏁",
    title: "RotorHazard",
    description:
      "Open source FPV timing system, real-time lap tracking, deployed in Malaysia biggest events.",
  },
  {
    icon: "☁️",
    title: "CloudLink",
    description:
      "Streams live race results, leaderboards, video feeds to cloud. Winner of 2024 Anugerah Inovasi Teknologi Sukan Kebangsaan award by Institut Sukan Negara.",
  },
  {
    icon: "🚀",
    title: "Barracuda Racing Frame",
    description:
      "High-performance FPV drone frame, engineered from real-world race data, optimized weight distribution and aerodynamics.",
  },
  {
    icon: "💡",
    title: "Barracuda LED System",
    description:
      "Programmable LEDs for drone visibility, low-light and night races, vibrant race experience.",
  },
  {
    icon: "⚙️",
    title: "Barracuda Racing Tune",
    description:
      "Pre-configured Betaflight setup, removes oscillations, improves cornering, ultra-smooth handling.",
  },
  {
    icon: "📡",
    title: "MultiGP RaceSync",
    description:
      "Integrated event coordination, heat assignments, frequency management automation.",
  },
];

export default function InnovationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Innovation</h1>
      <p className="text-gray-400 mb-10">
        Technology and systems built by the UGKL community to push drone racing forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/40 transition-all group"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-100 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
