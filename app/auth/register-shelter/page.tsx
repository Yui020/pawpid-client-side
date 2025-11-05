"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Upload, Trash2 } from "lucide-react";

export default function ShelterRegister() {
  const router = useRouter();

  const [image, setImage] = useState<string | null>("/assets/default-profile.png");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);

  const [formData, setFormData] = useState({
    shelterName: "",
    address: "",
    phone: "09",
  });

  const onInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Upload and remove image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setImage(fileURL);
    }
  };
  const handleRemoveImage = () => setImage("/assets/default-profile.png");

  // Submit form -> open OTP modal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTPModal(true);
  };

  // OTP Timer
  useEffect(() => {
    if (showOTPModal && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showOTPModal, timeLeft]);

  // Resend OTP
  const handleResendOtp = () => {
    setTimeLeft(60);
    setOtp(["", "", "", "", ""]);
    alert("📩 OTP has been resent to your number.");
  };

  // OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  // Verify OTP
  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === 5) {
      alert("✅ OTP Verified!");
      setShowOTPModal(false);
      router.push("/"); // redirect after verification
    } else {
      alert("Please enter the complete OTP.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-peachCream font-poppins p-4 relative">
      <div className="bg-darkRed text-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden relative">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/2 flex flex-col justify-between p-10 relative">
          <div>
            <div className="flex justify-center mb-6">
              <Image src="/assets/pawpid-logo.png" alt="PawPid Logo" width={160} height={160} />
            </div>
            <p className="text-center text-bgColor font-medium mb-8 leading-relaxed">
              Tell us about your shelter so PawPid can help connect your rescues with their Pawrfect Match!
            </p>
          </div>

          <div className="absolute bottom-0 left-3">
            <Image
              src="/assets/pawpidImage.png"
              alt="Cupid Cat Illustration"
              width={300}
              height={300}
              className="h-[470px] w-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 bg-darkRed p-10 flex flex-col justify-center relative z-10">
          <div className="text-start text-sm mb-2 text-peachCream">Shelter Logo</div>

          {/* IMAGE UPLOAD */}
          <div className="flex flex-col items-center mb-6">
            {image && (
              <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-peachCream mb-5">
                <Image src={image} alt="Shelter Logo" fill className="object-cover" />
              </div>
            )}

            <div className="flex gap-3">
              <label className="bg-pastelPink hover:bg-bgColor hover:text-darkRed text-darkRed font-semibold text-sm px-3 py-1.5 rounded-md cursor-pointer flex items-center gap-2">
                <Upload size={16} />
                Upload Picture
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="bg-crimsonRed text-white text-sm px-3 py-1.5 rounded-md hover:bg-bgColor hover:text-darkRed flex items-center gap-2"
              >
                <Trash2 size={16} /> Remove
              </button>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Shelter Name */}
            <div>
              <label className="block text-sm text-bgColor font-semibold mb-1">Shelter Name</label>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.shelterName}
                onChange={(e) => onInputChange("shelterName", e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-bgColor text-darkRed placeholder-grayPink"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-bgColor font-semibold mb-1">Address Location</label>
              <input
                type="text"
                placeholder="Address"
                required
                value={formData.address}
                onChange={(e) => onInputChange("address", e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-bgColor text-darkRed placeholder-grayPink"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-bgColor font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="0000 - 000 - 0000"
                required
                value={formData.phone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (!value.startsWith("09")) {
                    value = "09" + value.replace(/^0+|^9+/, "");
                  }
                  value = value.slice(0, 11);
                  onInputChange("phone", value);
                }}
                className="w-full px-4 py-2 rounded-md bg-bgColor text-darkRed placeholder-grayPink focus:outline-none focus:ring-2 focus:ring-crimsonRed"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mb-20 bg-pastelPink text-darkRed font-semibold py-2 rounded-md hover:bg-bgColor hover:text-crimsonRed transition mt-5"
            >
              Create My PawPid Account
            </button>
          </form>
        </div>
      </div>

      {/* OTP MODAL */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-blackRed/70 flex justify-center items-center z-[60] px-10">
          <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowOTPModal(false)}
              className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
            >
              ✕
            </button>

            <h2 className="text-crimsonRed font-fredoka font-bold text-3xl mb-6 text-center">
              OTP Verification
            </h2>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-10 text-center border-2 border-crimsonRed rounded-md text-darkRed text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-crimsonRed"
                />
              ))}
            </div>

            {/* Resend OTP */}
            <div className="text-center mb-4 text-sm">
              {timeLeft > 0 ? (
                <p className="text-darkRed">
                  Didn’t receive the code?{" "}
                  <span className="text-crimsonRed font-semibold">Resend in {timeLeft}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-crimsonRed font-semibold hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowOTPModal(false)}
                className="bg-grayPink text-darkRed px-4 py-2 rounded-md hover:bg-grayPink/80 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleVerify}
                className="bg-crimsonRed text-white px-4 py-2 rounded-md hover:bg-[#6d1315] transition"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
