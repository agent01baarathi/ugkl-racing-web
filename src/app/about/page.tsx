import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Underground.KL — Malaysia's premier FPV drone racing chapter and official Tier 1 MultiGP chapter.",
};

const sections = [
  {
    icon: "🚀",
    title: "Competitive Racing & Global Qualifiers",
    content:
      "We organise and participate in competitive FPV drone racing at local and international levels. As a Tier 1 MultiGP chapter, we host multiple Global Qualifiers annually, placing our pilots on the world stage and the global leaderboard.",
  },
  {
    icon: "🎮",
    title: "FPV Simulator Races & Training",
    content:
      "Our Cyber Prop sim racing series provides a low-barrier entry for new pilots and a training platform for experienced racers. Using Velocidrone and integrated RotorHazard timing, sim races are managed with the same rigor as physical events.",
  },
  {
    icon: "📡",
    title: "Tech & Innovation",
    content:
      "From our award-winning CloudLink live-streaming system to the Barracuda racing frame, UGKL pilots constantly push technical boundaries. We build open-source tools, custom hardware, and software that benefit the global FPV community.",
  },
  {
    icon: "🤝",
    title: "Community & Collaboration",
    content:
      "UGKL is more than a race series — it's a community of builders, tinkerers, and pilots who help each other grow. We run workshops, build sessions, and open practice days to ensure every member has the support they need.",
  },
  {
    icon: "🔧",
    title: "DIY & Hardware Development",
    content:
      "Many of our members design, build, and tune their own racing drones from scratch. From carbon-fibre frames to custom Betaflight tunes, we share knowledge freely and collaborate on hardware innovations.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Underground.KL FPV Drone Racing
      </h1>
      <p className="text-gray-400 mb-10 leading-relaxed">
        Underground.KL is Malaysia premier FPV drone racing chapter, uniting passionate
        pilots, tech enthusiasts, and adrenaline seekers who push the limits of
        high-speed drone racing. As an official Tier 1 MultiGP chapter, we host
        sanctioned races and global qualifiers that place Malaysian pilots on the
        world leaderboard.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title} className="p-6 rounded-xl bg-card-bg border border-card-border">
            <h2 className="text-lg font-semibold text-gray-100 flex items-center gap-2">
              <span>{s.icon}</span> {s.title}
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>

      {/* Join */}
      <div className="mt-16 p-8 rounded-xl bg-card-bg border border-accent/30 text-center">
        <h2 className="text-xl font-bold mb-4">Join the Community</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
          Whether you looking to compete at the highest level, sharpen your piloting
          skills, or simply experience the thrill of FPV racing, Underground.KL is
          the place for you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded-lg hover:bg-accent-dim transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
