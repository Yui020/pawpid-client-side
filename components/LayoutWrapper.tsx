"use client";

import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/sign-in" || pathname === "/sign-up";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={hideNavbar ? "min-h-screen" : "min-h-[calc(100vh-72px)] pt-[72px]"}>
        {children}
      </main>
    </>
  );
}
