import React from 'react';

interface AdopterPreferencesProps {
  formData: {
    Specific_pet: string;
    Specific_shelter: string;
    Preferred_stray_sex: string;
    Appearance: string;
    Preferred_age: string;
    Preferred_energy_level: string;
    Sociability: string;
    Personality: string;
    Open_to_stray_with_med_needs: string;
    Specific_appearance: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit?: () => void;
}

export default function AdopterPreferences({ formData, onInputChange, onSubmit }: AdopterPreferencesProps) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
        ADOPTER’S STRAY PREFERENCES
      </h2>

      <div>

        {/* Looking to Adopt */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What are you looking to adopt?
          </label>
          <select
            required
            value={formData.Specific_pet}
            onChange={(e) => onInputChange('Specific_pet', e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Specific_pet ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option value="Cat" className="text-darkRed">Cat</option>
            <option value="Dog" className="text-darkRed">Dog</option>
            <option value="Both" className="text-darkRed">Both</option>
            <option value="Not Decided" className="text-darkRed">Not Decided</option>
          </select>
        </div>

        {/* Specific Shelter */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Applying to adopt a specific shelter animal?
          </label>
          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {['Yes', 'No'].map((opt) => (
              <label
                key={opt}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Specific_shelter === opt ? "bg-crimsonRed text-white" : "text-darkRed bg-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="Specific_shelter"
                  value={opt}
                  checked={formData.Specific_shelter === opt}
                  onChange={(e) => onInputChange('Specific_shelter', e.target.value)}
                  className="hidden"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Sex */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What is your preferred sex?
          </label>
          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {['Male', 'Female', 'No Preferences'].map((opt) => (
              <label
                key={opt}
                className={`text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200
                  ${formData.Preferred_stray_sex === opt ? "bg-crimsonRed text-white" : "text-darkRed bg-transparent"}
                  ${opt === 'No Preferences' ? "flex-[2]" : "flex-1"}
                `}
              >
                <input
                  type="radio"
                  name="Preferred_stray_sex"
                  value={opt}
                  checked={formData.Preferred_stray_sex === opt}
                  onChange={(e) => onInputChange('Preferred_stray_sex', e.target.value)}
                  className="hidden"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What kind of appearance do you prefer?
          </label>
          <select
            required
            value={formData.Appearance}
            onChange={(e) => onInputChange('Appearance', e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Appearance ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option className="text-darkRed">Black</option>
            <option className="text-darkRed">White</option>
            <option className="text-darkRed">Brown</option>
            <option className="text-darkRed">Gray</option>
          </select>
        </div>

        {/* Age Group */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Which age group are you interested in?
          </label>
          <select
            required
            value={formData.Preferred_age}
            onChange={(e) => onInputChange('Preferred_age', e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Preferred_age ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option className="text-darkRed">Kitten/Puppy</option>
            <option className="text-darkRed">Young</option>
            <option className="text-darkRed">Adult</option>
            <option className="text-darkRed">Senior</option>
          </select>
        </div>

        {/* Energy Level */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What energy level do you prefer?
          </label>
          <select
            required
            value={formData.Preferred_energy_level}
            onChange={(e) => onInputChange('Preferred_energy_level', e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Preferred_energy_level ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option className="text-darkRed">Low</option>
            <option className="text-darkRed">Moderate</option>
            <option className="text-darkRed">High</option>
            <option className="text-darkRed">No Preference</option>
          </select>
        </div>

        {/* Sociability */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            How would you describe your preferred sociability?
          </label>
          <input
            required
            type="text"
            value={formData.Sociability}
            onChange={(e) => onInputChange('Sociability', e.target.value)}
            placeholder="Friendly/Shy/Independent..."
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
        </div>

         {/* Personality */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What kind of personality or traits are you looking for?
          </label>
          <select
            required
            value={formData.Personality}
            onChange={(e) => onInputChange('Personality', e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Personality ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select</option>
            <option className="text-darkRed">Playful</option>
            <option className="text-darkRed">Calm</option>
            <option className="text-darkRed">Protective</option>
            <option className="text-darkRed">Vocal</option>
            <option className="text-darkRed">Quiet</option>
          </select>
        </div>
        
        {/* Medical Needs */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Are you open to pets with medical needs?
          </label>
          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {['Yes', 'No'].map((opt) => (
              <label
                key={opt}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Open_to_stray_with_med_needs === opt ? "bg-crimsonRed text-white" : "text-darkRed bg-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="Open_to_stray_with_med_needs"
                  value={opt}
                  checked={formData.Open_to_stray_with_med_needs === opt}
                  onChange={(e) => onInputChange('Open_to_stray_with_med_needs', e.target.value)}
                  className="hidden"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Specific Appearance */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Would you like a stray with a specific appearance?
          </label>
          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {['Yes', 'Any appearance is fine'].map((opt) => (
              <label
                key={opt}
                className={`text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 
                  ${formData.Specific_appearance === opt ? "bg-crimsonRed text-white" : "text-darkRed bg-transparent"} 
                  ${opt === 'Any appearance is fine' ? "flex-[2]" : "flex-1"}`}
                >
                <input
                  type="radio"
                  name="Specific_appearance"
                  value={opt}
                  checked={formData.Specific_appearance === opt}
                  onChange={(e) => onInputChange('Specific_appearance', e.target.value)}
                  className="hidden"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

      </div>

    </form>
  );
}