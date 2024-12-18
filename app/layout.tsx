import type { Metadata } from "next";
import  LocalFont  from "next/font/local";
import "./globals.css";


const inter = LocalFont({
  src: './fonts/InterVF.ttf',
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
  
});
const spacegrotesk = LocalFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700 ",
});
export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better Version of Stack Overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spacegrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
