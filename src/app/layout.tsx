import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/website/template/Footer";
import Header from "@/components/website/template/Header";
import HeaderContextProvider from "@/providers/HeaderContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprenda Francês Rápido | Aulas Online com Professora Especialista",
  description:
    "Descubra como aprender francês de forma rápida e eficiente com aulas online personalizadas. Ideal para viagens, carreira internacional e estudos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <HeaderContextProvider>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </HeaderContextProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
