import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-aelora-bg text-aelora-ivory font-body selection:bg-aelora-gold selection:text-aelora-bg">
        {children}
      </body>
    </html>
  );
}
