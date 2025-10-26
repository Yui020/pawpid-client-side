import { useState } from 'react';

export default function AIStrayForm({ onGenerate }: { onGenerate: (formData: any) => void }) {
  const [formData, setFormData] = useState({
    petType: '',
    petSize: '',
    physique: '',
    eyes: '',
    pattern: '',
    fur: '',
    ears: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFF3F0] rounded-xl p-6 shadow-md border-2 border-[#EBC6C2]"
    >
      <div className="space-y-4">
        <div>
          <label className="font-semibold block mb-1 text-[#911A1C]">Pet Type:</label>
          <div className="flex gap-6">
            {['Cat', 'Dog'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="petType"
                  value={type}
                  checked={formData.petType === type}
                  onChange={(e) => handleChange('petType', e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1 text-[#911A1C]">Pet Size:</label>
          <div className="flex gap-6">
            {['Small', 'Medium', 'Large'].map((size) => (
              <label key={size} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="petSize"
                  value={size}
                  checked={formData.petSize === size}
                  onChange={(e) => handleChange('petSize', e.target.value)}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {['Physique/Built', 'Eyes', 'Pattern', 'Fur', 'Ears'].map((label) => (
          <div key={label}>
            <label className="font-semibold block mb-1 text-[#911A1C]">{label}:</label>
            <select
              required
              className="border rounded-md w-full p-2 focus:ring-2 focus:ring-[#911A1C]"
              onChange={(e) => handleChange(label.toLowerCase().replace(/\/.*$/, ''), e.target.value)}
            >
              <option value="">Select</option>
              <option>Slim</option>
              <option>Medium-built</option>
              <option>Muscular</option>
            </select>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        <strong>Disclaimer:</strong> AI Pet Generator is an optional feature designed to help visualize your preferred pet. It does not alter, replace, or affect any real stray animals in the shelters.
      </p>

      <button
        type="submit"
        className="w-full mt-4 bg-[#911A1C] hover:bg-[#6d1315] text-white font-semibold py-2 rounded-md transition-colors"
      >
        Generate AI Pet
      </button>
    </form>
  );
}