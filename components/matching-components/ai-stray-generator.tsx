"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PawBackground from "@/components/pawBackground";
import AIStrayForm from "@/components/ai-stray-form";
import GeneratedStrayImage from "@/components/generated-image";
import AIStrayCard from "@/components/stray-card";
import { lookForClosestLookingStray } from "@/app/microservices_api/match_ai_services/SimilarStray";

export default function AIPetGenerator() {
  const router = useRouter();

  const [generatedImage, setGeneratedImage] = useState<string>("");
  const [imageBase64Im, setimageBase64Im] =  useState<string>("");
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchingMatches, setSearchingMatches] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [strays, setStrays] = useState<any[]>([]);

  const handleGenerate = async (preferences: any) => {
    setHasGenerated(false)
    console.log("Generating AI pet with:", preferences);
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams({
        pet_size: preferences.pet_size,
        physique: preferences.physique,
        pet_type: preferences.pet_type,
        pattern: preferences.pattern,
        fur: preferences.fur,
        ears: preferences.ears,
      }).toString();

      const url = `https://pawpid-match-ai-service-60157892781.asia-northeast1.run.app/ai_visualizer/generate_ai_image?${queryParams}`;
      console.log("Fetching:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: { Accept: "image/jpg" },
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("API Response Error:", response.status, errText);
        throw new Error("Failed to generate image");
      }

      //Image base 64
      const data = await response.json();
      const imageBase64 = data.image_base64;

      // Set Generated Image to Variable
      setGeneratedImage(imageBase64);
      setimageBase64Im(imageBase64)

    } catch (err) {
      console.error("Generation error:", err);
      setError("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    const searchSimilarStrays = async (imageBase64: string) => {
      setSearchingMatches(true);

      try {
        const result = await lookForClosestLookingStray(imageBase64);
        setStrays(result.embedding);
        console.log("Similar strays found:", result);
      } catch (err) {
        console.error('Search error:', err);
        setError('Failed to find similar strays. Please try again.');
        setStrays([]);
      } finally {
        setSearchingMatches(false);
      }
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

  const handleFindSimilarLookingStray = () => {
    setHasGenerated(true)
    searchSimilarStrays(imageBase64Im);
    
  }
  
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

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-10 items-start">
          
          {/* LEFT: FORM */}
          <div>
            <AIStrayForm onGenerate={handleGenerate} loading={loading} />
          </div>
          
          {/* RIGHT */}
          <div className="grid md:grid-row-2 gap-5 items-start">
            
            {/* GENERATED IMAGE */}
            <div className="flex flex-col items-center justify-center">
              <GeneratedStrayImage imageUrl={generatedImage} loading={loading} />
            </div>

            {/* FIND MATCHING BUTTON */}
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                onClick={handleFindSimilarLookingStray}
                className=" bg-darkRed text-white px-5 py-3 rounded-md font-semibold mb-2 hover:bg-crimsonRed transition"
              >
                Find Matching Strays
              </button>
            </div>
            
            {/* STRAY MATCH RESULTS */}
            {hasGenerated && (
              <div>
                <h2 className="text-center font-extrabold text-crimsonRed text-lg mb-4 tracking-wide">
                  {searchingMatches 
                    ? 'SEARCHING FOR MATCHING STRAYS...'
                    : 'AVAILABLE PAWPID STRAYS THAT MATCH YOUR PREFERENCES:'}
                </h2>
                
                {searchingMatches ? (
                  <div className="text-center text-crimsonRed py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crimsonRed mx-auto"></div>
                    <p className="mt-4">Finding similar strays...</p>
                  </div>
                ) : strays.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {strays.map((stray, index) => (
                      <AIStrayCard key={index} stray={stray} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-600 py-8">
                    No matching strays found at this time.
                  </div>
                )}
              </div>
            )}

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