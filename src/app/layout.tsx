import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ModeToggle from "@/components/ui/ModeToggle";
import Navbar from "@/components/Navbar"; // Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XYZ Academy | Modern School Portal",
  description: "Advanced UI/UX school platform for students and parents.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          bg-background 
          text-foreground
          selection:bg-primary/10
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 1. Sticky/Floating Navbar */}
          <Navbar />

          {/* 2. Main Content Wrapper */}
          {/* flex-1 ensures the footer is pushed to the bottom on short pages */}
          <main className="relative flex-1 flex flex-col">
            {children}
          </main>

          {/* 3. Global Footer */}
          <Footer />

          {/* 4. Optimized Floating Toggle Container */}
          <aside 
            className="fixed bottom-6 right-6 z-[100] flex items-center justify-center"
            aria-label="Theme Customization"
          >
            <ModeToggle />
          </aside>
        </ThemeProvider>
      </body>
    </html>
  );
}