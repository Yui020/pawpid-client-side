import React, { useEffect } from "react";

interface AdopterInformationProps {
  formData: {
    Occupation: string;
    Social_media_profile: string;
    Status: string;
    Pronouns: string;
    Alternate_contact: string;
    Relationship_contact: string;
    Phone_number: string;
    Email: string;
    AgreeToTerms: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

const AdopterInformation: React.FC<AdopterInformationProps> = ({
  formData,
  onInputChange,
}) => {
  // Set initial info only once when component mounts
  useEffect(() => {
    if (!formData.Occupation) {
      onInputChange("Occupation", "Software Engineer");
      onInputChange("Social_media_profile", "@kangseulgi");
      onInputChange("Status", "single");
      onInputChange("Pronouns", "she/her");
      onInputChange("Alternate_contact", "Bae Joohyun");
      onInputChange("Relationship_contact", "Sister");
      onInputChange("Phone_number", "0900 000 0000");
      onInputChange("Email", "seulgi@example.com");
      onInputChange("AgreeToTerms", false);
    }
  }, []);
  
  return (
    <div>
      
      <h2 className="text-3xl font-fredoka font-bold text-darkRed mb-6 border-b-5 border-darkRed text-center pb-2"> ADOPTER'S INFORMATION</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Occupation */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Occupation: </label>
          <input required type="text" value={formData.Occupation} name="Occupation" placeholder="Occupation"  
            onChange={(e) => onInputChange("Occupation", e.target.value)}
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
        </div>

        {/* Social Media Profile */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Social Media Profile: </label>
          <input required type="text" name="Social_media_profile" value={formData.Social_media_profile} placeholder="@username"
            onChange={(e) => onInputChange("Social_media_profile", e.target.value)} 
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Status: </label>
          <select required name="Status" value={formData.Status}
            onChange={(e) => onInputChange("Status", e.target.value)}
            className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Status ? "text-darkRed" : "text-grayPink")}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select Status</option>
            <option value="single" className="text-darkRed">Single</option>
            <option value="married" className="text-darkRed">Married</option>
            <option value="widow" className="text-darkRed">Widow</option>
          </select>
        </div>

        {/* Pronouns */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Pronouns: </label>
          <select required name="Pronouns" value={formData.Pronouns} onChange={(e) => onInputChange("Pronouns", e.target.value)}        
            className={ `w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed ` +
              (formData.Pronouns ? "text-darkRed" : "text-grayPink")}
            style={{
              appearance: "none",
              backgroundImage: "url('/icons/dropdown-icon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "18px 10px",
            }}
          >
            <option value="" className="text-grayPink" disabled>Select Pronounce</option>
            <option value="she/her" className="text-darkRed">She / Her</option>
            <option value="he/him" className="text-darkRed">He / Him</option>
            <option value="they/their" className="text-darkRed">They / Their</option>
          </select>
        </div>

        {/* Alternate Contact */}
        <div className="md:col-span-2">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Alternate Contact: </label>
          <input type="text" value={formData.Alternate_contact} name="Alternate_contact" placeholder="Parent/Guardian"
            onChange={(e) => onInputChange("Alternate_contact", e.target.value)}
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
          <p className="text-sm text-darkRed italic mt-1"> If the applicant is a minor, a parent or guardian must be the alternate contact and co-sign the application.</p>
        </div>

        {/* Relationship */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Relationship: </label>
          <input type="text" value={formData.Relationship_contact} name="Relationship_contact" placeholder="Relationship to the Alternate Contact"
            onChange={(e) => onInputChange("Relationship_contact", e.target.value)}
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Phone Number: </label>
          <input type="tel" value={formData.Phone_number || "0900 000 0000"} name="Phone_number"
            
            onFocus={(e) => {
              if (e.target.value === "0900 000 0000") {
                onInputChange("Phone_number", "09");
              }
            }}
            
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (!value.startsWith("09")) {
                value = "09" + value.replace(/^0+|^9+/, "");
              }

              value = value.slice(0, 11);

              if (value.length > 4 && value.length <= 7) {
                value = `${value.slice(0, 4)} ${value.slice(4)}`;
              } else if (value.length > 7) {
                value = `${value.slice(0, 4)} ${value.slice(4, 7)} ${value.slice(7)}`;
              }

              onInputChange("Phone_number", value);
            }}
             className={`w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed
              ${
                formData.Phone_number === "09" || !formData.Phone_number
                  ? "text-grayPink"
                  : "text-darkRed"
              }`}
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block font-poppins font-semibold text-sm text-darkRed mb-1"> Email:</label>
          <input required type="email" value={formData.Email || ""} name="Email" placeholder="adopter@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) => onInputChange("Email", e.target.value)}
            className="w-full px-4 py-2 border font-poppins placeholder-grayPink border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed"
          />
        </div>
      
      </div>

      {/* Terms and Privacy Policy */}
      <div className="flex items-center mt-10">
        <input type="checkbox" id="agreeToTerms"
          checked={formData.AgreeToTerms}
          onChange={(e) => onInputChange("AgreeToTerms", e.target.checked)}
          className="mr-3 w-5 h-5 accent-crimsonRed border-2 border-crimsonRed rounded"
        />
        <label htmlFor="agreeToTerms" className="font-poppins text-blackRed text-sm">
          I have read and agree to the{" "}
          <span className="font-poppins font-semibold text-darkRed">Terms</span> and{" "}
          <span className="font-poppins font-semibold text-darkRed">Privacy Policy</span>.
        </label>
      </div>
    </div>
  );
};

export default AdopterInformation;