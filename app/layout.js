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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}