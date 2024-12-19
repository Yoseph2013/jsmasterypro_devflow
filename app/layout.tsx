import type { Metadata } from "next";
import  LocalFont  from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";


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
