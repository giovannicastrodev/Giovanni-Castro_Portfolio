import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giovanni Castro | Assistente de Suporte a Sistemas & Operações de TI",
  description:
    "Portfólio de Giovanni Castro - Especialista em Suporte a Sistemas, Estabilidade Operacional, Consultas SQL e Automações com Python na Nexdom Healthtech.",
  keywords: [
    "Giovanni Castro",
    "Assistente de Suporte a Sistemas",
    "Suporte de TI",
    "Nexdom Healthtech",
    "Dell Technologies",
    "SQL Server",
    "Python",
    "Estabilidade Operacional",
    "SLA",
  ],
  authors: [{ name: "Giovanni Castro" }],
  openGraph: {
    title: "Giovanni Castro | Assistente de Suporte a Sistemas",
    description:
      "Estabilidade operacional, análise técnica de incidentes, consultas analíticas em SQL Server e automações com Python.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontSans.variable} ${fontMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#04060a] text-zinc-100 font-sans antialiased selection:bg-orange-500/30 selection:text-orange-200">
        {children}
      </body>
    </html>
  );
}
