'use client';

import Image from "next/image";
import PawBackground from '@/components/pawBackground';
import AdopterBasicInfo from "@/components/adopterBasicInfo";
import { useState } from 'react';
import AdopterInfo from "@/components/application-form/adopters-info";
import AdopterLifestyle from "@/components/application-form/adopters-lifestyle";
import AdopterReadiness from "@/components/application-form/adopters-readiness";
import AdopterPreferences from "@/components/application-form/adopters-preferences";
import AdopterConfirmation from "@/components/application-form/adopters-confirmation";
import { useRouter } from 'next/navigation';
import { getMatchingPrediction } from "../microservices_api/match_ai_services/getMatchingPrediction";
import { extractImageFeatureVectorUpload } from "../microservices_api/match_ai_services/SimilarStray";

export default function PawrfectMatch() {

  //---------------- Handle Prediction 
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handlePredict = async () => {
      setLoading(true);
      /*
      try {
        const data = await getMatchingPrediction({
          species_type: preferencesData.Specific_pet,
          used_ai: false,
          id_list: [1, 2, 3],
          building_type: lifestyleData.Building_type,
          daily_care: readinessData.Care_responsible_person, 
          monthly_pet_budget_range: "Low",  //Lagyan ng field para dito
          backup_caregiver: readinessData.Vacation_caretaker, //papalitan ng Yes or No yung fields
          work_hours_type: "Remote", //paplitan ng values na nasa gsheets
          hours_pet_left_alone: readinessData.Hours_pet_left_alone, //ex: 0 to 2, Change value, base on gheets
          has_other_pets: readinessData.Have_other_pets,
          past_pets: readinessData.Had_pets_before,
          sex_preference: preferencesData.Preferred_stray_sex,
          age_preference: preferencesData.Preferred_age,
          energy_preferencee: preferencesData.Preferred_energy_level,
        });

        setResult(data);  
        console.log("Prediction result:", data);
        localStorage.removeItem("matchingResult");
        localStorage.setItem("matchingResult", JSON.stringify(data));
        router.push("/pawrfect-match/matching-results"); 

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
        */
    };


  //--------- Handle Similarity 


//-------------------------------------------

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  
  const userInfo = {
    fullName: 'Kang Seulgi',
    birthdate: 'MM/DD/YYYY',
    phone: '00000-000-000',
    email: 'kseulgi@gmail.com',
    address: 'Forbes Park, Makati, Metro Manila, Philippines',
    imageUrl: '/api/placeholder/200/200'
  };
  
  // Adopter Info
  const [adopterInfoData, setAdopterInfoData] = useState({
    Occupation: '',
    Social_media_profile: '',
    Status: '',
    Pronouns: '',
    Alternate_contact: '',
    Relationship_contact: '',
    Phone_number: '',
    Email: '',
    AgreeToTerms: false

  });

  // Lifestyle
  const [lifestyleData, setLifestyleData] = useState({
    Building_type: '',
    Renting: '',
    Living_with: '',
    Plan_if_moving: '',
    Allergic_household_member: '',
    familySupport: '',
    explanation: ''
  });

  // Readiness
  const [readinessData, setReadinessData] = useState({
    Have_other_pets: '',
    Had_pets_before: '',
    Care_responsible_person: '',
    Financial_responsible_person: '',
    Vacation_caretaker: '',
    Hours_pet_left_alone: '',
    Introduction_steps: ''
  });

  // Preferences
  const [preferencesData, setPreferencesData] = useState({
  Specific_pet: '',
  Specific_shelter: '',
  Preferred_stray_sex: '',
  Appearance: '',
  Preferred_age: '',
  Preferred_energy_level: '',
  Sociability: '',
  Personality: '',
  Open_to_stray_with_med_needs: '',
  Specific_appearance: ''
  });

  // AI GENERATOR
  const AiGenerator = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#5C1414] mb-4">AI Recommendation</h2>
      <p className="text-gray-700 mb-6">Here are your AI-generated stray matches...</p>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="border-2 border-[#911A1C] text-[#911A1C] px-8 py-2 rounded-md hover:bg-[#911A1C] hover:text-white transition-colors font-semibold"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#911A1C] text-white px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );

  // MATCH RESULTS
  const MatchResults = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#5C1414] mb-4">Your Matches</h2>
      <p className="text-gray-700 mb-6">Here are the best stray matches based on your preferences...</p>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="border-2 border-[#911A1C] text-[#911A1C] px-8 py-2 rounded-md hover:bg-[#911A1C] hover:text-white transition-colors font-semibold"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#911A1C] text-white px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );


  // Confirmation
  const [confirmationData, setConfirmationData] = useState({
    idFile: null,
    zoomDate: '',
    zoomTime: '',
    meetGreet: ''
  });


  const handleAdopterInfoChange = (field: string, value: string | boolean) => {
    setAdopterInfoData(prev => ({ ...prev, [field]: value }));
  };

  const handleLifestyleChange = (field: string, value: string) => {
    setLifestyleData(prev => ({ ...prev, [field]: value }));
  };

  const handleReadinessChange = (field: string, value: string) => {
    setReadinessData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferencesChange = (field: string, value: string) => {
  setPreferencesData(prev => ({ ...prev, [field]: value }));
  };

  const handleConfirmationChange = (field: string, value: string | File | null) => {
    setConfirmationData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (currentStep === 4) {
      if (preferencesData.Specific_appearance === "Yes") {
        // Redirect to AI Stray Generator page
        router.push("/pawrfect-match/ai-stray-generator");
        return;
      } else if (preferencesData.Specific_appearance === "Any appearance is fine") {
        //================================ pass data here
        handlePredict();
        router.push("/pawrfect-match/matching-results");
        return;
      }
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    setCurrentStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      adopterInfoData,
      lifestyleData,
      readinessData, 
      preferencesData
    });
    // Add your submission logic here (e.g., API call)
    alert('Form submitted successfully!');
  };


  // -------------------------------------------------------------------------
  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">PAWRFECT MATCH!</h1>
          <p className="text-base font-poppins text-blackRed">Discover pets that fit your lifestyle and preferences through our compatibility scoring system.</p>
        </div>

        <div className="flex flex-col lg:flex-col xl:flex-row sm:flex-col items-center gap-6">
          
          {/* BASIC INFOO */}
          <div className="h-auto">
            <AdopterBasicInfo {...userInfo} />
          </div>
        

          {/* MAIN FORM AREA */}
          <div className="lg:w-3/4">
            
            {/* 1. ADOPTER'S INFORMATION */}
            {currentStep === 1 && (
              <div>
                <div>
                  <AdopterInfo 
                    formData={adopterInfoData}
                    onInputChange={handleAdopterInfoChange}
                    onSubmit={handleNext}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-5">
                  <p className="text-darkRed text-center">
                    To <strong>Match and Adopt a pet</strong> you need to complete some fields. Click Start...
                  </p>

                  <button
                    type="button"
                    onClick={handleStart}
                    className="bg-crimsonRed text-white font-poppins px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
                  >
                    Start
                  </button>
                </div>                 
              </div>
            )}


            {/* 2. ADOPTER'S LIFESTYLE */}
            {currentStep === 2 && (
              <div>
                <AdopterLifestyle 
                  formData={lifestyleData}
                  onInputChange={handleLifestyleChange}
                  onSubmit={handleNext}
                />
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border-2 border-crimsonRed text-crimsonRed px-8 py-2 rounded-md hover:bg-darkRed hover:text-white transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="bg-crimsonRed text-white font-poppins px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/*3. ADOPTER'S READINESS QUESTIONS */}
            {currentStep === 3 && (
              <div>
                <AdopterReadiness 
                  formData={readinessData}
                  onInputChange={handleReadinessChange}
                  onSubmit={handleNext}
                />
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border-2 border-crimsonRed text-crimsonRed px-8 py-2 rounded-md hover:bg-darkRed hover:text-white transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="bg-crimsonRed text-white font-poppins px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* 4. ADOPTER'S PREFERENCES */}
            {currentStep === 4 && (
              <div>
                <AdopterPreferences
                  formData={preferencesData}
                  onInputChange={handlePreferencesChange}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                />
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border-2 border-crimsonRed text-crimsonRed px-8 py-2 rounded-md hover:bg-darkRed hover:text-white transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="bg-crimsonRed text-white font-poppins px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* 5. CONFIRMATION */}
            {currentStep === 5 && (
              <div>
                <AdopterConfirmation
                  formData={confirmationData}
                  onInputChange={handleConfirmationChange}
                  onSubmit={handleFormSubmit}
                />
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border-2 border-crimsonRed text-crimsonRed px-8 py-2 rounded-md hover:bg-darkRed hover:text-white transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="bg-crimsonRed text-white font-poppins px-8 py-2 rounded-md hover:bg-[#6d1315] transition-colors font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </PawBackground>
  );
}