import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { Footer } from "../components/Footer";
import { Providers } from "@/store/Providers";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sweeps",
  description: "WIN PRIZES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={cn(archivo.className, "flex flex-col bg-white")}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </Providers>
  );
}
