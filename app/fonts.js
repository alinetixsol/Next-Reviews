import { Orbitron, Exo_2, Pacifico } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  variable: "--font-orbitron",
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  variable: "--font-exo2",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  variable: "--font-pacifico",
  weight: ["400"],
});
