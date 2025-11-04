"use client";

import { Edit3, Trash2, Archive, Expand } from "lucide-react";

interface ShelterStrayCardProps {
  stray: {
    Stray_id: string;
    Stray_name: string;
    Sex: string;
    Age_group: string;
    Pet_Size: string;
    Stray_image_public_key: string;
    Stray_Background?: string;
  };
  onEdit?: () => void;
  onDelete?: () => void;
  onArchive?: () => void;
  onExpand?: () => void;
}

export default function ShelterStrayCard({
  stray,
  onEdit,
  onDelete,
  onArchive,
  onExpand,
}: ShelterStrayCardProps) {
  return (
    <div className="bg-[#f6c7a1] text-[#5a0001] rounded-2xl shadow-[4px_4px_0_#5a0001] p-4 sm:p-5 w-full max-w-[400px] md:max-w-[300px] border-2 border-[#5a0001] transition-transform hover:scale-[1.02] hover:shadow-[6px_6px_0_#5a0001]">
      {/* Image */}
      <img
        src={stray.Stray_image_public_key}
        alt={stray.Stray_name}
        className="w-full h-44 sm:h-48 md:h-44 object-cover rounded-xl"
      />

      {/* Info */}
      <div className="mt-3">
        <h2 className="text-3xl text-darkRed sm:text-2xl font-extrabold font-fredoka leading-tight break-words">
          {stray.Stray_name}
        </h2>
        <p className="font-bold text-crimsonRed font-poppins text-base sm:text-sm mt-1 break-words">
          Stray ID:{" "}
          <span className="font-normal text-darkRed">{stray.Stray_id}</span>
        </p>

        <div className="mt-2 text-xs sm:text-sm font-medium font-poppins">
          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            {[
              { label: "Sex:", value: stray.Sex },
              { label: "Age:", value: stray.Age_group },
              { label: "Size:", value: stray.Pet_Size },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] items-center gap-2 w-full"
              >
                <span className="font-bold text-base sm:text-sm text-crimsonRed whitespace-nowrap">
                  {item.label}
                </span>
                <span className="border border-darkRed rounded-lg px-2 py-0.5 text-center">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-4 border-darkRed" />

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3 sm:gap-4">
          <button
            onClick={onEdit}
            className="p-2 rounded-md bg-[#f6c7a1] hover:bg-[#f0b885] transition"
          >
            <Edit3 size={18} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded-md bg-[#f6c7a1] hover:bg-[#f0b885] transition"
          >
            <Trash2 size={18} />
          </button>
          <button
            onClick={onArchive}
            className="p-2 rounded-md bg-[#f6c7a1] hover:bg-[#f0b885] transition"
          >
            <Archive size={18} />
          </button>
          <button
            onClick={onExpand}
            className="p-2 rounded-md bg-[#f6c7a1] hover:bg-[#f0b885] transition"
          >
            <Expand size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
