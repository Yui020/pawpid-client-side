'use client';

import React, { useEffect, useState } from "react";
import PawBackground from '@/components/pawBackground';
import AdopterBasicInfo from "@/components/adopterBasicInfo";
import AIStrayCard from "@/components/stray-card";
import { matchAdoptertoStrays } from "@/app/__backend/match_ai_service/getMatchingPrediction";

interface MatchingResultsProps {
  adopterDetails: any;
  species_type: string;
  used_ai: boolean;
}

export default function MatchingResults({
  adopterDetails,
  species_type,
  used_ai
}: MatchingResultsProps) {
  const [strays, setStrays] = useState<any[]>([]);

  const userInfo = {
    fullName: 'Kang Seulgi',
    birthdate: 'MM/DD/YYYY',
    phone: '00000-000-000',
    email: 'kseulgi@gmail.com',
    address: 'Forbes Park, Makati, Metro Manila, Philippines',
    imageUrl: '/api/placeholder/200/200'
  };

  useEffect(() => {
    async function fetchStrays() {
      const data = await matchAdoptertoStrays(adopterDetails, species_type, used_ai);
      setStrays(data);
    }
    fetchStrays();
  }, [adopterDetails, species_type, used_ai]);

  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        <div className="mb-8">
          <h1 className="text-5xl text-center font-extrabold text-[#911A1C] mb-2">
            PAWRFECT MATCHING RESULTS
          </h1>
          <p className="text-lg text-gray-700">
            Discover pets that fit your lifestyle and preferences through our compatibility scoring system.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <AdopterBasicInfo {...userInfo} />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#911A1C] mb-4 tracking-wide">
              HERE ARE YOUR MATCHES!
            </h2>
            <hr className="border-[#911A1C] border-t-2 mb-6 w-full" />

            {strays && strays.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {strays.map((stray, index) => (
                  <AIStrayCard key={index} stray={stray} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No matching results found. Please go back and try again.
              </p>
            )}

            <div className="flex justify-between mt-10">
              <button
                className="flex items-center gap-2 border-2 border-[#911A1C] text-[#911A1C] font-semibold px-6 py-2 rounded-md hover:bg-[#911A1C] hover:text-white transition"
                onClick={() => history.back()}
              >
                ← Back
              </button>
              <button
                className="flex items-center gap-2 bg-[#911A1C] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#6d1315] transition"
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
