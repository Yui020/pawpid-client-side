import Image from "next/image";
import PawBackground from '@/components/pawBackground';

export default function StraysInMyCare() {
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold text-[#911A1C] mb-2">STRAYS IN MY CARE TRACKER</h1>
          <p className="text-lg text-gray-700">
             Monitor and update vaccination status of your adopted stray from PawPid!
          </p>
        </div>



      </div>
    </PawBackground>
  );
}
