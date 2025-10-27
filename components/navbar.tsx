// components/navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/strays-in-my-care', label: 'Strays in my Care' },
    { href: '/pawrfect-match', label: 'Pawrfect Match' },
    { href: '/shelters', label: 'Shelters' },
    { href: '/faqs', label: 'FAQs' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-[#460000] px-6 py-4 flex items-center justify-between shadow-xl shadow-[#460000]-2xl">
      {/* LOGO */}
      <Link href="/" className="hover:opacity-90 transition">
        <Image src="/assets/pawpid-logo.png" alt="Pawpid Logo" width={120} height={40}/>
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} 
            className={`text-[#FFE2E6] hover:text-white transition font-medium pb-1 relative ${
              isActive(link.href) ? 'border-b-3 border-[#FFE2E6]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Notif */}
        <button 
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          className="relative p-2 hover:bg-[#5a0000] rounded-full transition"
          aria-label="Notifications"
        >
          <Image
            src="/icons/notif-icon.png"
            alt="Notifications"
            width={24}
            height={24}
            className="brightness-0 invert"
          />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile*/}
        <Link href="/adopters-profile" className="relative">
          <div className="w-10 h-10 rounded-full border-2 border-[#FFE2E6] overflow-hidden hover:border-white transition">
            <Image 
              src="/assets/profile-image.png" 
              alt="Adopters Profile" 
              width={40} 
              height={40}
              className="object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}