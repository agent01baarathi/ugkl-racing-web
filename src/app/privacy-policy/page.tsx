import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the UGKL Racing website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-400 leading-relaxed">
        <p>
          <strong className="text-gray-200">Last updated:</strong> January 1, 2025
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">1. Information We Collect</h2>
        <p>
          When you visit our website or participate in our events, we may collect information you
          provide directly, such as your name, email address, and pilot callsign when you register
          for events or contact us through our website. We also collect standard web analytics data
          including pages visited and device information.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Manage event registrations and race results</li>
          <li>Communicate race schedules and community updates</li>
          <li>Publish official race results and leaderboards</li>
          <li>Improve our website and events</li>
          <li>Respond to your enquiries</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">3. Race Results & Public Information</h2>
        <p>
          Race results, pilot callsigns, and event participation data are published publicly on our
          website and shared with MultiGP for global leaderboard integration. By participating in
          UGKL events, you consent to the publication of your race results and pilot callsign.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">4. Third-Party Services</h2>
        <p>
          We use third-party services including MultiGP for race management, and standard web
          hosting providers. These services may collect data according to their own privacy
          policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">5. Cookies</h2>
        <p>
          Our website may use cookies and similar technologies for basic functionality and
          analytics. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">6. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information. However, no method of
          electronic transmission or storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">7. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information by
          contacting us. We will respond to your request within a reasonable timeframe.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">8. Contact</h2>
        <p>
          For any privacy-related questions, please contact us via WhatsApp at{" "}
          <a
            href="https://wa.me/60122218454"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            +60 12-221 8454
          </a>{" "}
          or through our contact page.
        </p>

        <h2 className="text-xl font-semibold text-gray-200 mt-8">9. Changes</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this
          page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
