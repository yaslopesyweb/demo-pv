import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Poliedro Curso - Pré-Vestibular",
  description: "Prepare-se para os principais vestibulares do país com a qualidade reconhecida do Poliedro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ubuntu.className}>
        <Navbar />
        <main className="pt-30 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}