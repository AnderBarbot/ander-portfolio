import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ander Barbot Portfolio',
  description: 'Personal professional website for Ander Barbot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem={true}>
          <Navbar/>
          <Contact/>
          <main className="min-h-[calc(100vh-120px)] flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}