import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "../globals.css"; // adjust path if needed

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
  title: "Shelter Home | PawPid",
  description:
    "Manage stray reports, adoption requests, and vaccination records.",
};

export default function ShelterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${poppins.variable} ${fredokaOne.variable} font-sans antialiased bg-[#FFF5F5] min-h-screen`}
    >
      {children}
    </div>
  );
}
