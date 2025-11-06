"use client";

import { useRouter } from "next/navigation";

export default function AIStrayCard({ stray, onSelect, }: { stray: any; onSelect?: () => void; }) {

  const router = useRouter();

  return (
    <div className="bg-bgColor rounded-2xl overflow-hidden shadow-lg">
      <img src={stray.image_url} alt={stray.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-fredoka font-bold text-darkRed">{stray.name} - {((20 - stray.distance) / 19 * 100).toFixed(0)}%</h3>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          {[stray.breed, stray.age, stray.sex, stray.size].map((tag, i) => (
            <span
              key={i}
              className="bg-pastelPink text-xs font-poppins text-crimsonRed px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <button
          onClick={onSelect}
          className="flex justify-end mt-4 bg-crimsonRed text-white px-4 py-1 rounded-md hover:bg-[#6d1315] transition"
          >
            Stray Details
          </button>
        </div>
        
      </div>
    </div>
  );
}