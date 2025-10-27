import Image from "next/image";
import PawBackground from '@/components/pawBackground';
import AdopterBasicInfo from "@/components/adopterBasicInfo";
import AIStrayCard from "@/components/stray-card";

  const userInfo = {
    fullName: 'Kang Seulgi',
    birthdate: 'MM/DD/YYYY',
    phone: '00000-000-000',
    email: 'kseulgi@gmail.com',
    address: 'Forbes Park, Makati, Metro Manila, Philippines',
    imageUrl: '/api/placeholder/200/200'
  };

  const strayMatches = [
    {
      name: "RUSSEL",
      match: "45%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "./assets/strayImage.png",
    },
    {
      name: "ELGIN",
      match: "45%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "./assets/strayImage.png",
    },
    {
      name: "JUDE",
      match: "45%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "./assets/strayImage.png",
    },
  ];

export default function MatchingResults() {
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl center font-extrabold text-[#911A1C] mb-2">PAWRFECT MATCHING RESULTS</h1>
          <p className="text-lg text-gray-700">
             MDiscover pets that fit your lifestyle and preferences through our compatibility scoring system.
          </p>
        </div>

        {/* MAIN CONTENT: INFO + MATCH RESULTS */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: USER INFO */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <AdopterBasicInfo {...userInfo} />
          </div>

          {/* RIGHT: STRAY MATCHES */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#911A1C] mb-4 tracking-wide">
              HERE ARE YOUR MATCHES!
            </h2>
            <hr className="border-[#911A1C] border-t-2 mb-6 w-full" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {strayMatches.map((stray, index) => (
                <AIStrayCard key={index} stray={stray} />
              ))}
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between mt-10">
              <button className="flex items-center gap-2 border-2 border-[#911A1C] text-[#911A1C] font-semibold px-6 py-2 rounded-md hover:bg-[#911A1C] hover:text-white transition">
                ← Back
              </button>
              <button className="flex items-center gap-2 bg-[#911A1C] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#6d1315] transition">
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </PawBackground>
  );
}
