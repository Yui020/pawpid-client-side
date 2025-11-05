'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/strays-in-my-care', label: 'Strays in my Care' },
    { href: '/pawrfect-match', label: 'Pawrfect Match' },
    { href: '/shelters', label: 'Shelters' },
    { href: '/faqs', label: 'FAQs' },
  ];

  const isActive = (href: string) => pathname === href;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Logout
  const handleLogout = () => {
    // Replace with actual logout logic
    router.push('/auth/sign-in');
  };

  return (
    <nav className="bg-darkRed fixed font-poppins top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link href="/" className="hover:opacity-90 transition">
        <Image src="/assets/pawpid-logo.png" alt="Pawpid Logo" width={120} height={40} />
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[#FFE2E6] hover:text-white transition font-medium pb-1 relative ${
              isActive(link.href) ? 'border-b-3 border-[#FFE2E6]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* PROFILE MENU */}
      <div className="relative" ref={profileRef}>
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-10 h-10 rounded-full border-2 border-[#FFE2E6] overflow-hidden hover:border-white transition focus:outline-none"
        >
          <Image
            src="/assets/profile-image.png"
            alt="Adopters Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </button>

        {/* DROPDOWN MENU */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border-2 border-crimsonRed py-2 z-50">
            <Link
              href="/adopters-profile"
              className="flex items-center gap-3 mx-3 px-4 py-2 text-darkRed hover:bg-darkRed hover:text-whiteRed  transition"
              onClick={() => setIsProfileOpen(false)}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>

            <hr className="my-1 mx-3 border-crimsonRed border" />

            <button
              onClick={handleLogout}
              className="w-41 text-left flex items-center gap-3 mx-3 px-4 py-2 text-darkRed hover:bg-darkRed hover:text-whiteRed transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
