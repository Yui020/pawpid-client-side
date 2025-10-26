import React from "react";

interface AdopterConfirmationProps {
  formData: {
    idFile: File | null;
    homePhotos: File | null;
    interviewDate: string;
    interviewTime: string;
    visitShelter: string;
  };
  onInputChange: (field: string, value: string | File | null) => void;
}

const AdopterConfirmation: React.FC<AdopterConfirmationProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <form>
      <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
        LIVING SPACE & CONFIRMATION
      </h2>

      {/* File Uploads */}
      <div className="mb-6">
        <p className="font-semibold text-[#460000] mb-2">
          Please attach photos of your home:
        </p>
        <ul className="list-disc list-inside text-sm text-[#460000] mb-3">
          <li>Front of the house</li>
          <li>Street photo</li>
          <li>Living room, dining area, kitchen</li>
          <li>Bedrooms/windows</li>
          <li>Front & backyard (if adopting a dog)</li>
        </ul>

        <label className="block font-semibold text-[#460000] mb-1">
          Upload a valid ID (max 8MB)
        </label>
        <input
          required
          type="file"
          accept="image/*"
          onChange={(e) =>
            onInputChange("idFile", e.target.files ? e.target.files[0] : null)
          }
          className="block w-full border border-[#5a0000] rounded-md py-2 px-3"
        />
      </div>

      {/* Interview */}
      <div className="border-t border-[#911A1C] pt-4 mt-4">
        <p className="text-[#460000] font-semibold mb-2">
          Interview & Visitation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#460000] font-semibold mb-2">
              Preferred date for Zoom interview
            </label>
            <input
              required
              type="date"
              value={formData.interviewDate}
              onChange={(e) => onInputChange("interviewDate", e.target.value)}
              className="w-full px-4 py-2 border border-[#5a0000] rounded-md"
            />
          </div>

          <div>
            <label className="block text-[#460000] font-semibold mb-2">
              Preferred time for Zoom interview
            </label>
            <input
              required
              type="time"
              value={formData.interviewTime}
              onChange={(e) => onInputChange("interviewTime", e.target.value)}
              className="w-full px-4 py-2 border border-[#5a0000] rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Visit shelter */}
      <div className="mt-6">
        <label className="block text-[#460000] font-semibold mb-2">
          Will you be able to visit the shelter for the meet-and-greet?
        </label>
        <div className="flex gap-4">
          <label>
            <input
              required
              type="radio"
              name="visitShelter"
              value="yes"
              checked={formData.visitShelter === "yes"}
              onChange={(e) => onInputChange("visitShelter", e.target.value)}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="visitShelter"
              value="no"
              checked={formData.visitShelter === "no"}
              onChange={(e) => onInputChange("visitShelter", e.target.value)}
            />{" "}
            No
          </label>
        </div>
      </div>
    </form>
  );
};

export default AdopterConfirmation;