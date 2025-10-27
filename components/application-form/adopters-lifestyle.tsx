import React from "react";

interface AdopterLifestyleProps {
  formData: {
    Building_type: string;
    Renting: string;
    Living_with: string;
    Plan_if_moving: string;
    Allergic_household_member: string;
    familySupport: string;
    explanation: string;
  };
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function AdopterLifestyle({
  formData,
  onInputChange,
  onNext,
  onBack,
}: AdopterLifestyleProps) {
  return (
    <form className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
          ADOPTER’S LIFESTYLE
        </h2>

          {/* Building Type */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              What type of building do you live in?
            </label>
            <select
              value={formData.Building_type}
              onChange={(e) => onInputChange("Building_type", e.target.value)}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-800 focus:border-[#6B1F1F] focus:ring-0"
            >
              <option value="">Select</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
            </select>
          </div>

          {/* Do you rent */}
          <div>
            <label className="block text-sm font-semibold text-[#460000]mb-2">
              Do you rent?
            </label>
            <p className="text-xs italic text-gray-500 mb-2">
              If YES, please secure a written letter from your landlord that pets are allowed.
            </p>
            <div className="flex gap-6">
              {["Yes", "No"].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="Renting"
                    value={val}
                    checked={formData.Renting === val}
                    onChange={(e) => onInputChange("Renting", e.target.value)}
                    className="w-4 h-4 accent-[#6B1F1F]"
                  />
                  <span className="text-sm text-gray-700">{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Who do you live with */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              Who do you live with?
            </label>
            <select
              value={formData.Living_with}
              onChange={(e) => onInputChange("Living_with", e.target.value)}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-800 focus:border-[#6B1F1F] focus:ring-0"
            >
              <option value="">Select</option>
              <option value="Alone">Living Alone</option>
              <option value="Spouse">Spouse</option>
              <option value="Parents">Parents</option>
              <option value="Parents">Children</option>
              <option value="Parents">Spouse and Children</option>
              <option value="Roommates">Relatives</option>
              <option value="Roommates">Roommates</option>
            </select>
          </div>

          {/* PPlan of Moving */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              What happens to your pet if or when you move?
            </label>
            <input
              required
              type="text"
              value={formData.Plan_if_moving}
              onChange={(e) => onInputChange('Plan_if_moving', e.target.value)}
              className="border rounded-md w-full p-2"
              placeholder="Enter here.."
            />
          </div>

          {/* Household Allergies */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              Are any members of your household allergic to animals?
            </label>
            <div className="flex gap-6">
              {["Yes", "No"].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="Allergic_household_member"
                    value={val}
                    checked={formData.Allergic_household_member === val}
                    onChange={(e) => onInputChange("householdAllergies", e.target.value)}
                    className="w-4 h-4 accent-[#6B1F1F]"
                  />
                  <span className="text-sm text-gray-700">{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Family Support */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              Does everyone in the family support your decision to adopt a pet?
            </label>
            <div className="flex gap-6">
              {["Yes", "No"].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="familySupport"
                    value={val}
                    checked={formData.familySupport === val}
                    onChange={(e) => onInputChange("familySupport", e.target.value)}
                    className="w-4 h-4 accent-[#6B1F1F]"
                  />
                  <span className="text-sm text-gray-700">{val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Explanation */}
          <div>
            <label className="block text-sm font-semibold text-[#460000] mb-2">
              Please explain:
            </label>
            <textarea
              value={formData.explanation}
              onChange={(e) => onInputChange("explanation", e.target.value)}
              placeholder="Enter your explanation here..."
              rows={3}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-800 focus:border-[#6B1F1F] focus:ring-0 resize-none"
            />
          </div>
      </div>
    </form>
  );
}