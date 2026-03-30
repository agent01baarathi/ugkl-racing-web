import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(174,234,0,0.08),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Malaysia Fastest Growing{" "}
            <span className="text-accent">FPV Drone Racing</span>{" "}
            Community
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl">
            Join Underground.KL — compete in global qualifiers, build cutting-edge racing drones, and push the limits of FPV flight.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/racing-events"
              className="inline-flex items-center px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded-lg hover:bg-accent-dim transition-colors"
            >
              View Events
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-card-border text-gray-300 font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
