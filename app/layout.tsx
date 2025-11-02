import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fredokaOne = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PawPid",
  description: "Where Tails Wag and Hearts Connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${fredokaOne.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
