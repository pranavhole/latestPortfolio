import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import FloatingChat from "@/components/main/FloatingChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Hole — Full-Stack Engineer",
  description: "Full-Stack Engineer specialising in scalable web apps, AI products, and Web3. Based in Mumbai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <div className="grid-overlay" />
        <div className="scanline" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />
        <Navbar />
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
