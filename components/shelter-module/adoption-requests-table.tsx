'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface AdoptionRequest {
  applicantName: string;
  adoptionDate: string;
  strayName: string;
  status: string;
}

interface AdoptionRequestsTableProps {
  data: AdoptionRequest[];
}

const statusColors: Record<string, string> = {
  'Pending Review': 'bg-yellow-200 text-yellow-800',
  'For Interview': 'bg-[#9ECCF0] text-blue-800',
  'Approved': 'bg-[#C5DBA9] text-green-800',
  'Rejected': 'bg-red-200 text-red-800',
  'Cancelled': 'bg-gray-200 text-gray-800',
};

const AdoptionRequestsTable: React.FC<AdoptionRequestsTableProps> = ({ data }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push('/shelter-module/adoption-application');
  };

  return (
    <div className="p-4 m-2 min-h-max bg-[#FFE2D1] text-[#5A1C10] rounded-xl shadow-md font-poppins">
      {/* Header Row */}
      <div className="hidden text-start md:grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1fr] bg-darkRed text-whiteRed py-3 px-4 mb-2 rounded-md font-fredoka">
        <div>Applicant’s Name</div>
        <div>Adoption Date</div>
        <div>Stray Name</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      {/* Body Rows */}
      <div className="overflow-y-auto max-h-[60vh] custom-scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1fr] grid-cols-1 border border-[#5A1C10]/50 rounded-md py-3 px-4 mb-2 hover:bg-[#F7CBB2] transition-all"
          >
            <div className="text-sm md:text-base font-semibold">{item.applicantName}</div>
            <div className="text-sm md:text-base">{item.adoptionDate}</div>
            <div className="text-sm md:text-base">{item.strayName}</div>
            <div className="text-sm md:text-base text-start">
              <span
                className={`text-center px-3 py-1 rounded-md font-semibold ${statusColors[item.status] || ''}`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex items-center justify-start md:justify-center mt-2 md:mt-0">
              <button
                onClick={handleViewDetails}
                className="px-3 py-1 border border-[#5A1C10] text-[#5A1C10] hover:bg-[#5A1C10] hover:text-white text-sm rounded-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionRequestsTable;
