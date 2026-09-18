import type { Metadata } from "next";
import { Anton, Antonio, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const antonio = Antonio({ subsets: ['latin'], variable: '--font-antonio' });
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });

export const metadata: Metadata = {
  title: "Oscar Christopher — Digital Designer",
  description: "Personal portfolio website of Oscar Christopher, digital designer and Video Editor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, antonio.variable, anton.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9F9FB] text-[#18181B] selection:bg-[#5B61F4] selection:text-white">{children}</body>
    </html>
  );
}

