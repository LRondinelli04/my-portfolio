import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-head",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://lucasrondinelli.netlify.app",
  ),
  alternates: {
    canonical:
      "https://lucasrondinelli.netlify.app",
  },
  title: "Portfolio | Lucas Rondinelli",
  description:
    "Estudiante de la carrera Analista Programador Universitario y Licenciatura en Sistemas en la UNLP, haciendo el curso de Desarrollador Front End en EducacionIT, y actualmente estoy trabajando como desarrollador de software para Fiscalía de Estado en convenio con la UNLP.",
  keywords:
    "Lucas Rondinelli, Portfolio, Front End, Trabajo en equipo, Sistemas, UNLP, Analista Programador, Desarrollador, EducacionIT, Software, Argentina, Pasantía",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    locale: "es_ES",
    siteName: "Portfolio | Lucas Rondinelli",
    type: "website",
    title: "Portfolio | Lucas Rondinelli",
    description:
      "Estudiante de la carrera Analista Programador Universitario y Licenciatura en Sistemas en la UNLP, haciendo el curso de Desarrollador Front End en EducacionIT, y actualmente estoy trabajando como desarrollador de software para Fiscalía de Estado en convenio con la UNLP.",
    url: "https://lucasrondinelli.netlify.app/",
    /* images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ], */
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Lucas Rondinelli",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${spaceGrotesk.variable} ${dmSans.variable} ${inter.variable}`}
    >
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
