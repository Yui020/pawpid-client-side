"use client";

import { X, Plus } from "lucide-react";
import VaccinationTable from "@/components/vaccinationTable";

interface ShelterStrayDetailsModalProps {
  stray: {
    Stray_id: string;
    Stray_name: string;
    Sex: string;
    Age_group: string;
    Pet_Size: string;
    Stray_image_public_key: string;
    Stray_Background?: string;
    Species_type: string;
    Energy_level: string;
    Sociability: string;
    Medical_needs: string;
    SpayNeuter: string;
  } | null;
  updates?: {
    date_vaccinated: string;
    date_of_last_vaccinated: string;
    vaccination_receipt_image_url: string;
    stray_current_weight: string;
    stray_last_recorded_weight: string;
    date_created: string;
  }[];
  onAddVaccination?: () => void;
  onClose: () => void;
}

export default function ShelterStrayDetailsModal({
  stray,
  updates = [],
  onAddVaccination,
  onClose,
}: ShelterStrayDetailsModalProps) {
  if (!stray) return null;

  return (
    <div className="fixed px-10 inset-0 bg-blackRed/70 flex justify-center items-center z-50">
      <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-5xl w-full relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 font-poppins">
          {/* LEFT SIDE */}
          <div className="grid grid-rows-2 gap-4">
            <div className="cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition">
              <img
                src={stray.Stray_image_public_key}
                alt={stray.Stray_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-justify text-black leading-relaxed">
              {stray.Stray_Background}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="grid grid-cols-2 gap-y-4 text-left font-poppins">
              <div>
                <p className="text-sm font-semibold text-crimsonRed">Name:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Stray_name}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">ID:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Stray_id}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">Type:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Species_type}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">Sex:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Sex}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">Age:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Age_group}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">Size:</p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Pet_Size}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">
                  Energy Level:
                </p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Energy_level}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">
                  Sociability:
                </p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Sociability}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">
                  Medical Needs:
                </p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.Medical_needs}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-crimsonRed">
                  Spay/Neuter:
                </p>
                <p className="text-2xl font-bold text-blackRed -mt-1">
                  {stray.SpayNeuter}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-fredoka font-bold text-crimsonRed">
                  Vaccination Record
                </h3>
              </div>
              <VaccinationTable updates={updates} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
