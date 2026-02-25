import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.businessName} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
        style={
          {
            "--color-primary": siteConfig.colors.primary,
            "--color-primary-hover": siteConfig.colors.primaryHover,
            "--color-secondary": siteConfig.colors.secondary,
            "--color-accent": siteConfig.colors.accent,
            "--color-background": siteConfig.colors.background,
            "--color-text": siteConfig.colors.text,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
