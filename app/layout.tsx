import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Editor Profissional de Vídeos",
  description: "Transforme seus vídeos em conteúdo profissional para redes sociais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(
        geist.className,
        "min-h-screen bg-custom-navy antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}
