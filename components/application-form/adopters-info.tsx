"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";

interface AddStrayModalProps {
  onClose: () => void;
  onAdd: (newStray: any) => void;
}

export default function AddStrayModal({ onClose, onAdd }: AddStrayModalProps) {
  const [newStray, setNewStray] = useState({
    stray_name: "",
    species_type: "",
    breed: "",
    sex: "",
    age_group: "",
    energy_level: "",
    sociability: "",
    personality: "",
    size: "",
    medical_needs: false,
    vaccination_status: "",
    spay_neuter: false,
    stray_background: "",
    stray_image: "",
    adoption_status: "Available",
  });

  const handleChange = (
    field: string,
    value: string | boolean | File | null
  ) => {
    setNewStray((prev) => ({
      ...prev,
      [field]: value instanceof File ? URL.createObjectURL(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newStray);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blackRed/70 flex justify-center items-center z-[60] px-10">
      <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-crimsonRed font-fredoka font-bold text-3xl mb-6 text-center">
          Add New Stray
        </h2>

        <form onSubmit={handleSubmit} className="font-poppins text-sm grid grid-cols-2 gap-5">
          
          {/* Stray Name */}
          <div className="col-span-2">
            <label className="font-semibold text-darkRed mb-1 block">
              Stray Name:
            </label>
            <input
              type="text"
              required
              value={newStray.stray_name}
              onChange={(e) => handleChange("stray_name", e.target.value)}
              placeholder="Example: Buddy"
              className="w-full px-4 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            />
          </div>

          {/* Species */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Species:</label>
            <select
              required
              value={newStray.species_type}
              onChange={(e) => handleChange("species_type", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          {/* Breed */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Breed:</label>
            <input
              type="text"
              value={newStray.breed}
              onChange={(e) => handleChange("breed", e.target.value)}
              placeholder="Example: Aspin"
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            />
          </div>

          {/* Sex */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Sex:</label>
            <select
              required
              value={newStray.sex}
              onChange={(e) => handleChange("sex", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age Group */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Age Group:</label>
            <select
              required
              value={newStray.age_group}
              onChange={(e) => handleChange("age_group", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select Age</option>
              <option value="Kitten/Puppy">Kitten / Puppy</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Energy Level */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Energy Level:</label>
            <select
              value={newStray.energy_level}
              onChange={(e) => handleChange("energy_level", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Sociability */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Sociability:</label>
            <input
              type="text"
              value={newStray.sociability}
              onChange={(e) => handleChange("sociability", e.target.value)}
              placeholder="Friendly / Shy / Independent..."
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            />
          </div>

          {/* Personality */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Personality:</label>
            <select
              value={newStray.personality}
              onChange={(e) => handleChange("personality", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select</option>
              <option value="Playful">Playful</option>
              <option value="Calm">Calm</option>
              <option value="Protective">Protective</option>
              <option value="Vocal">Vocal</option>
              <option value="Quiet">Quiet</option>
            </select>
          </div>

          {/* Size */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Size:</label>
            <select
              required
              value={newStray.size}
              onChange={(e) => handleChange("size", e.target.value)}
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            >
              <option value="" disabled>Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Medical Needs */}
          <div className="col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              checked={newStray.medical_needs}
              onChange={(e) => handleChange("medical_needs", e.target.checked)}
            />
            <label className="text-darkRed font-semibold">Has Medical Needs</label>
          </div>

          {/* Vaccination Status */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Vaccination Status:</label>
            <input
              type="text"
              value={newStray.vaccination_status}
              onChange={(e) => handleChange("vaccination_status", e.target.value)}
              placeholder="Up-to-date / Partial"
              className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            />
          </div>

          {/* Spay / Neuter */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={newStray.spay_neuter}
              onChange={(e) => handleChange("spay_neuter", e.target.checked)}
            />
            <label className="text-darkRed font-semibold">Spayed / Neutered</label>
          </div>

          {/* Background Info */}
          <div className="col-span-2">
            <label className="font-semibold text-darkRed mb-1 block">
              Background Information:
            </label>
            <textarea
              required
              value={newStray.stray_background}
              onChange={(e) => handleChange("stray_background", e.target.value)}
              placeholder="Brief background about the stray..."
              rows={3}
              className="w-full px-4 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
            />
          </div>

          {/* Image Upload */}
          <div className="col-span-2">
            <label className="block font-semibold text-darkRed mb-2">
              Upload Stray Image:
            </label>
            <input
              required
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) =>
                handleChange("stray_image", e.target.files?.[0] || null)
              }
              className="block w-full border-2 border-crimsonRed rounded-md py-2 px-3 text-darkRed file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-peachCream file:text-crimsonRed file:font-semibold hover:file:bg-crimsonRed hover:file:text-white file:cursor-pointer"
            />
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-crimsonRed text-white px-6 py-2 rounded-md hover:bg-[#6d1315] transition"
            >
              Save Stray
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
