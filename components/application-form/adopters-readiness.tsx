import React from 'react';

interface AdopterReadinessProps {
  formData: {
    Have_other_pets: string;
    Had_pets_before: string;
    Care_responsible_person: string;
    Financial_responsible_person: string;
    Vacation_caretaker: string;
    Hours_pet_left_alone: string;
    Introduction_steps: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

const AdopterReadiness: React.FC<AdopterReadinessProps> = ({ formData, onInputChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
         ADOPTION READINESS QUESTIONS
        </h2>

      <div className="space-y-6">
        {/* Do you have other pets & Had pets in the past */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset>
            <legend className="block text-gray-800 font-semibold mb-3">
              Do you have other pets
            </legend>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="Have_other_pets"
                  value="yes"
                  checked={formData.Have_other_pets === 'yes'}
                  onChange={(e) => onInputChange('Have_other_pets', e.target.value)}
                  className="w-5 h-5 border-2 border-gray-400"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasOtherPets"
                  value="no"
                  checked={formData.Had_pets_before === 'no'}
                  onChange={(e) => onInputChange('hasOtherPets', e.target.value)}
                  className="w-5 h-5 border-2 border-gray-400"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="block text-gray-800 font-semibold mb-3">
              Have you had pets in the past?
            </legend>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="Had_pets_before"
                  value="yes"
                  checked={formData.Had_pets_before === 'yes'}
                  onChange={(e) => onInputChange('Had_pets_before', e.target.value)}
                  className="w-5 h-5 border-2 border-gray-400"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="Had_pets_before"
                  value="no"
                  checked={formData.Had_pets_before === 'no'}
                  onChange={(e) => onInputChange('Had_pets_before', e.target.value)}
                  className="w-5 h-5 border-2 border-gray-400"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </fieldset>
        </div>

        {/* Feeding responsibility */}
        <div>
          <label htmlFor="Care_responsible_person" className="block text-gray-800 font-semibold mb-2">
            Who will be responsible for feeding, grooming, and generally caring for your pet?
          </label>
          <input
            type="text"
            id="Care_responsible_person"
            name="Care_responsible_person"
            placeholder="Enter here...."
            value={formData.Care_responsible_person}
            onChange={(e) => onInputChange('Care_responsible_person', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Financial responsibility */}
        <div>
          <label htmlFor="Financial_responsible_person" className="block text-gray-800 font-semibold mb-2">
            Who will be financially responsible for your pet's needs (i.e. food, vet bills, etc.)
          </label>
          <input
            type="text"
            id="Financial_responsible_person"
            name="Financial_responsible_person"
            placeholder="Enter here...."
            value={formData.Financial_responsible_person}
            onChange={(e) => onInputChange('Financial_responsible_person', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Vacation care */}
        <div>
          <label htmlFor="Vacation_caretaker" className="block text-gray-800 font-semibold mb-2">
            Who will look after your pet if you go on vacation or in case of emergency?
          </label>
          <input
            type="text"
            id="Vacation_caretaker"
            name="Vacation_caretaker"
            placeholder="Enter here...."
            value={formData.Vacation_caretaker}
            onChange={(e) => onInputChange('Vacation_caretaker', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Hours alone */}
        <div>
          <label htmlFor="Hours_pet_left_alone" className="block text-gray-800 font-semibold mb-2">
            How many hours in an average workday will your pet be left alone?
          </label>
          <input
            type="text"
            id="Hours_pet_left_alone"
            name="Hours_pet_left_alone"
            placeholder="Enter here...."
            value={formData.Hours_pet_left_alone}
            onChange={(e) => onInputChange('Hours_pet_left_alone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Introduction steps */}
        <div>
          <label htmlFor="Introduction_steps" className="block text-gray-800 font-semibold mb-2">
            What steps will you take to introduce your new pet to his/her new surroundings?
          </label>
          <textarea
            id="Introduction_steps"
            name="Introduction_steps"
            rows={4}
            placeholder="Enter here...."
            value={formData.Introduction_steps}
            onChange={(e) => onInputChange('Introduction_steps', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C] resize-none"
          />
        </div>
      </div>
    </form>
  );
};

export default AdopterReadiness;