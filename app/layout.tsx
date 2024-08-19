import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const custom_fonts = localFont({
  src: [
    {
      path: "../public/fonts/Supernormale W00 Bold/Web Fonts/903510a18516ee3cb9d7ec077087c0c4.ttf",
      // weight: '200'
    },
  ],
  variable: "--font-helldiver",
});

export const metadata: Metadata = {
  title: "Radom Helldivers",
  description: "Radom Helldivers",
  // icons:"/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${custom_fonts.variable} font-sans`}>{children}</body>
    </html>
  );
}
