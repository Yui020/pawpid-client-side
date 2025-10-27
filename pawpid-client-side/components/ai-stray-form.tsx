import { useState } from 'react';

export default function AIStrayForm({ onGenerate }: { onGenerate: (formData: any) => void }) {
  const [formData, setFormData] = useState({
    Pet_type: '',
    Pet_Size: '',
    Pet_physique: '',
    Pet_eyes: '',
    Pet_pattern: '',
    Pet_fur: '',
    Pet_ears: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  function onInputChange(arg0: string, value: string): void {
    throw new Error('Function not implemented.');
  }

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
                  name="Pet_type"
                  value={type}
                  checked={formData.Pet_type === type}
                  onChange={(e) => handleChange('Pet_type', e.target.value)}
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
                  name="Pet_Size"
                  value={size}
                  checked={formData.Pet_Size === size}
                  onChange={(e) => handleChange('Pet_Size', e.target.value)}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Size:
          </label>
          <select
            required
            name="Size"
            value={formData.Pet_Size}
            onChange={(e) => onInputChange("Pet_Size", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Physique/Built */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Physique/Built:
          </label>
          <select
            required
            name="Pet_physique"
            value={formData.Pet_physique}
            onChange={(e) => onInputChange("Pet_physique", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Slim">Slim</option>
            <option value="Medium-built">Medium-built</option>
            <option value="Muscular">Muscular</option>
            <option value="Stocky">Stocky</option>
          </select>
        </div>

        {/* Eyes */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Eyes:
          </label>
          <select
            required
            name="Pet_pattern"
            value={formData.Pet_pattern}
            onChange={(e) => onInputChange("Pet_pattern", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Round">Round</option>
            <option value="Almond-shaped">Almond-shaped</option>
            <option value="Expressive">Expressive</option>
            <option value="Narrow">Narrow</option>
          </select>
        </div>

        {/* Pattern */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Pattern:
          </label>
          <select
            required
            name="Pet_pattern"
            value={formData.Pet_pattern}
            onChange={(e) => onInputChange("Pet_pattern", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Solid">Solid (plain coat)</option>
            <option value="Spotted">Spotted</option>
            <option value="Brindle">Brindle</option>
            <option value="Mixed patches">Mixed patches</option>
            <option value="Tuxedo-like">Tuxedo-like</option>
          </select>
        </div>

        {/* Fur */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Fur:
          </label>
          <select
            required
            name="Pet_fur"
            value={formData.Pet_fur}
            onChange={(e) => onInputChange("Pet_fur", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Short">Short</option>
            <option value="Medium-length">Medium-length</option>
            <option value="Coarse">Coarse</option>
            <option value="Smooth">Smooth</option>
            <option value="Scruffy">Scruffy</option>
          </select>
        </div>

        {/* Ears */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Ears:
          </label>
          <select
            required
            name="Pet_ears"
            value={formData.Pet_ears}
            onChange={(e) => onInputChange("Pet_ears", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="Pointed/erect">Pointed/erect</option>
            <option value="Semi-floppy">Semi-floppy</option>
            <option value="Fully floppy">Fully floppy</option>
            <option value="Folded forward">Folded forward</option>
          </select>
        </div>
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