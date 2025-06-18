import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://my-portfolio-bpck3wf85-lrondinelli04s-projects.vercel.app"
  ),
  alternates: {
    canonical:
      "https://my-portfolio-bpck3wf85-lrondinelli04s-projects.vercel.app",
  },
  title: "Portfolio | Lucas Rondinelli",
  description:
    "Estudiante de la carrera Analista Programador Universitario y Licenciatura en Sistemas en la UNLP, haciendo el curso de Desarrollador Front End en EducacionIT, y actualmente realizando una pasantía como desarrollador de software para Fiscalía de Estado en convenio con la UNLP.",
  keywords:
    "Lucas Rondinelli, Portfolio, Front End, Trabajo en equipo, Sistemas, UNLP, Analista Programador, Desarrollador, EducacionIT, Software, Argentina, Pasantía",
  openGraph: {
    locale: "es_ES",
    siteName: "Portfolio | Lucas Rondinelli",
    type: "website",
    title: "Portfolio | Lucas Rondinelli",
    description:
      "Estudiante de la carrera Analista Programador Universitario y Licenciatura en Sistemas en la UNLP, haciendo el curso de Desarrollador Front End en EducacionIT, y actualmente realizando una pasantía como desarrollador de software para Fiscalía de Estado en convenio con la UNLP.",
    url: "https://my-portfolio-bpck3wf85-lrondinelli04s-projects.vercel.app",
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
