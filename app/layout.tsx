// app/layout.tsx

import type { Metadata } from "next";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";
import "./globals.css";
import ConditionalNavigation from "./components/ConditionalNavigation";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <ConditionalNavigation />

        {children}
      </body>
    </html>
  );
}
