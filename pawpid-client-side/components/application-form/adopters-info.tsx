import React from "react";

interface AdopterInformationProps {
  formData: {
    Occupation : string;
    Social_media_profile: string;
    Status: string;
    Pronouns: string;
    Alternate_contact: string;
    Relationship_contact: string;
    Phone_number: string;
    Email: string;
    AgreeToTerms: boolean;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

const AdopterInformation: React.FC<AdopterInformationProps> = ({
  formData,
  onInputChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-[#5C1414] mb-6 border-b-5 border-[#5C1414] text-center pb-2">
        ADOPTER’S INFORMATION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Occupation */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Occupation:
          </label>
          <input
            required 
            type="text"
            name="Occupation"
            value={formData.Occupation}
            onChange={(e) => onInputChange("Occupation", e.target.value)}
            placeholder="Occupation"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Social Media Profile */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Social Media Profile:
          </label>
          <input
            required 
            type="text"
            name="Social_media_profile"
            value={formData.Social_media_profile}
            onChange={(e) => onInputChange("Social_media_profile", e.target.value)}
            placeholder="@username"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Status:
          </label>
          <select
            required 
            name="Status"
            value={formData.Status}
            onChange={(e) => onInputChange("Status", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="widow">Widow</option>
          </select>
        </div>

        {/* Pronouns */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Pronouns:
          </label>
          <select
            name="Pronouns"
            value={formData.Pronouns}
            onChange={(e) => onInputChange("Pronouns", e.target.value)}
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          >
            <option value="">Select</option>
            <option value="she/her">She/Her</option>
            <option value="he/him">He/Him</option>
            <option value="they/their">They/Their</option>
          </select>
        </div>

        {/* Alternate Contact */}
        <div className="md:col-span-2">
          <label className="block text-[#460000] font-semibold mb-2">
            Alternate Contact:
          </label>
          <input
            type="text"
            name="Alternate_contact"
            value={formData.Alternate_contact}
            onChange={(e) => onInputChange("Alternate_contact", e.target.value)}
            placeholder="Parent/Guardian"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
          <p className="text-sm text-[#460000] italic mt-1">
            If the applicant is a minor, a parent or guardian must be the
            alternate contact and co-sign the application.
          </p>
        </div>

        {/* Relationship */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Relationship:
          </label>
          <input
            type="text"
            name="Relationship_contact"
            value={formData.Relationship_contact}
            onChange={(e) => onInputChange("Relationship_contact", e.target.value)}
            placeholder="Relationship to the Alternate Contact"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[#460000] font-semibold mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            name="Phone_number"
            value={formData.Phone_number}
            onChange={(e) => onInputChange("Phone_number", e.target.value)}
            placeholder="Phone Number of the Alternate Contact"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block text-[#460000] font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={(e) => onInputChange("Email", e.target.value)}
            placeholder="Email of the Contact"
            className="w-full px-4 py-2 border border-[#5a0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#911A1C]"
          />
        </div>
      </div>

      {/* Terms and Privacy Policy */}
      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          id="agreeToTerms"
          onChange={(e) => onInputChange("agreeToTerms", String(e.target.checked))}
          className="mr-3 w-5 h-5 border-2 border-[#5a0000] rounded"
        />
        <label htmlFor="agreeToTerms" className="text-gray-800 text-sm">
          I have read and agree to the{" "}
          <span className="font-semibold text-[#5C1414]">Terms</span> and{" "}
          <span className="font-semibold text-[#5C1414]">Privacy Policy</span>.
        </label>
      </div>
    </form>
  );
};

export default AdopterInformation;