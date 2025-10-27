import Image from "next/image";
import PawBackground from '@/components/pawBackground';

export default function Home() {
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-[#911A1C] mb-2">WELCOME BACK!</h1>
          <p className="text-lg text-gray-700">
             Ready to meet your pawrfect match?
          </p>
        </div>



      </div>
    </PawBackground>
  );
}
