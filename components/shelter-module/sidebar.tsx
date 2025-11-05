"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Home, Bell, PawPrint, Users, User } from "lucide-react";

export default function ShelterSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/shelter-module/home", label: "Home", icon: <Home size={20} /> },
    { href: "/shelter-module/adoption-requests", label: "Adoption Requests", icon: <PawPrint size={20} /> },
    { href: "/shelter-module/adopter-tracker", label: "Adopters Pet Tracker", icon: <Users size={20} /> },
    // { href: "/shelter-module/notifications", label: "Notifications", icon: <Bell size={20} /> },
    // { href: "/shelter-module/profile", label: "Shelter Profile", icon: <User size={20} /> },
  ];

  const handleLogout = () => {
    //  Add session clearing logic here
    router.push("/auth/sign-in");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-darkRed text-bgColor flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="items-center gap-3 px-6 py-6 mt-5">
          <Image
            src="/assets/pawpid-logo.png"
            alt="Pawpid Logo"
            width={170}
            height={170}
            className="mx-auto block mb-5"
          />
          <div>
            <p className="text-base text-center font-poppins opacity-80 leading-none">
              Where Tails Wag<br />and Hearts Connect
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="mt-6 flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-poppins font-medium ${
                  active
                    ? "mx-3 bg-pastelPink text-darkRed"
                    : "mx-3 text-whiteRed hover:bg-pastelPink/60 hover:text-darkRed"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full hover:bg-pastelPink/60 hover:text-darkRed transition py-3 px-4 rounded-xl font-poppins font-semibold"
        >
          <LogOut size={20} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
