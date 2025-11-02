import Image from "next/image";
import { redirect } from "next/navigation";
import PawBackground from '@/components/pawBackground';

export default function Home() {
  const isLoggedIn = false;
  if (!isLoggedIn) redirect("/sign-in");
  
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-crimsonRed mb-2">WELCOME BACK!</h1>
          <p className="text-lg text-gray-700">
             Ready to meet your pawrfect match?
          </p>
        </div>

      </div>
    </PawBackground>
  );
}
