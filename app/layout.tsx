import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  /* metadataBase: new URL("https://meikopoulos.com"), */ // URL del vercel
  alternates: {
    /* canonical: "https://meikopoulos.com", */ // URL del vercel
  },
  title: "Lucas Rondinelli - Product Designer in AI, Web3, and Finance",
  description:
    "Lucas Rondinelli is a Product designer, developer & founder.",
  keywords:
    "Lucas Rondinelli, Product Designer, AI, Web3, Finance, User Experience, UI/UX Design, Design Systems, Front-end Development, Decentralized Finance, DeFi, Swoop Exchange, Vela Exchange, Stealth AI Startup, Technology, Innovation, Human-Centered Design",
  openGraph: {
    locale: "en_US",
    siteName: "Lucas Rondinelli",
    type: "website",
    title: "Lucas Rondinelli",
    description:
      "Lucas Rondinelli is a Product designer, developer & founder.",
    /* url: "https://meikopoulos.com", */ // URL del vercel
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Rondinelli",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
