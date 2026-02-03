import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { ThemeProvider } from "@/components/common/ThemeProvider";
import ReactLenis from "lenis/react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/Landing/Footer";
import localFont from 'next/font/local' 

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daksh | Software Engineer",
  description: "Designer & Full-stack Developer building SnapMod",
  icons: {
    icon: "/logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`font-hanken-grotesk antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <ReactLenis root>
              <Navbar />
                {children}
              <Footer />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
      </ViewTransitions>
  );
}
