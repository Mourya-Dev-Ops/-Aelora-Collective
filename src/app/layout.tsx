import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Playfair_Display, Inter, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/core/Navigation";
import Footer from "@/components/core/Footer";
import SmoothScroll from "@/components/core/SmoothScroll";
import ContextualCursor from "@/components/core/ContextualCursor";
import ThemeSwitcher from "@/components/ThemeSwitcher";

/* ═══ FONTS ═══ */
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmsans = DM_Sans({ variable: "--font-dmsans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aelora Collective | The Art of Gathering",
  description: "A luxury event design & planning collective curating extraordinary celebrations. One World. Many Celebrations.",
  keywords: ["luxury events", "wedding planner", "event design", "celebrations", "Aelora"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [
    bodoni.variable,
    cormorant.variable,
    playfair.variable,
    inter.variable,
    dmsans.variable,
    manrope.variable,
  ].join(" ");

  return (
    <html lang="en" className={`${fontVars} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <ContextualCursor />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <ThemeSwitcher />
        </SmoothScroll>
      </body>
    </html>
  );
}
