'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdopterInfoData {
  Occupation: string;
  Social_media_profile: string;
  Status: string;
  Pronouns: string;
  Alternate_contact: string;
  Relationship_contact: string;
  Phone_number: string;
  Email: string;
  AgreeToTerms: boolean;
}

interface LifestyleData {
  Building_type: string;
  Renting: string;
  Living_with: string;
  Plan_if_moving: string;
  Allergic_household_member: string;
  familySupport: string;
  explanation: string;
}

interface ReadinessData {
  Have_other_pets: string;
  Had_pets_before: string;
  Care_responsible_person: string;
  Financial_responsible_person: string;
  Monthy_budget: string;
  Vacation_caretaker: string;
  Hours_pet_left_alone: string;
  Work_Type: string;
  Introduction_steps: string;
}

interface PreferencesData {
  Specific_pet: string;
  Specific_shelter: string;
  Preferred_stray_sex: string;
  Appearance: string;
  Preferred_age: string;
  Preferred_energy_level: string;
  Sociability: string;
  Personality: string;
  Open_to_stray_with_med_needs: string;
  Specific_appearance: string;
}

interface ConfirmationData {
  idFile: File | null;
  homePhotos: File[];
  interviewDate: string;
  interviewTime: string;
  visitShelter: string;
}

interface AdopterFormContextType {
  adopterInfoData: AdopterInfoData;
  setAdopterInfoData: React.Dispatch<React.SetStateAction<AdopterInfoData>>;

  lifestyleData: LifestyleData;
  setLifestyleData: React.Dispatch<React.SetStateAction<LifestyleData>>;

  readinessData: ReadinessData;
  setReadinessData: React.Dispatch<React.SetStateAction<ReadinessData>>;

  preferencesData: PreferencesData;
  setPreferencesData: React.Dispatch<React.SetStateAction<PreferencesData>>;

  confirmationData: ConfirmationData;
  setConfirmationData: React.Dispatch<React.SetStateAction<ConfirmationData>>;
}

const AdopterFormContext = createContext<AdopterFormContextType | undefined>(undefined);

export const AdopterFormProvider = ({ children }: { children: ReactNode }) => {
  const [adopterInfoData, setAdopterInfoData] = useState<AdopterInfoData>({
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

  const [lifestyleData, setLifestyleData] = useState<LifestyleData>({
    Building_type: '',
    Renting: '',
    Living_with: '',
    Plan_if_moving: '',
    Allergic_household_member: '',
    familySupport: '',
    explanation: ''
  });

  const [readinessData, setReadinessData] = useState<ReadinessData>({
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

  const [preferencesData, setPreferencesData] = useState<PreferencesData>({
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

  const [confirmationData, setConfirmationData] = useState<ConfirmationData>({
    idFile: null,
    homePhotos: [],
    interviewDate: '',
    interviewTime: '',
    visitShelter: ''
  });

  return (
    <AdopterFormContext.Provider
      value={{
        adopterInfoData,
        setAdopterInfoData,
        lifestyleData,
        setLifestyleData,
        readinessData,
        setReadinessData,
        preferencesData,
        setPreferencesData,
        confirmationData,
        setConfirmationData
      }}
    >
      {children}
    </AdopterFormContext.Provider>
  );
};

export const useAdopterForm = (): AdopterFormContextType => {
  const context = useContext(AdopterFormContext);
  if (!context) {
    throw new Error('useAdopterForm must be used within an AdopterFormProvider');
  }
  return context;
};
