import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { ThemeProvider } from "@/components/common/ThemeProvider";
import ReactLenis from "lenis/react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/Landing/Footer";
import localFont from 'next/font/local' 
import { Analytics } from "@vercel/analytics/next"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

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
              <div className="site-dotted-background" >
              <DottedGlowBackground
                gap={5}
                radius={1}
                opacity={0.45}
                color="rgba(100, 116, 139, 0.3)"
                darkColor="rgba(203, 213, 225, 0.25)"
                glowColor="rgba(99, 102, 241, 0.65)"
                darkGlowColor="rgba(129, 140, 248, 0.75)"
              />
            </div>
              <div className="site-content">
              <Navbar />
              
              <Analytics />
              {children}
              <Footer />
            </div>
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
      </ViewTransitions>
  );
}
