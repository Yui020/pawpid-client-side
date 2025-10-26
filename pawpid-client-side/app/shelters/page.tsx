import Image from "next/image";
import PawBackground from '@/components/pawBackground';

export default function Shelters() {
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl center font-extrabold text-[#911A1C] mb-2">PARTNERED SHELTERS & FACILITIES</h1>
          <p className="text-lg text-gray-700">
             Meet the shelters partnering with PawPid.
          </p>
        </div>



      </div>
    </PawBackground>
  );
}
