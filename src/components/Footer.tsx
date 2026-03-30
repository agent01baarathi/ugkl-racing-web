import Link from "next/link";

const footerLinks = [
  { href: "/racing-events", label: "Racing Events" },
  { href: "/results", label: "Results" },
  { href: "/innovation", label: "Innovation" },
  { href: "/about", label: "About" },
  { href: "/news", label: "FPV News" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wider text-accent">
              UGKL
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              As FPV pilots, we share a passion for flight and innovation. Underground.KL brings Malaysia&apos;s drone racing community together.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <p className="text-sm text-gray-400">
              WhatsApp:{" "}
              <a
                href="https://wa.me/60122218454"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +60 12-221 8454
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Join us on MultiGP and start racing!
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-card-border text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Underground.KL FPV Drone Racing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
