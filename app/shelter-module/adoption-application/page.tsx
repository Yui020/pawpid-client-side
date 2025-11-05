'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ShelterSidebar from '@/components/shelter-module/sidebar';
import AdopterApplicationOutput from '@/components/shelter-module/application-output';
import Review1 from '@/components/shelter-module/review-1';
import AdopterBasicInfo from '@/components/shelter-module/basic-info1';

const AdoptionApplicationPage: React.FC = () => {
  const router = useRouter();

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

  const handleApprove = () => alert('Application approved for interview!');
  const handleReject = () => alert('Application rejected.');

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

        {/* Back Button + Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => router.push('/shelter-module/adoption-requests')} aria-label="Go back"
            className="p-2 border-2 border-[#5A1C10] rounded-full hover:bg-[#5A1C10] hover:text-white transition-colors"
            
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl md:text-4xl font-fredoka font-bold"> Adoption Application Details </h1>
        </div>

        <p className="text-sm md:text-base mb-6">
          Review the adopter’s submitted application information.
        </p>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            <AdopterBasicInfo adopterData={adopterData} />
            <AdopterApplicationOutput adopterData={adopterData} />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
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
