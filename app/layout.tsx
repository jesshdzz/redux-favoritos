import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "@/app/components";
import type { Metadata } from "next";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FavoriteDog",
  description: "Una aplicación para guardar tus perros favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grid min-h-dvh grid-rows-[auto_1fr_auto]`}>
        <Header />
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
