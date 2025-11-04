"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import PawBackground from "@/components/pawBackground";
import AIStrayForm from "@/components/ai-stray-form";
import GeneratedStrayImage from "@/components/generated-image";
import AIStrayCard from "@/components/stray-card";

export default function AIPetGenerator() {
  const router = useRouter();
  
  const [generatedImage, setGeneratedImage] = useState<string>("/images/sample-dog.png");
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);
  
  const [strays, setStrays] = useState<any[]>([
    {
      name: "TINA",
      match: "45%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "/assets/strayImage.png",
    },
    {
      name: "TINA",
      match: "90%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "/assets/strayImage.png",
    },
    {
      name: "TINA",
      match: "78%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "/assets/strayImage.png",
    },
  ]);

  const handleGenerate = (formData: any) => {
    console.log("Form submitted:", formData);
    
    // AI generation logic here
    setGeneratedImage("/assets/strayImage.png");
    setHasGenerated(true);
  };

  const handleBack = () => {
    // Navigate back to pawrfect-match page at step 4 (preferences)
    router.push("/pawrfect-match?step=4");
  };

  const handleNext = () => {
    if (hasGenerated) {
      // Navigate to pawrfect-match page at step 5 (confirmation)
      router.push("/pawrfect-match?step=5");
    }
  };

  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-10 relative z-10">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">
            AI PET GENERATOR
          </h1>
          <p className="text-base font-poppins text-blackRed">
            Visualize your dream pet by describing your preferences. PawPid's AI will generate
            an image and suggest real strays with similar features.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-10 items-start">
          
          {/* LEFT: FORM */}
          <div>
            <AIStrayForm onGenerate={handleGenerate} />
          </div>
          
          {/* RIGHT */}
          <div className="grid md:grid-row-2 gap-5 items-start">
            
            {/* GENERATED IMAGE */}
            <div className="flex flex-col items-center justify-center">
              <GeneratedStrayImage imageUrl={generatedImage} />
            </div>
            
            {/* STRAY MATCH RESULTS */}
            <div>
              <h2 className="text-center font-extrabold text-[#911A1C] text-lg mb-4 tracking-wide">
                AVAILABLE PAWPID STRAYS THAT MATCH YOUR PREFERENCES:
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {strays.map((stray, index) => (
                  <AIStrayCard key={index} stray={stray} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between mt-10">
          <button 
            type="button"
            onClick={handleBack}
            className="border-2 border-crimsonRed text-crimsonRed px-8 py-2 rounded-md hover:bg-darkRed hover:text-white transition-colors font-semibold"
          >
            ← Back
          </button>
          <button 
            type="button"
            onClick={handleNext}
            disabled={!hasGenerated}
            className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
              hasGenerated
                ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next →
          </button>
        </div>

      </div>
    </PawBackground>
  );
}