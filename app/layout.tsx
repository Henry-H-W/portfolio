import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Wang",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="app">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
