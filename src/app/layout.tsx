// 'use client'; // Ensure this is marked as a client component


// RootLayout.tsx
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/themes-provider";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultSeo } from "next-seo";
import SEO from "@/seo.config"; // Archivo con tu configuración SEO global
import { useEffect } from "react";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Alertas Tempranas - SatApp Cartagena", // Título predeterminado para el layout
  description: "El Sistema de Alertas Tempranas de la Oficina Asesora para la Gestión del Riesgo de Desastres de Cartagena de Indias (OAGRD) es una herramienta fundamental para la prevención y atención de emergencias en la ciudad",
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
