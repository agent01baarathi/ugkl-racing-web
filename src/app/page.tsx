import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const features = [
  {
    title: "Events for Every Pilot",
    description:
      "We organise events for every stage of your FPV journey. Sim racing, tiny whoops, open spec and pro spec where everyone can join.",
  },
  {
    title: "MultiGP Tier 1 Chapter",
    description:
      "As a tier 1 MultiGP chapter, we host multiple global qualifiers which places every pilot on a global leaderboard.",
  },
  {
    title: "Knowledge & Community",
    description:
      "The community has been an amazing source of knowledge on how to build and fly high speed, robust and efficient racing drones.",
  },
];

const testimonials = [
  {
    title: "Awesome Community",
    quote: "Saved a lot of time by learning from the experts.",
    author: "Imad FPV",
  },
  {
    title: "Helpful!",
    quote:
      "I have learnt to fly in a safe and helpful environment. I started off in a simulator and finished podium.",
    author: "JanZ",
  },
  {
    title: "Experts!",
    quote:
      "Hired these guys for an FPV racing event. Did not regret. Professional and skillful.",
    author: "Maria FPV",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl bg-card-bg border border-card-border"
            >
              <h3 className="text-lg font-semibold text-accent">{f.title}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            What Pilots Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-6 rounded-xl bg-card-bg border border-card-border"
              >
                <h3 className="font-semibold text-accent">{t.title}</h3>
                <p className="mt-3 text-muted text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-body">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Built by the community for the community
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Create your MultiGP account and start racing with us.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-contrast-on-accent font-semibold rounded-lg hover:bg-accent-dim transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
