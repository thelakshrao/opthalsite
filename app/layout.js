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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Eyevora Eye Care — Advanced Visual Ophthalmology",
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
    // overflow-x-clip, not overflow-x-hidden — see globals.css comment.
    // hidden here would force html into an internal scroll container and
    // break position:sticky further down the tree (EyeScrollSection).
    <html lang="en" className="overflow-x-clip">
      <head>
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-full overflow-x-clip`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}