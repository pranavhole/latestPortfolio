import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import FloatingChat from "@/components/main/FloatingChat";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Hole",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
