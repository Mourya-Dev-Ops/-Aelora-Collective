import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Playfair_Display, Inter, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmsans = DM_Sans({ variable: "--font-dmsans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aelora Collective | The Art of Gathering",
  description: "A luxury event design & planning collective curating extraordinary celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${cormorant.variable} ${playfair.variable} ${inter.variable} ${dmsans.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-body selection:bg-aelora-accent selection:text-aelora-bg">
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
