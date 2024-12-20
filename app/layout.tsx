import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";

const inter = LocalFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: " 100 200 300 400 500 600 700 800 900",
});

const spacegrotesk = LocalFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: " 300 400 500 600 700 ",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A comminity-drive plateform for asking and answering programming questions.Get help,share knowledge, and collabrate with developers from around the world.Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-log.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spacegrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
