'use client';

import Image from "next/image";
import PawBackground from '@/components/pawBackground';
import AdopterBasicInfo from "@/components/adopterBasicInfo";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AdopterInfo from "@/components/application-form/adopters-info";
import AdopterLifestyle from "@/components/application-form/adopters-lifestyle";
import AdopterReadiness from "@/components/application-form/adopters-readiness";
import AdopterPreferences from "@/components/application-form/adopters-preferences";
import AdopterConfirmation from "@/components/application-form/adopters-confirmation";
import { getMatchingPrediction } from "../microservices_api/match_ai_services/getMatchingPrediction";

export default function PawrfectMatch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Check for step parameter in URL on mount
  useEffect(() => {
    const stepParam = searchParams.get('step');
    if (stepParam) {
      const step = parseInt(stepParam);
      if (step >= 1 && step <= 5) {
        setCurrentStep(step);
      }
    }
  }, [searchParams]);

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
        monthly_pet_budget_range: readinessData.Monthy_budget,
        backup_caregiver: readinessData.Vacation_caretaker,
        work_hours_type: readinessData.Work_Type,
        hours_pet_left_alone: readinessData.Hours_pet_left_alone,
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
    Monthy_budget: '',
    Vacation_caretaker: '',
    Hours_pet_left_alone: '',
    Work_Type: '',
    Introduction_steps: ''
  });

  // Preferences
  const [preferencesData, setPreferencesData] = useState({
    Specific_pet: '',
    Specific_shelter: '',
    Preferred_stray_sex: '',
    Preferred_age: '',
    Preferred_energy_level: '',
    Sociability: '',
    Personality: '',
    Open_to_stray_with_med_needs: '',
    Specific_appearance: ''
  });

  // Confirmation
  const [confirmationData, setConfirmationData] = useState({
    idFile: null as File | null,
    homePhotos: [] as File[],
    interviewDate: "",
    interviewTime: "",
    visitShelter: "",
  });

  // VALIDATION FUNCTIONS
  const isStep1Valid = () => {
    return (
      adopterInfoData.Occupation.trim() !== '' &&
      adopterInfoData.Social_media_profile.trim() !== '' &&
      adopterInfoData.Status !== '' &&
      adopterInfoData.Pronouns !== '' &&
      adopterInfoData.Email.trim() !== '' &&
      adopterInfoData.AgreeToTerms === true
    );
  };

  const isStep2Valid = () => {
    return (
      lifestyleData.Building_type !== '' &&
      lifestyleData.Renting !== '' &&
      lifestyleData.Living_with !== '' &&
      lifestyleData.Plan_if_moving.trim() !== '' &&
      lifestyleData.Allergic_household_member !== '' &&
      lifestyleData.familySupport !== '' &&
      lifestyleData.explanation.trim() !== ''
    );
  };

  const isStep3Valid = () => {
    return (
      readinessData.Have_other_pets !== '' &&
      readinessData.Had_pets_before !== '' &&
      readinessData.Care_responsible_person !== '' &&
      readinessData.Financial_responsible_person !== '' &&
      readinessData.Monthy_budget.trim() !== '' &&
      readinessData.Vacation_caretaker !== '' &&
      readinessData.Hours_pet_left_alone !== '' &&
      readinessData.Work_Type !== '' &&
      readinessData.Introduction_steps.trim() !== ''
    );
  };

  const isStep4Valid = () => {
    return (
      preferencesData.Specific_pet !== '' &&
      preferencesData.Specific_shelter !== '' &&
      preferencesData.Preferred_stray_sex !== '' &&
      preferencesData.Preferred_age !== '' &&
      preferencesData.Preferred_energy_level !== '' &&
      preferencesData.Sociability !== '' &&
      preferencesData.Personality !== '' &&
      preferencesData.Open_to_stray_with_med_needs !== '' &&
      preferencesData.Specific_appearance !== ''
    );
  };

  const isStep5Valid = () => {
    return (
      confirmationData.idFile !== null &&
      confirmationData.interviewDate !== "" &&
      confirmationData.interviewTime !== "" &&
      confirmationData.visitShelter !== ""
    );
  };

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
  
  const handleConfirmationChange = (
    field: string,
    value: string | File | File[] | null
  ) => {
    setConfirmationData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (currentStep === 4) {
      if (preferencesData.Specific_appearance === "Yes") {
        router.push("/pawrfect-match/ai-stray-generator");
        return;
      } else if (preferencesData.Specific_appearance === "Any appearance is fine") {
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
      preferencesData,
      confirmationData
    });
    alert('Form submitted successfully!');
  };

  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">PAWRFECT MATCH!</h1>
          <p className="text-base font-poppins text-blackRed">Discover pets that fit your lifestyle and preferences through our compatibility scoring system.</p>
        </div>

        <div className="flex flex-col lg:flex-col xl:flex-row sm:flex-col items-center gap-6">
          
          {/* BASIC INFO */}
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
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-5">
                  <p className="text-darkRed text-center">
                    To <strong>Match and Adopt a pet</strong> you need to complete some fields. Click Start...
                  </p>

                  <button
                    type="button"
                    onClick={handleStart}
                    disabled={!isStep1Valid()}
                    className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
                      isStep1Valid()
                        ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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
                    disabled={!isStep2Valid()}
                    className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
                      isStep2Valid()
                        ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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
                    disabled={!isStep3Valid()}
                    className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
                      isStep3Valid()
                        ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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
                    disabled={!isStep4Valid()}
                    className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
                      isStep4Valid()
                        ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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
                    disabled={!isStep5Valid()}
                    className={`font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
                      isStep5Valid()
                        ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
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