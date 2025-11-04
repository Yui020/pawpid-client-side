"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function ConditionalNavbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hiddenRoutes = ["/shelter-module", "/auth"];

  const shouldHideNavbar = hiddenRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <main
        className={`min-h-[calc(100vh-72px)] ${
          shouldHideNavbar ? "pt-0" : "lg:pt-20 md:pt-20 pt-30"
        }`}
      >
        {children}
      </main>
    </>
  );
}
