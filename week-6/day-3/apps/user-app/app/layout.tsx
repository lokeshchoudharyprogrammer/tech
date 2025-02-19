"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { RecoilRoot } from "recoil";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilRoot>

      <Providers>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      </Providers>
      </RecoilRoot>
    </html>
  );
}
