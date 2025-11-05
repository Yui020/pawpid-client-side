"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";
import { addStray } from "@/app/microservices_api/addStray";

interface AddStrayModalProps {
  onClose: () => void;
  onAdd: (newStray: any) => void;
  shelterId: number;
}

export default function AddStrayModal({ onClose, onAdd }: AddStrayModalProps) {
  const [newStray, setNewStray] = useState({
    stray_name: "",
    species_type: "",
    breed: "",
    sex: "",
    age_group: "",
    energy_level: "",
    training_level: "",
    size: "",
    living_space_fit: "",
    medical_needs: "",
    vaccination_status: "",
    spay_neuter: "",
    stray_image: "",
    adoption_status: "Available",
    stray_background: "",
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

  // ----------API------------
 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  try {
    console.log("Submitting the following data:", newStray);  // Log the data

    // Call the addStray function and pass the shelterId and newStray data
    const addedStray = await addStray(1, newStray);

    // Call onAdd to update the list of strays in the parent component
    onAdd(addedStray);

    // Close the modal
    onClose();

    // Optionally show a success message
    alert("Stray added successfully!");
  } catch (error) {
    console.error("Error adding stray:", error);
    alert("Failed to add stray!");
  }
};

  const dropdownStyle = {
    appearance: "none" as const,
    backgroundImage: "url('/icons/dropdown-icon.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.75rem center",
    backgroundSize: "18px 10px",
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

        <form
          onSubmit={handleSubmit}
          className="font-poppins text-sm grid grid-cols-2 gap-5"
        >
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

          {/* Species Type */}
          <div>
            <label className="block font-semibold text-darkRed mb-1">
              Species Type <span className="text-crimsonRed">*</span>
            </label>
            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Cat", "Dog"].map((pet_type) => (
                <label
                  key={pet_type}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    newStray.species_type === pet_type
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="species_type"
                    value={pet_type}
                    checked={newStray.species_type === pet_type}
                    onChange={(e) => handleChange("species_type", e.target.value)}
                    className="hidden"
                  />
                  {pet_type}
                </label>
              ))}
            </div>
          </div>

          {/* Age Group */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Age Group:</label>
            <select
              required
              value={newStray.age_group}
              onChange={(e) => handleChange("age_group", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Age
              </option>
              <option value="Puppy/Kitten">Puppy / Kitten</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Sex */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Sex:</label>
            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Male", "Female"].map((sex) => (
                <label
                  key={sex}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    newStray.sex === sex
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="sex"
                    value={sex}
                    checked={newStray.sex === sex}
                    onChange={(e) => handleChange("sex", e.target.value)}
                    className="hidden"
                  />
                  {sex}
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Size:</label>
            <select
              required
              value={newStray.size}
              onChange={(e) => handleChange("size", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Training Level */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Training Level:</label>
            <select
              value={newStray.training_level}
              onChange={(e) => handleChange("training_level", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Training Level
              </option>
              <option value="Untrained">Untrained</option>
              <option value="Partially Trained">Partially Trained</option>
              <option value="Fully Trained">Fully Trained</option>
            </select>
          </div>

          {/* Energy Level */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Energy Level:</label>
            <select
              required
              value={newStray.energy_level}
              onChange={(e) => handleChange("energy_level", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Energy Level
              </option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Living Space Fit */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Living Space Fit:</label>
            <select
              required
              value={newStray.living_space_fit}
              onChange={(e) => handleChange("living_space_fit", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Living Space
              </option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
            </select>
          </div>

          {/* Medical Needs */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Medical Needs:</label>
            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Yes", "No"].map((medical) => (
                <label
                  key={medical}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    newStray.medical_needs === medical
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="medical_needs"
                    value={medical}
                    checked={newStray.medical_needs === medical}
                    onChange={(e) => handleChange("medical_needs", e.target.value)}
                    className="hidden"
                  />
                  {medical}
                </label>
              ))}
            </div>
          </div>

          {/* Vaccination Status */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Vaccination Status:</label>
            <select
              required
              value={newStray.vaccination_status}
              onChange={(e) => handleChange("vaccination_status", e.target.value)}
              className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
              style={dropdownStyle}
            >
              <option value="" disabled>
                Select Vaccination Status
              </option>
              <option value="Complete">Complete</option>
              <option value="Partial">Partial</option>
              <option value="None">None</option>
            </select>
          </div>

          {/* Spay/Neuter */}
          <div>
            <label className="font-semibold text-darkRed mb-1 block">Spayed/Neutered:</label>
            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Yes", "No"].map((spay) => (
                <label
                  key={spay}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    newStray.spay_neuter === spay
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="spay_neuter"
                    value={spay}
                    checked={newStray.spay_neuter === spay}
                    onChange={(e) => handleChange("spay_neuter", e.target.value)}
                    className="hidden"
                  />
                  {spay}
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload (2-column span) */}
          <div className="col-span-2">
            <label className="block font-semibold text-darkRed mb-2">Upload Stray Image:</label>
            
            <div className="relative">
              {/* File input */}
              <input
                required
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => {
                  // Handle file change and set preview URL
                  const file = e.target.files?.[0];
                  if (file) {
                    handleChange("stray_image", URL.createObjectURL(file)); // Create preview URL
                  }
                }}
                className="block w-full border-2 border-crimsonRed rounded-md py-2 px-3 text-darkRed file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-peachCream file:text-crimsonRed file:font-semibold hover:file:bg-crimsonRed hover:file:text-white file:cursor-pointer"
              />

              {/* Show image preview if a file is selected */}
              {newStray.stray_image && (
                <div className="mt-4 relative">
                  <img
                    src={newStray.stray_image} // Use the preview URL for the image
                    alt="Uploaded Preview"
                    className="w-full h-auto rounded-md border-2 border-crimsonRed"
                  />

                  {/* Clear button (X) */}
                  <button
                    type="button"
                    onClick={() => handleChange("stray_image", null)} // Clear image on click
                    className="absolute top-2 right-2 bg-white text-crimsonRed border-2 border-crimsonRed rounded-full p-1 hover:bg-crimsonRed hover:text-white transition-all"
                  >
                    <X size={20} /> {/* Lucide X icon */}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Stray Background */}
          <div className="col-span-2">
            <label className="font-semibold text-darkRed mb-1 block">Background Information:</label>
            <textarea
              required
              value={newStray.stray_background}
              onChange={(e) => handleChange("stray_background", e.target.value)}
              placeholder="Brief background about the stray..."
              rows={3}
              className="w-full px-4 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed text-darkRed"
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
