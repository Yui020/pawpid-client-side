'use client';

import Image from "next/image";
import PawBackground from '@/components/pawBackground';
import AdopterBasicInfo from "@/components/adopterBasicInfo";
import AIStrayCard from "@/components/stray-card1";
import { useEffect, useState } from "react";

const userInfo = {
  fullName: 'Kang Seulgi',
  birthdate: 'MM/DD/YYYY',
  phone: '00000-000-000',
  email: 'kseulgi@gmail.com',
  address: 'Forbes Park, Makati, Metro Manila, Philippines',
  imageUrl: '/api/placeholder/200/200'
};

export default function MatchingResults() {
  const [result, setResult] = useState<any[]>([]);
  const [selectedStray, setSelectedStray] = useState<any | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("matchingResult");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setResult(parsed);
      } catch (error) {
        console.error("Failed to parse stored matching result:", error);
      }
    }
  }, []);

  const handleSelectStray = (stray: any) => {
    setSelectedStray(stray);
  };

  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl text-center font-extrabold text-[#911A1C] mb-2">
            PAWRFECT MATCHING RESULTS
          </h1>
          <p className="text-lg text-gray-700">
            Discover pets that fit your lifestyle and preferences through our compatibility scoring system.
          </p>
        </div>

        {/* MAIN CONTENT */}
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

            {result && result.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {result.map((stray, index) => {
                  const isSelected = selectedStray?.id === stray.id; // or stray.Stray_id depending on your data
                  return (
                    <div
                      key={index}
                      onClick={() => handleSelectStray(stray)}
                      className={`cursor-pointer rounded-lg transition-all duration-200 border-4 
                        ${
                          isSelected
                            ? "border-[#911A1C] shadow-lg scale-105"
                            : "border-transparent hover:border-[#911A1C]/40 hover:scale-105"
                        }`}
                    >
                      <AIStrayCard stray={stray} />
                      {isSelected && (
                        <div className="text-center mt-2 text-[#911A1C] font-semibold">
                          ✓ Selected
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">
                No matching results found. Please go back and try again.
              </p>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between mt-10">
              <button
                className="flex items-center gap-2 border-2 border-[#911A1C] text-[#911A1C] font-semibold px-6 py-2 rounded-md hover:bg-[#911A1C] hover:text-white transition"
                onClick={() => history.back()}
              >
                ← Back
              </button>
              <button
                disabled={!selectedStray}
                className={`flex items-center gap-2 font-semibold px-6 py-2 rounded-md transition ${
                  selectedStray
                    ? "bg-[#911A1C] text-white hover:bg-[#6d1315]"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (selectedStray) {
                    console.log("Selected stray:", selectedStray);
                    // you can route or save the selected stray here
                  }
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </PawBackground>
  );
}
