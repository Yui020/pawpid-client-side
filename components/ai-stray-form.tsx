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

  // Validation function to check if all fields are filled
  const isFormValid = () => {
    return (
      formData.Pet_type !== '' &&
      formData.Pet_Size !== '' &&
      formData.Pet_physique !== '' &&
      formData.Pet_eyes !== '' &&
      formData.Pet_pattern !== '' &&
      formData.Pet_fur !== '' &&
      formData.Pet_ears !== ''
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onGenerate(formData);
    }
  };

  function onInputChange(field: string, value: string) {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bgColor rounded-xl p-6 shadow-md border-2 border-[#EBC6C2]"
    >
      <div className="space-y-4">
        
        {/* Pet Type */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What type of pet do you prefer? <span className="text-crimsonRed">*</span>
          </label>
          <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
            {["Cat", "Dog"].map((Pet_type) => (
              <label
                key={Pet_type}
                className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                  formData.Pet_type === Pet_type
                    ? "bg-crimsonRed text-white"
                    : "text-darkRed bg-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="Pet_type"
                  value={Pet_type}
                  checked={formData.Pet_type === Pet_type}
                  onChange={(e) => onInputChange("Pet_type", e.target.value)}
                  className="hidden"
                />
                {Pet_type}
              </label>
            ))}
          </div>
        </div>

        {/* Pet Size */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            What size of pet do you prefer? <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_Size" 
            value={formData.Pet_Size}
            onChange={(e) => onInputChange("Pet_Size", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_Size ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select Size</option>
            <option value="Small" className="text-darkRed"> Small </option>
            <option value="Medium" className="text-darkRed"> Medium </option>
            <option value="Large" className="text-darkRed"> Large </option>
          </select>
        </div>
   
        {/* Physique */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Physique/Built: <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_physique" 
            value={formData.Pet_physique}
            onChange={(e) => onInputChange("Pet_physique", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_physique ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select </option>
            <option value="Slim" className="text-darkRed"> Slim </option>
            <option value="Medium-built" className="text-darkRed"> Medium-built </option>
            <option value="Muscular" className="text-darkRed"> Muscular </option>
            <option value="Stocky" className="text-darkRed"> Stocky </option>
          </select>
        </div>

        {/* Eyes */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Eye Type: <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_eyes" 
            value={formData.Pet_eyes}
            onChange={(e) => onInputChange("Pet_eyes", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_eyes ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select  </option>
            <option value="Round" className="text-darkRed"> Round </option>
            <option value="Almond-shaped" className="text-darkRed"> Almond-shaped </option>
            <option value="Expressive" className="text-darkRed"> Expressive  </option>
            <option value="Narrow" className="text-darkRed"> Narrow </option>
          </select>
        </div>

        {/* Pattern */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Pattern: <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_pattern" 
            value={formData.Pet_pattern}
            onChange={(e) => onInputChange("Pet_pattern", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_pattern ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select </option>
            <option value="Solid" className="text-darkRed"> Solid (plain coat)  </option>
            <option value="Spotted" className="text-darkRed"> Spotted </option>
            <option value="Brindle" className="text-darkRed"> Brindle </option>
            <option value="Mixed patches" className="text-darkRed"> Mixed patches </option>
            <option value="Tuxedo-like" className="text-darkRed"> Tuxedo-like </option>
          </select>
        </div>

         {/* Fur */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Fur Type: <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_fur" 
            value={formData.Pet_fur}
            onChange={(e) => onInputChange("Pet_fur", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_fur ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select </option>
            <option value="Short" className="text-darkRed"> Short </option>
            <option value="Medium-length" className="text-darkRed">  Medium-length </option>
            <option value="Coarse" className="text-darkRed"> Coarse </option>
            <option value="Smooth" className="text-darkRed"> Smooth </option>
            <option value="Scruffy" className="text-darkRed"> Scruffy </option>
          </select>
        </div>

        {/* Ears */}
        <div className="grid grid-cols-2 gap-6 items-center mb-5">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
            Ears: <span className="text-crimsonRed">*</span>
          </label>
          <select 
            required 
            name="Pet_ears" 
            value={formData.Pet_ears}
            onChange={(e) => onInputChange("Pet_ears", e.target.value)}
            className={`w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ${
              formData.Pet_ears ? "text-darkRed" : "text-grayPink"
            }`}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled> Select </option>
            <option value="Pointed/erect" className="text-darkRed"> Pointed/erect </option>
            <option value="Semi-floppy" className="text-darkRed"> Semi-floppy </option>
            <option value="Fully floppy" className="text-darkRed"> Fully floppy </option>
            <option value="Folded forward" className="text-darkRed"> Folded forward </option>
          </select>
        </div>
      </div>

       {/* Disclaimer */}
        <p className="text-xs text-darkRed italic text-justify mt-6 mb-4">
          <strong>Disclaimer:</strong> AI Pet Generator is an optional feature designed to help visualize your preferred pet. It does not alter, replace, or affect any real stray animals in the shelters.
        </p>

       {/* Submit Button */}
      <div className="flex">
        <button 
          type="submit"
          disabled={!isFormValid()}
          className={`w-full font-poppins px-8 py-2 rounded-md transition-colors font-semibold ${
            isFormValid()
              ? 'bg-crimsonRed text-white hover:bg-[#6d1315] cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Generate AI Pet
        </button>
      </div>
    </form>
  );
}