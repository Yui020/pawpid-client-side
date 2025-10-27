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
  onSubmit: (e: React.FormEvent) => void;
}

export default function AdopterPreferences({ formData, onInputChange, onSubmit }: AdopterPreferencesProps) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
        ADOPTER’S STRAY PREFERENCES
      </h2>

      <div className="space-y-5">

        {/* Looking to Adopt */}
        <label className="block font-medium">What are you looking to adopt?</label>
        <select
          required
          value={formData.Specific_pet}
          onChange={(e) => onInputChange('Specific_pet', e.target.value)}
          className="border rounded-md w-full p-2 focus:ring-2 focus:ring-[#911A1C]"
        >
          <option value="">Select</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Both">Both</option>
          <option value="Not Decided">Not Decided</option>
        </select>

        {/* Specific Shelter */}
        <label className="block font-medium">Applying to adopt a specific shelter animal?</label>
        <div className="flex gap-4">
          {['Yes', 'No'].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                required
                type="radio"
                name="Specific_shelter"
                value={opt}
                checked={formData.Specific_shelter === opt}
                onChange={(e) => onInputChange('Specific_shelter', e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Preferred Sex */}
        <label className="block font-medium">What is your preferred sex?</label>
        <div className="flex gap-4">
          {['Male', 'Female', 'No Preferences'].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                required
                type="radio"
                name="Preferred_stray_sex"
                value={opt}
                checked={formData.Preferred_stray_sex === opt}
                onChange={(e) => onInputChange('Preferred_stray_sex', e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Appearance */}
        <label className="block font-medium">What kind of appearance do you prefer?</label>
        <select
          required
          value={formData.Appearance}
          onChange={(e) => onInputChange('Appearance', e.target.value)}
          className="border rounded-md w-full p-2"
        >
          <option value="">Select</option>
          <option>Black</option>
          <option>White</option>
          <option>Brown</option>
          <option>Gray</option>
        </select>

        {/* Age Group */}
        <label className="block font-medium">Which age group are you interested in?</label>
        <select
          required
          value={formData.Preferred_age}
          onChange={(e) => onInputChange('Preferred_age', e.target.value)}
          className="border rounded-md w-full p-2"
        >
          <option value="">Select</option>
          <option>Kitten/Puppy</option>
          <option>Young</option>
          <option>Adult</option>
          <option>Senior</option>
        </select>

        {/* Energy Level */}
        <label className="block font-medium">What energy level do you prefer?</label>
        <select
          required
          value={formData.Preferred_energy_level}
          onChange={(e) => onInputChange('Preferred_energy_level', e.target.value)}
          className="border rounded-md w-full p-2"
        >
          <option value="">Select</option>
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
          <option>No Preference</option>
        </select>

        {/* Sociability */}
        <label className="block font-medium">How would you describe your preferred sociability?</label>
        <input
          required
          type="text"
          value={formData.Sociability}
          onChange={(e) => onInputChange('Sociability', e.target.value)}
          className="border rounded-md w-full p-2"
          placeholder="Friendly/Shy/Independent..."
        />

        {/* Personality */}
        <label className="block font-medium">What kind of personality or traits are you looking for?</label>
        <select
          required
          value={formData.Personality}
          onChange={(e) => onInputChange('Personality', e.target.value)}
          className="border rounded-md w-full p-2"
        >
          <option value="">Select</option>
          <option>Playful</option>
          <option>Calm</option>
          <option>Protective</option>
          <option>Vocal</option>
          <option>Quiet</option>
        </select>

        {/* Medical Needs */}
        <label className="block font-medium">Are you open to pets with medical needs?</label>
        <div className="flex gap-4">
          {['Yes', 'No'].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                required
                type="radio"
                name="Open_to_stray_with_med_needs"
                value={opt}
                checked={formData.Open_to_stray_with_med_needs === opt}
                onChange={(e) => onInputChange('Open_to_stray_with_med_needs', e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Specific Appearance */}
        <label className="block font-medium">Would you like a stray with a specific appearance?</label>
        <div className="flex gap-4">
          {['Yes', 'Any appearance is fine'].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                required
                type="radio"
                name="Specific_appearance"
                value={opt}
                checked={formData.Specific_appearance === opt}
                onChange={(e) => onInputChange('Specific_appearance', e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>

      </div>

    </form>
  );
}