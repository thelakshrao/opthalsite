import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Precision Eye Care — Advanced Visual Ophthalmology",
  description:
    "Advanced clinical ophthalmology visualized with precision. Interactive 300-frame anatomical ocular model, sub-micron diagnostics, and microsurgical innovation.",
  keywords: [
    "Ophthalmology",
    "Eye Care",
    "Cornea",
    "Retina",
    "Cataract Surgery",
    "Ocular Anatomy",
    "Microsurgery",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload the very first eye-animation frame for each breakpoint so
            it starts downloading before React mounts, eliminating the black
            flash that shows while EyeAnimation.jsx figures out isMobile and
            fetches its placeholder image. */}
        <link
          rel="preload"
          as="image"
          href="/eye-animation/desktop/ezgif-frame-001.webp"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/eye-animation/mobile/ezgif-frame-001.webp"
          media="(max-width: 767px)"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}