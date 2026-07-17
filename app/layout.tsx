// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

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
    default: "Black Tech Expo Hall of Fame",
    template: "%s | Black Tech Expo Hall of Fame",
  },

  description:
    "Celebrating exceptional individuals, community champions, innovators, and leaders shaping the future through the Black Tech Expo Hall of Fame.",

  icons: {
    icon: [
      {
        url: "/logo/hlogo.svg",
      },
    ],
    shortcut: "/logo/hlogo.svg",
    apple: "/logo/hlogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navigation />

        {children}
      </body>
    </html>
  );
}