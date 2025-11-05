import React from 'react';

interface AdopterTrackerTableProps {
  data: {
    applicantName: string;
    adoptedPet: string;
    dateAdopted: string;
  }[];
}

const AdopterTrackerTable: React.FC<AdopterTrackerTableProps> = ({ data }) => {
  return (
    <div className="overflow-y-auto max-h-[500px] rounded-2xl shadow-md bg-white p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#5A1C10] text-white rounded-t-lg">
            <th className="py-3 px-4 rounded-l-lg font-semibold text-sm">Applicant’s Name</th>
            <th className="py-3 px-4 font-semibold text-sm">Adopted Pet</th>
            <th className="py-3 px-4 font-semibold text-sm">Date Adopted</th>
            <th className="py-3 px-4 rounded-r-lg font-semibold text-sm text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className="bg-[#FDF4ED] border-b border-[#5A1C10]/20 hover:bg-[#F9E1D9] transition-colors"
              >
                <td className="py-3 px-4">{row.applicantName}</td>
                <td className="py-3 px-4">{row.adoptedPet}</td>
                <td className="py-3 px-4">{row.dateAdopted}</td>
                <td className="py-3 px-4 text-right">
                  <button className="px-4 py-1 rounded-md bg-transparent border border-[#5A1C10]/50 text-[#5A1C10] text-sm font-medium hover:bg-[#5A1C10] hover:text-white transition">
                    View Adopter
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-[#5A1C10]/70">
                No adopters found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdopterTrackerTable;
