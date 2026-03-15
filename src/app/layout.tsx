import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import AnimatedCursor from "@/components/ui/AnimatedCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tatikonda Karthikeya | AI Engineer & ML Researcher",
  description: "Portfolio of Tatikonda Karthikeya - AI Engineer, Machine Learning Researcher, and IoT Innovator building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <LenisProvider>
          <AnimatedCursor />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
