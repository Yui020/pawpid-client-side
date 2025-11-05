'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ShelterSidebar from '@/components/shelter-module/sidebar';
import AdopterTrackerTable from '@/components/shelter-module/adopter-tracker-table';

const AdopterTrackerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const adopters = [
    { applicantName: 'Juan Dela Cruz', adoptedPet: 'Pet Name', dateAdopted: 'MM/DD/YYYY' },
    { applicantName: 'Juan Dela Cruz', adoptedPet: 'Pet Name', dateAdopted: 'MM/DD/YYYY' },
    { applicantName: 'Juan Dela Cruz', adoptedPet: 'Pet Name', dateAdopted: 'MM/DD/YYYY' },
    { applicantName: 'Juan Dela Cruz', adoptedPet: 'Pet Name', dateAdopted: 'MM/DD/YYYY' },
  ];

  const filteredAdopters = adopters.filter((a) =>
    a.applicantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-whiteRed">
      {/* Sidebar */}
      <ShelterSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 px-10 py-8 text-[#5A1C10] font-poppins">
        {/* Breadcrumb */}
        <div className="text-sm mb-3">
          <span className="font-medium">KIO</span> &gt; <span>Shelter</span> &gt;{' '}
          <span className="font-semibold">Adoption Requests</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-fredoka font-bold mb-2 text-[#5A1C10]">
          Adopter’s Pet Tracker
        </h1>
        <p className="text-sm md:text-base mb-6">
          Review and manage application for your shelter’s rescue strays.
        </p>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 mb-6">
          <Search className="absolute left-3 top-2.5 text-[#5A1C10]" size={18} />
          <input
            type="text"
            placeholder="Search Adopters"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-md border border-[#5A1C10]/30 focus:ring-2 focus:ring-[#5A1C10] text-sm md:text-base"
          />
        </div>

        {/* Table */}
        <AdopterTrackerTable data={filteredAdopters} />
      </main>
    </div>
  );
};

export default AdopterTrackerPage;
