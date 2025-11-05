import React from 'react';

interface AdopterReadinessProps {
  formData: {
    Have_other_pets: string;
    Had_pets_before: string;
    Care_responsible_person: string;
    Financial_responsible_person: string;
    Monthy_budget: string;
    Vacation_caretaker: string;
    Hours_pet_left_alone: string;
    Work_Type: string;
    Introduction_steps: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const AdopterReadiness: React.FC<AdopterReadinessProps> = ({ formData, onInputChange }) => {
  return (
    <div>

      <h2 className="text-3xl font-fredoka font-bold text-darkRed mb-6 border-b-5 border-darkRed text-center pb-2">ADOPTION READINESS QUESTIONS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        
        {/* Do you have other pets */} 
        <div>
          <div>
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">Do you have other pets?</label>
          </div>

          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {["Yes", "No"].map((HasOtherPets) => (
              <label key={HasOtherPets}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Have_other_pets === HasOtherPets
                    ? "bg-crimsonRed text-white"
                    : "text-darkRed bg-transparent"
                }`}
              >
                <input type="radio" name="Have_other_pets" value={HasOtherPets}
                  checked={formData.Have_other_pets === HasOtherPets}
                  onChange={(e) => onInputChange("Have_other_pets", e.target.value)}
                  className="hidden"
                />
                {HasOtherPets}
              </label>
            ))}
          </div>
        </div>

        {/* Have you had pets before */} 
        <div>
          <div>
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">Have you had pets in the past?</label>
          </div>

          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {["Yes", "No"].map((HadPetsBefore) => (
              <label key={HadPetsBefore}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Had_pets_before === HadPetsBefore
                    ? "bg-crimsonRed text-white"
                    : "text-darkRed bg-transparent"
                }`}
              >
                <input type="radio" name="Had_pets_before" value={HadPetsBefore}
                  checked={formData.Had_pets_before === HadPetsBefore}
                  onChange={(e) => onInputChange("Had_pets_before", e.target.value)}
                  className="hidden"
                />
                {HadPetsBefore}
              </label>
            ))}
          </div>
        </div>

        {/* Feeding responsibility */}
        <div>
         <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Who will be responsible for feeding, grooming, and generally caring for your pet?</label>

          <select required name="Care_responsible_person" value={formData.Care_responsible_person} onChange={(e) => onInputChange("Care_responsible_person", e.target.value)}        
            className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Care_responsible_person ? "text-darkRed" : "text-grayPink")}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option value="Daily_Self" className="text-darkRed">Me</option>
            <option value="Daily_Shared" className="text-darkRed">Shared Responsibility</option>
            <option value="Daily_Family_Member" className="text-darkRed">Family Member</option>
          </select>
        </div>

        {/* Vacation care */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Do you have someone who can take care of your pet when you are away or in an emergency?</label>

          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {["Yes", "No"].map((Vacation_caretaker) => (
              <label key={Vacation_caretaker}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Vacation_caretaker === Vacation_caretaker
                    ? "bg-crimsonRed text-white"
                    : "text-darkRed bg-transparent"
                }`}
              >
                <input type="radio" name="Vacation_caretaker" value={Vacation_caretaker}
                  checked={formData.Vacation_caretaker === Vacation_caretaker}
                  onChange={(e) => onInputChange("Vacation_caretaker", e.target.value)}
                  className="hidden"
                />
                {Vacation_caretaker}
              </label>
            ))}
          </div>
        </div>

        {/* Financial responsibility */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Who will be financially responsible for your pet's needs (i.e. food, vet bills, etc.)</label>
          
          <select required name="Financial_responsible_person" value={formData.Financial_responsible_person} onChange={(e) => onInputChange("Financial_responsible_person", e.target.value)}        
            className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Financial_responsible_person ? "text-darkRed" : "text-grayPink")}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option value="Financial_Self" className="text-darkRed">Me</option>
            <option value="Financial_Shared" className="text-darkRed">Shared Responsibility</option>
            <option value="Financial_Family_Member" className="text-darkRed">Family Member</option>
          </select>
        </div>
      

        {/* Hours alone */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> How many hours in an average workday will your pet be left alone?</label>

           <select required name="Hours_pet_left_alone" value={formData.Hours_pet_left_alone}
              onChange={(e) => onInputChange("Hours_pet_left_alone", e.target.value)}
              className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Hours_pet_left_alone ? "text-darkRed" : "text-grayPink")}
              style={{
                appearance: "none",
                backgroundImage: "url('/icons/dropdown-icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "18px 10px",
              }}
            >
              <option value="" className="text-grayPink" disabled>Select Hours Pet Left Alone</option>
              <option value="Pet_Alone_1" className="text-darkRed">0 to 2 hours</option>
              <option value="Pet_Alone_2" className="text-darkRed">3 to 6 hours</option>
              <option value="Pet_Alone_3" className="text-darkRed">7 to 12 hours</option>
              <option value="Pet_Alone_4" className="text-darkRed">More than 12 hours</option>
            </select>
        </div>

        {/* Monthly Pet Budget */}
          <div>
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">What is your estimated monthly budget for your pet's care (food, grooming, health, etc.)?</label>
            <input required type="text" value={formData.Monthy_budget} placeholder="Enter here.."
              onChange={(e) => onInputChange('Monthy_budget', e.target.value)}
              className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
          </div>

        {/* Work Type */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> What type of work arrangement do you have?</label>

           <select required name="Work_Type" value={formData.Work_Type}
              onChange={(e) => onInputChange("Work_Type", e.target.value)}
              className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Work_Type ? "text-darkRed" : "text-grayPink")}
              style={{
                appearance: "none",
                backgroundImage: "url('/icons/dropdown-icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "18px 10px",
              }}
            >
              <option value="" className="text-grayPink" disabled>Select Work Arrangement</option>
              <option value="Remote" className="text-darkRed">Remote (work from home)</option>
              <option value="Hybrid" className="text-darkRed">Hybrid (mix of home and office)</option>
              <option value="On-site" className="text-darkRed">On-site (office/workplace)</option>
            </select>
        </div>

        {/* Introduction steps */}
        <div className="col-span-2">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> What steps will you take to introduce your new pet to his/her new surroundings?</label>
          <textarea
              value={formData.Introduction_steps}
              onChange={(e) => onInputChange("Introduction_steps", e.target.value)}
              placeholder="Enter your explanation here..."
              rows={3}
              className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
        </div>

      </div>
    </div>
  );
};

export default AdopterReadiness;