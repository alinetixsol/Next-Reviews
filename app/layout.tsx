import type { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { orbitron, exo2 } from "@/app/fonts";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <head></head>
      <body className="px-4 py-3 flex flex-col min-h-screen bg-orange-50">
        <header>
          <NavBar />
        </header>
        <main className="py-5 grow">{children}</main>
        <footer className="text-center text-xs border-t py-3 text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>{" "}
          | Deployment To Vercel
        </footer>
      </body>
    </html>
  );
}
