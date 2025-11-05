'use client';
import React from 'react';
import ShelterSidebar from '@/components/shelter-module/sidebar';
import AdopterApplicationOutput from '@/components/shelter-module/application-output';
import Review1 from '@/components/shelter-module/review-1';

const AdoptionApplicationPage: React.FC = () => {
  // Temporary sample data
  const adopterData = {
    fullName: 'Kang Seulgi',
    birthdate: '03/10/1994',
    phone: '00000-000-000',
    email: 'kseulgi@gmail.com',
    address: 'Forbes Park, Makati, Metro Manila, Philippines',
    occupation: 'Performer',
    socialMedia: '@hi_seulgi',
    status: 'Single',
    pronouns: 'She/Her',
    alternateContact: 'Parent',
    relationship: 'Mother',
    contactPhone: '09123456789',
    contactEmail: 'mom@gmail.com',
    buildingType: 'Apartment',
    doYouRent: 'Yes',
    whoDoYouLiveWith: 'Alone',
    petWhenMove: 'Bring with me',
    allergicMembers: 'No',
    familySupport: 'Yes',
    explainSupport: 'They support my decision fully.',
    haveOtherPets: 'No',
    hadPetsPast: 'Yes',
    responsiblePerson: 'Myself',
    financialPerson: 'Myself',
    emergencyPerson: 'Best Friend',
    aloneHours: '4 hours',
    petIntroSteps: 'Gradual introduction with treats and scent training.',
    livingSpaceImages: [
      '/images/space1.jpg',
      '/images/space2.jpg',
      '/images/space3.jpg',
      '/images/space4.jpg',
    ],
    adoptType: 'Dog',
    adoptSpecific: 'No',
    preferredSex: 'Male',
    appearance: 'Brown or White',
  };

  // Handlers for review actions
  const handleApprove = () => {
    alert('Application approved for interview!');
  };

  const handleReject = () => {
    alert('Application rejected.');
  };

  return (
    <div className="flex min-h-screen bg-[#FFF5F5]">
      {/* Sidebar */}
      <ShelterSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 px-10 py-8 text-[#5A1C10] font-poppins overflow-y-auto scrollbar-custom">
        {/* Breadcrumb */}
        <div className="text-sm mb-3">
          <span className="font-medium">KIO</span> &gt; <span>Shelter</span> &gt;{' '}
          <span className="font-semibold">Adoption Application</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold mb-2">
          Adoption Application Details
        </h1>
        <p className="text-sm md:text-base mb-6">
          Review the adopter’s submitted application information.
        </p>

        {/* Responsive Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left Column (on desktop) / Bottom (on mobile) */}
          <div className="flex-1">
            <AdopterApplicationOutput adopterData={adopterData} />
          </div>

          {/* Right Column (on desktop) / Top (on mobile) */}
          <div className="flex justify-center lg:justify-start lg:w-1/3">
            <Review1
              adoptionDate="October 20, 2025"
              status="Pending Review"
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdoptionApplicationPage;
