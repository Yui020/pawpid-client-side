'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ShelterSidebar from '@/components/shelter-module/sidebar';
import AdopterApplicationOutput from '@/components/shelter-module/application-output';
import Review1 from '@/components/shelter-module/review-1';
import InterviewOutput from '@/components/shelter-module/interview-output';
import Review2 from '@/components/shelter-module/review-2';

const AdoptionApplicationPage: React.FC = () => {
  const router = useRouter();
  const [showInterview, setShowInterview] = useState(false);
  const [remarks, setRemarks] = useState('');

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
    idCardImage: '/images/idcard-sample.jpg',
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
    adoptType: 'Dog',
    adoptSpecific: 'No',
    preferredSex: 'Male',
    age: 'Adult',
    energyLevel: 'Medium',
    personality: 'Playful and loving',
    medicalNeeds: 'None',
    appearance: 'Brown or White',
    livingSpaceImages: [
      '/images/space1.jpg',
      '/images/space2.jpg',
      '/images/space3.jpg',
      '/images/space4.jpg',
    ],
    monthlyBudget: '3000 PHP',
    workArrangement: 'Work from home',
    preferredInterviewDate: 'November 10, 2025',
    preferredInterviewTime: '9:00 AM',
    canVisitShelter: 'Yes',
  };

  // Handlers
  const handleApprove = () => setShowInterview(true);
  const handleReject = () => alert('Application rejected.');
  const handleGoBack = () => router.push('/shelter-module/adoption-requests');

  const handleAcceptInterview = () => {
    alert('Interview accepted!');
  };

  const handleRejectInterview = () => {
    alert('Interview rejected.');
  };

  return (
    <div className="flex min-h-screen bg-[#FFF5F5]">
      <ShelterSidebar />

      <main className="flex-1 ml-64 px-10 py-8 text-darkRed font-poppins overflow-y-auto scrollbar-custom">
        {/* Breadcrumb */}
        <div className="text-sm mb-3">
          <span className="font-medium">KIO</span> &gt; <span>Shelter</span> &gt;{' '}
          <span className="font-semibold">Adoption Application</span>
        </div>

        {/* Back Button + Header */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handleGoBack}
            aria-label="Go back"
            className="p-2 border-2 rounded-full hover:bg-[#5A1C10] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl md:text-4xl text-red-gradient font-fredoka font-extrabold">
            Adoption Application Details
          </h1>
        </div>

        <p className="text-base font-poppins text-blackRed mb-8">
          Review the adopter’s submitted application information.
        </p>

        {/* Conditional rendering */}
        {!showInterview ? (
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            <div className="flex-1">
              <AdopterApplicationOutput adopterData={adopterData} />
            </div>

            <div className="flex justify-center lg:justify-start lg:w-1/3">
              <Review1
                adoptionDate="October 20, 2025"
                status="Pending Review"
                onApprove={handleApprove}
                onReject={handleReject}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1">
              <InterviewOutput adopterData={adopterData} />
            </div>

            {/* Right Column */}
            <div className="flex justify-center lg:justify-start lg:w-1/3">
              <Review2
                adoptionDate="October 20, 2025"
                status="For Interview"
                remarks={remarks}
                onRemarksChange={setRemarks}
                onAccept={handleAcceptInterview}
                onReject={handleRejectInterview}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdoptionApplicationPage;
