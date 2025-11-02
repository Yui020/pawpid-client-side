import React from "react";

interface AdopterConfirmationProps {
  formData: {
    idFile: File | null;
    homePhotos: File[];
    interviewDate: string;
    interviewTime: string;
    visitShelter: string;
  };
   onInputChange: <K extends keyof AdopterConfirmationProps["formData"]>(
    field: K,
    value: AdopterConfirmationProps["formData"][K]
  ) => void;
}

const AdopterConfirmation: React.FC<AdopterConfirmationProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <form>
      <h2 className="text-3xl font-fredoka font-bold text-darkRed mb-6 border-b-5 border-darkRed text-center pb-2">LIVING SPACE & CONFIRMATION</h2>

      {/* File Uploads */}
      <div className="grid grid-cols-2 mb-6">
        
        <div>
          <p className="font-poppins font-semibold text-darkRed mb-2">Please attach photos of your home:</p>
          <ul className="list-decimal list-inside text-sm font-poppins text-darkRed mb-3 space-y-1">
            <li>Front of the house</li>
            <li>Street photo</li>
            <li>Living room</li>
            <li>Dining area</li>
            <li>Kitchen</li>
            <li>Bedroom/s (if your pet will have access)</li>
            <li>Windows (if adopting a cat)</li>
            <li>Front & backyard (if adopting a dog)</li>
          </ul>
        </div>
        
        <div>
           <div className="border-2 border-dashed border-crimsonRed rounded-md p-6 text-center mb-4 bg-white">
            <div className="text-crimsonRed mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-sm font-poppins text-darkRed mb-2">Click to upload or drag and drop</p>
            <p className="text-xs font-poppins text-darkRed">SVG, PNG, or JPG (Max. file size: 8 MB.)</p>
            <input required type="file" accept="image/svg+xml,image/png,image/jpeg,image/jpg" multiple
              onChange={(e) =>
                onInputChange("homePhotos", Array.from(e.target.files || []).slice(0, 8))
              }
              className="hidden"
              id="homePhotos"
            />
            <label htmlFor="homePhotos" className="cursor-pointer inline-block mt-3 px-4 py-2 bg-peachCream text-crimsonRed font-poppins font-semibold rounded-md hover:bg-crimsonRed hover:text-white transition-colors">Choose Files</label>
          </div> 
        </div>
       
      </div>
      
      <div className="grid grid-cols-4 mb-6">
        <div>
          <label className="block font-poppins font-semibold text-darkRed mb-2">Upload a valid ID:</label>
          <p className="text-xs font-poppins text-darkRed mb-2">Max. file size: 8 MB.</p>
        </div>
        
        <div className="col-span-3"> 
          <input required type="file" accept="image/svg+xml,image/png,image/jpeg,image/jpg"
            onChange={(e) =>
              onInputChange("idFile", e.target.files ? e.target.files[0] : null)
            }
            className="block w-full border-2 font-poppins border-crimsonRed rounded-md py-2 px-3 text-darkRed file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-peachCream file:text-crimsonRed file:font-poppins file:font-semibold hover:file:bg-crimsonRed hover:file:text-white file:cursor-pointer"
          />
        </div> 
      </div>
      

      {/* Interview */}
      <div className="border-t-3 border-crimsonRed pt-4">
        <h3 className="text-xl text-crimsonRed font-poppins font-semibold text-center"> Interview & Visitation</h3>
        <p className="text-sm text-darkRed font-poppins italic mb-6 text-center"> (Minors must be accompanied by a parent or guardian.)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Zoom Interview Date */}
          <div>
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
              Preferred date for Zoom interview
            </label>
            <input
              required
              type="date"
              value={formData.interviewDate}
              onChange={(e) => onInputChange("interviewDate", e.target.value)}
              className="w-full px-4 py-2 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
          </div>
          
          {/* Zoom Interview Time */}
          <div>
            <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
              Preferred time for Zoom interview
            </label>
            <input
              required
              type="time"
              value={formData.interviewTime}
              onChange={(e) => onInputChange("interviewTime", e.target.value)}
              className="w-full px-4 py-2 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
            />
          </div>
        </div>

      </div>

      {/* Visit Shelter */}
      <div className="grid grid-cols-2 gap-6 items-center mb-5 mt-6">
        <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">Will you be able to visit the shelter for the meet-and-greet?</label>
        <div className="flex border px-2 py-2 border-crimsonRed rounded-md overflow-hidden w-full">
          {["Yes", "No"].map((opt) => (
            <label
              key={opt}
              className={`flex-1 text-center cursor-pointer py-1 font-poppins text-sm border-r last:border-r-0 border-crimsonRed transition-all duration-200 ${
                formData.visitShelter === opt ? "bg-crimsonRed text-white" : "text-darkRed bg-transparent"
              }`}
            >
              <input
                type="radio"
                name="visitShelter"
                value={opt}
                checked={formData.visitShelter === opt}
                onChange={(e) => onInputChange("visitShelter", e.target.value)}
                className="hidden"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

    </form>
  );
};

export default AdopterConfirmation;