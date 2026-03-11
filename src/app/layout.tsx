import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// 1. Core Global Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Academy | Modern School Portal",
  description: "Advanced UI/UX school platform for students and parents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}>
        {/* 2. ThemeProvider enables the Light/Dark mode logic globally */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange // <-- This is the magic fix for the lag!
        >
          
          <div className="flex flex-col min-h-screen">
            {/* 3. Global Navigation remains visible on all pages */}
            <Navbar />
            
            {/* 4. The 'children' prop renders the current page based on the URL.
                   If you visit /about, the AboutPage component renders here. */}
            <main className="flex-grow bg-background">
              {children}
            </main>

            {/* 5. Global Footer */}
            <Footer />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}