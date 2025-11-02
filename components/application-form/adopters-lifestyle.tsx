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
      
      <h2 className="text-3xl font-fredoka font-bold text-darkRed mb-6 border-b-5 border-darkRed text-center pb-2"> ADOPTER’S LIFESTYLE </h2>
      
        <div>
          {/* Building Type */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> What type of building do you live in?</label>
            
            <select required name="Building_type" value={formData.Building_type}
              onChange={(e) => onInputChange("Building_type", e.target.value)}
              className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Building_type ? "text-darkRed" : "text-grayPink")}
              style={{
                appearance: "none",
                backgroundImage: "url('/icons/dropdown-icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "18px 10px",
              }}
            >
              <option value="" className="text-grayPink" disabled>Select Bulding Type</option>
              <option value="House" className="text-darkRed">House</option>
              <option value="Apartment" className="text-darkRed">Apartment</option>
              <option value="Condo" className="text-darkRed">Condo</option>
            </select>
          </div>

          {/* Do you rent */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            
            <div>
              <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Do you rent?</label>
            <p className="text-xs text-darkRed italic mt-1"> If YES, please secure a written letter from your landlord that pets are allowed.</p>
            </div>
            
            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Yes", "No"].map((Renting) => (
                <label key={Renting}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    formData.Renting === Renting
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input type="radio" name="Renting" value={Renting} checked={formData.Renting === Renting}
                    onChange={(e) => onInputChange("Renting", e.target.value)}
                    className="hidden"
                  />
                  {Renting}
                </label>
              ))}
            </div>

          </div>

          {/* Who do you live with */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Who do you live with?</label>
            
            <select value={formData.Living_with}
              onChange={(e) => onInputChange("Living_with", e.target.value)}
              className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Living_with ? "text-darkRed" : "text-grayPink")}
              style={{
                appearance: "none",
                backgroundImage: "url('/icons/dropdown-icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "18px 10px",
              }}
            >
              <option value="" className="text-grayPink" disabled>Select</option>
              <option value="Alone" className="text-darkRed">Living Alone</option>
              <option value="Spouse" className="text-darkRed">Spouse</option>
              <option value="Parents" className="text-darkRed">Parents</option>
              <option value="Parents" className="text-darkRed">Children</option>
              <option value="Parents" className="text-darkRed">Spouse and Children</option>
              <option value="Roommates" className="text-darkRed">Relatives</option>
              <option value="Roommates" className="text-darkRed">Roommates</option>
            </select>
          </div>

          {/* Plan of Moving */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">What happens to your pet if or when you move?</label>
            <input required type="text" value={formData.Plan_if_moving} placeholder="Enter here.."
              onChange={(e) => onInputChange('Plan_if_moving', e.target.value)}
              className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
          </div>

          {/* Household Allergies */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <div>
              <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
                Are any members of your household allergic to animals?
              </label>
            </div>

            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Yes", "No"].map((Allergic_household_member) => (
                <label
                  key={Allergic_household_member}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    formData.Allergic_household_member === Allergic_household_member
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input type="radio" name="Allergic_household_member" value={Allergic_household_member}
                    checked={formData.Allergic_household_member === Allergic_household_member}
                    onChange={(e) => onInputChange("Allergic_household_member", e.target.value)}
                    className="hidden"
                  />
                  {Allergic_household_member}
                </label>
              ))}
            </div>
          </div>
          
          {/* Family Support */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <div>
              <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">Does everyone in the family support your decision to adopt a pet? </label>
            </div>

            <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
              {["Yes", "No"].map((familySupport) => (
                <label key={familySupport}
                  className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                    formData.familySupport === familySupport
                      ? "bg-crimsonRed text-white"
                      : "text-darkRed bg-transparent"
                  }`}
                >
                  <input type="radio" name="familySupport" value={familySupport}
                    checked={formData.familySupport === familySupport}
                    onChange={(e) => onInputChange("familySupport", e.target.value)}
                    className="hidden"
                  />
                  {familySupport}
                </label>
              ))}
            </div>
          </div>

          {/* Explanation */}
          <div className="grid grid-cols-2 gap-6 items-center mb-5">
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Please explain:</label>
            <textarea
              value={formData.explanation}
              onChange={(e) => onInputChange("explanation", e.target.value)}
              placeholder="Enter your explanation here..."
              rows={3}
              className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
          </div>

        </div>
    </form>
  );
}