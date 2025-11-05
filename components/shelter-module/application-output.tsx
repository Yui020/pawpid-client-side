import React from "react";

interface AdopterApplicationOutputProps {
  adopterData: {
    // Basic Info
    fullName: string;
    birthdate: string;
    phone: string;
    email: string;
    address: string;

    // Contact & Personal
    occupation: string;
    socialMedia: string;
    status: string;
    pronouns: string;
    alternateContact: string;
    relationship: string;
    contactPhone: string;
    contactEmail: string;

    // Lifestyle
    buildingType: string;
    doYouRent: string;
    whoDoYouLiveWith: string;
    petWhenMove: string;
    allergicMembers: string;
    familySupport: string;
    explainSupport: string;

    // Readiness
    haveOtherPets: string;
    hadPetsPast: string;
    responsiblePerson: string;
    financialPerson: string;
    emergencyPerson: string;
    aloneHours: string;
    petIntroSteps: string;

    // Living Space
    livingSpaceImages: string[];

    // Preferences
    adoptType: string;
    adoptSpecific: string;
    preferredSex: string;
    appearance: string;
  };
}

const AdopterApplicationOutput: React.FC<AdopterApplicationOutputProps> = ({
  adopterData,
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-8 text-[#442220] overflow-y-auto scrollbar-custom">
      {/* Header Section */}
      <div className="flex items-center space-x-6">
        <img
          src="/profile-placeholder.png"
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full border-4 border-[#8B3A2E]"
        />
        <div className="space-y-1">
          <p><strong>Full Name:</strong> {adopterData.fullName}</p>
          <p><strong>Birthdate:</strong> {adopterData.birthdate}</p>
          <p><strong>Phone:</strong> {adopterData.phone}</p>
          <p><strong>Email:</strong> {adopterData.email}</p>
          <p><strong>Address:</strong> {adopterData.address}</p>
        </div>
      </div>

      {/* Contact & Personal Info */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-1">
          <p><strong>Occupation:</strong> {adopterData.occupation}</p>
          <p><strong>Status:</strong> {adopterData.status}</p>
          <p><strong>Alternate Contact:</strong> {adopterData.alternateContact}</p>
          <p><strong>Phone Number:</strong> {adopterData.contactPhone}</p>
        </div>
        <div className="space-y-1">
          <p><strong>Social Media Profile:</strong> {adopterData.socialMedia}</p>
          <p><strong>Pronouns:</strong> {adopterData.pronouns}</p>
          <p><strong>Relationship:</strong> {adopterData.relationship}</p>
          <p><strong>Email:</strong> {adopterData.contactEmail}</p>
        </div>
      </div>

      {/* Lifestyle Section */}
      <h2 className="font-extrabold text-lg border-b-2 border-[#8B3A2E]">
        ADOPTER’S LIFESTYLE
      </h2>
      <div className="space-y-2">
        <p><strong>Type of Building:</strong> {adopterData.buildingType}</p>
        <p><strong>Do you rent?:</strong> {adopterData.doYouRent}</p>
        <p><strong>Who do you live with?:</strong> {adopterData.whoDoYouLiveWith}</p>
        <p><strong>What happens to your pet if you move?:</strong> {adopterData.petWhenMove}</p>
        <p><strong>Allergic to animals?:</strong> {adopterData.allergicMembers}</p>
        <p><strong>Does family support adoption?:</strong> {adopterData.familySupport}</p>
        <p><strong>Explain:</strong> {adopterData.explainSupport}</p>
      </div>

      {/* Adoption Readiness Section */}
      <h2 className="font-extrabold text-lg border-b-2 border-[#8B3A2E]">
        ADOPTION READINESS QUESTIONS
      </h2>
      <div className="space-y-2">
        <p><strong>Do you have other pets?:</strong> {adopterData.haveOtherPets}</p>
        <p><strong>Had pets in the past?:</strong> {adopterData.hadPetsPast}</p>
        <p><strong>Responsible for pet care?:</strong> {adopterData.responsiblePerson}</p>
        <p><strong>Financially responsible?:</strong> {adopterData.financialPerson}</p>
        <p><strong>Who looks after pet in emergencies?:</strong> {adopterData.emergencyPerson}</p>
        <p><strong>Hours pet left alone daily:</strong> {adopterData.aloneHours}</p>
        <p><strong>Steps to introduce pet to new environment:</strong> {adopterData.petIntroSteps}</p>
      </div>

      {/* Living Space Section */}
      <h2 className="font-extrabold text-lg border-b-2 border-[#8B3A2E]">
        LIVING SPACE
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {adopterData.livingSpaceImages && adopterData.livingSpaceImages.length > 0 ? (
          adopterData.livingSpaceImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Living Space ${index + 1}`}
              className="w-full h-28 object-cover border-2 border-dashed border-[#8B3A2E] rounded-lg"
            />
          ))
        ) : (
          <p className="col-span-4 text-sm text-gray-500 italic">
            No living space images uploaded.
          </p>
        )}
      </div>

      {/* Preferences Section */}
      <h2 className="font-extrabold text-lg border-b-2 border-[#8B3A2E]">
        ADOPTER’S STRAY PREFERENCES
      </h2>
      <div className="space-y-2">
        <p><strong>Looking to adopt:</strong> {adopterData.adoptType}</p>
        <p><strong>Applying for a specific shelter animal?:</strong> {adopterData.adoptSpecific}</p>
        <p><strong>Preferred Sex:</strong> {adopterData.preferredSex}</p>
        <p><strong>Appearance Preference:</strong> {adopterData.appearance}</p>
      </div>
    </div>
  );
};

export default AdopterApplicationOutput;
