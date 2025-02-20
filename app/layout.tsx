import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Musluhan Cavus",
  description: "Generated by Musluhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        >
            {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
