import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UGKL Racing — Underground.KL FPV Drone Racing",
    template: "%s | UGKL Racing",
  },
  description:
    "Malaysia's premier FPV drone racing community. Join Underground.KL for competitive racing, global qualifiers, and innovation in drone technology.",
  openGraph: {
    title: "UGKL Racing — Underground.KL FPV Drone Racing",
    description:
      "Malaysia's premier FPV drone racing community. Competitive racing, global qualifiers, and drone tech innovation.",
    url: "https://ugklracing.com",
    siteName: "UGKL Racing",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UGKL Racing — Underground.KL FPV Drone Racing",
    description:
      "Malaysia's premier FPV drone racing community.",
  },
  metadataBase: new URL("https://ugklracing.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
