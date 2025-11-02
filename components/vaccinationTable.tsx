"use client";

export default function VaccinationTable({ updates }: { updates: any[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse border border-[#8B0000]/40 rounded-lg text-xs font-poppins">
        <thead>
          <tr className="bg-darkRed text-xs text-white">
            <th className="border border-crimsonRed/40 px-3 py-2">Date Vaccinated</th>
            <th className="border border-crimsonRed/40 px-3 py-2">Last Vaccinated</th>
            <th className="border border-crimsonRed/40 px-3 py-2">Receipt</th>
            <th className="border border-crimsonRed/40 px-3 py-2">Current Wt.</th>
            <th className="border border-crimsonRed/40 px-3 py-2">Last Wt.</th>
            <th className="border border-crimsonRed/40 px-3 py-2">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index} className="text-center bg-[#FFF4E6] hover:bg-[#FFE8CC] transition">
              <td className="border border-crimsonRed/40 px-3 py-2">{update.date_vaccinated}</td>
              <td className="border border-crimsonRed/40 px-3 py-2">{update.date_of_last_vaccinated}</td>
              <td className="border border-crimsonRed/40 px-3 py-2">
                <a
                  href={update.vaccination_receipt_image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimsonRed hover:underline"
                >
                  View
                </a>
              </td>
              <td className="border border-crimsonRed/40 px-3 py-2">{update.stray_current_weight}</td>
              <td className="border border-crimsonRed/40 px-3 py-2">{update.stray_last_recorded_weight}</td>
              <td className="border border-crimsonRed/40 px-3 py-2">{update.date_created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
