// 'use client'; // Ensure this is marked as a client component


// RootLayout.tsx
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/themes-provider";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { DefaultSeo } from "next-seo";
import SEO from "@/seo.config"; // Archivo con tu configuración SEO global
import { useEffect } from "react";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.satcartagena.oagrd.org'),
  title: {
    default: "Sistema de Alertas Tempranas - SatApp Oficial | OAGRD Cartagena",
    template: "%s | SatApp Oficial OAGRD"
  },
  description: "Sistema de Alertas Tempranas de la Oficina Asesora para la Gestión del Riesgo de Desastres de Cartagena de Indias (OAGRD). SatApp Oficial (org.oagrd.satapp) - Universidad de Cartagena. Herramienta para prevención y atención de emergencias.",
  applicationName: "SatApp Oficial",
  authors: [
    { name: "OAGRD - Oficina Asesora para la Gestión del Riesgo de Desastres", url: "https://www.satcartagena.oagrd.org" },
    { name: "Universidad de Cartagena" }
  ],
  generator: "Next.js",
  keywords: [
    "SatApp Oficial",
    "org.oagrd.satapp",
    "Sistema de Alertas Tempranas",
    "OAGRD",
    "Cartagena",
    "Universidad de Cartagena",
    "Gestión del Riesgo",
    "Emergencias Cartagena",
    "Alertas Tempranas Colombia",
    "Prevención de Desastres"
  ],
  referrer: "origin-when-cross-origin",
  creator: "OAGRD - Universidad de Cartagena",
  publisher: "OAGRD - Alcaldía de Cartagena de Indias",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.satcartagena.oagrd.org',
    siteName: 'SatApp Oficial - OAGRD',
    title: 'Sistema de Alertas Tempranas - SatApp Oficial | OAGRD Cartagena',
    description: 'Sistema de Alertas Tempranas de Cartagena. SatApp Oficial (org.oagrd.satapp) desarrollado por OAGRD - Universidad de Cartagena.',
    images: [
      {
        url: '/oagrd-logo.png',
        width: 1200,
        height: 630,
        alt: 'SatApp Oficial - OAGRD Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SatApp Oficial - Sistema de Alertas Tempranas',
    description: 'Sistema de Alertas Tempranas de Cartagena - OAGRD Universidad de Cartagena',
    images: ['/oagrd-logo.png'],
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
  alternates: {
    canonical: 'https://www.satcartagena.oagrd.org',
  },
  other: {
    'application-name': 'SatApp Oficial',
    'app-id': 'org.oagrd.satapp',
    'developer': 'OAGRD - Oficina Asesora para la Gestión del Riesgo de Desastres',
    'developer-email': 'gestionriesgo2023@unicartagena.edu.co',
    'contact-email': 'contacto@oagrd.org',
    'organization': 'Universidad de Cartagena - OAGRD',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // useEffect(() => {
  //   // This ensures the component is hydrated in the client
  // }, []);

  
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="es" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async></script>

        {/* Default SEO Settings */}
        {/* <DefaultSeo {...SEO} /> */}
      </head>
      <body className={font.className}>         
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
