'use client';
import React, { useState } from 'react';
import AdoptionRequestsTable from '@/components/shelter-module/adoption-requests-table';
import { Search } from 'lucide-react';
import ShelterSidebar from '@/components/shelter-module/sidebar';

const AdoptionRequestsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const requests = [
    { applicantName: 'Juan Dela Cruz', adoptionDate: 'MM/DD/YYYY', strayName: 'Stray Name', status: 'Pending Review' },
    { applicantName: 'Juan Dela Cruz', adoptionDate: 'MM/DD/YYYY', strayName: 'Stray Name', status: 'For Interview' },
    { applicantName: 'Juan Dela Cruz', adoptionDate: 'MM/DD/YYYY', strayName: 'Stray Name', status: 'Approved' },
    { applicantName: 'Juan Dela Cruz', adoptionDate: 'MM/DD/YYYY', strayName: 'Stray Name', status: 'Rejected' },
    { applicantName: 'Juan Dela Cruz', adoptionDate: 'MM/DD/YYYY', strayName: 'Stray Name', status: 'Cancelled' },
  ];

  const filteredRequests = requests.filter(
    (r) =>
      r.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'all' || r.status === statusFilter)
  );

  return (
    <div className="flex min-h-screen bg-whiteRed">
      {/* Sidebar */}
      <ShelterSidebar />

      <main className="flex-1 ml-64 px-10 py-8 text-[#5A1C10] font-poppins">
        {/* Breadcrumb */}
        <div className="text-sm mb-3">
          <p className="text-base font-poppins text-blackRed mb-3"> KIO &gt; Shelter &gt; Adoption Requests </p>
        </div>

        {/* Header */}
        <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold pb-2 mb-2"> Adoption Application Management </h1>
        <p className="text-base font-poppins text-blackRed mb-8"> Review and manage applications for your shelter’s rescue strays.</p>

        {/* Search and Filters */}
        <div className="flex flex-wrap justify-end gap-3 mb-6">
          {/* Search Bar */}
          <div className="flex items-center border border-[#5A1C10] rounded-md p-2 w-full max-w-md bg-white">
            <Search className="text-[#C88E80] w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for Adoption Application"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none font-poppins text-[#5A1C10] placeholder-[#C88E80]"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-[#5A1C10] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A1C10] text-[#5A1C10]"
              style={{
                appearance: "none",
                backgroundImage: "url('/icons/dropdown-icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "18px 10px",
              }}
            >
              <option value="all" className="text-grayPink">All Status</option>
              <option value="Pending Review" className="text-darkRed">Pending Review</option>
              <option value="For Interview" className="text-darkRed">For Interview</option>
              <option value="Approved" className="text-darkRed">Approved</option>
              <option value="Rejected" className="text-darkRed">Rejected</option>
              <option value="Cancelled" className="text-darkRed">Cancelled</option>
            </select>
          </div>
        </div>


        {/* Table */}
        <AdoptionRequestsTable data={filteredRequests} />
      </main>
    </div>
  );
};

export default AdoptionRequestsPage;
