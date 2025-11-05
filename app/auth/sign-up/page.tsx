"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignUp = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Signed up with:", formData.email);

    // After successful sign up
    router.push("//");
  };

  const handleGoogleSignIn = () => {
    console.log("Sign up with Google clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-peachCream relative font-poppins overflow-hidden">

      {/* ====== BACKGROUND IMAGES ====== */}
      <Image
        src="/assets/paw-bottom.png"
        alt="Paw Left"
        width={400}
        height={400}
        className="absolute top-20 left-10 opacity-90 w-[400px] md:w-[300px] lg:w-[250px] z-0"
      />
      <Image
        src="/assets/paw-top.png"
        alt="Paw Right"
        width={400}
        height={400}
        className="absolute top-20 right-10 opacity-90 w-[400px] md:w-[300px] lg:w-[250px] z-0"
      />
      <Image
        src="/assets/cat-bg.png"
        alt="Cat Bottom Left"
        width={280}
        height={280}
        className="absolute bottom-0 left-0 opacity-90 w-[200px] md:w-[250px] lg:w-[280px] z-0"
      />
      <Image
        src="/assets/dog-bg.png"
        alt="Dog Bottom Right"
        width={280}
        height={280}
        className="absolute bottom-0 right-0 opacity-90 w-[200px] md:w-[250px] lg:w-[280px] z-0"
      />

      {/* ====== SIGN-UP CARD ====== */}
      <div className="relative bg-darkRed text-white p-10 rounded-2xl shadow-lg w-full max-w-md z-10">
        <div className="flex justify-center mb-4">
          <Image src="/assets/pawpid-logo.png" alt="Pawpid Logo" width={150} height={150} />
        </div>

        <h2 className="text-2xl font-bold text-start mb-1">Join PawPid Now!</h2>
        <p className="text-start text-sm text-peachCream mb-6">
          Sign up and get started!
        </p>

        <form onSubmit={handleSignUp}>
          {/* Email */}
          <div>
            <label className="block text-sm text-bgColor font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              placeholder="Email Address"
              onChange={(e) => onInputChange("email", e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-md bg-bgColor text-darkRed placeholder-drayPink border border-pastelPink focus:ring-2 focus:ring-pastelPink outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-bgColor font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                placeholder="Password"
                onChange={(e) => onInputChange("password", e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md bg-bgColor text-darkRed placeholder-drayPink border border-pastelPink focus:ring-2 focus:ring-pastelPink outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-crimsonRed hover:text-darkRed"
              >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-bgColor font-semibold mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => onInputChange("confirmPassword", e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md bg-bgColor text-darkRed placeholder-drayPink border border-pastelPink focus:ring-2 focus:ring-pastelPink outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-crimsonRed hover:text-darkRed"
              >
                {showConfirmPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
          </div>

          {/* Adopter / Shelter Toggle */}
          <div className="flex mb-5 mt-2 bg-bgColor rounded-md overflow-hidden border border-pastelPink">
            <button
              type="button"
              className={`w-1/2 py-2 font-semibold ${
                formData.role === "adopter"
                  ? "bg-pastelPink text-darkRed"
                  : "text-darkRed hover:bg-pastelPink/40"
              }`}
              onClick={() => onInputChange("role", "adopter")}
            >
              Adopter
            </button>
            <button
              type="button"
              className={`w-1/2 py-2 font-semibold ${
                formData.role === "shelter"
                  ? "bg-pastelPink text-darkRed"
                  : "text-darkRed hover:bg-pastelPink/40"
              }`}
              onClick={() => onInputChange("role", "shelter")}
            >
              Shelter
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full mb-5 mt-3 bg-pastelPink text-darkRed font-semibold rounded-md py-2 hover:bg-bgColor hover:text-crimsonRed hover:border-pastelPink hover:border-t-3 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-peachCream"></div>
          <span className="mx-3 text-peachCream text-xs">or continue with</span>
          <div className="flex-grow border-t border-peachCream"></div>
        </div>

        {/* Google Sign-Up */}
        <button
          onClick={handleGoogleSignIn}
          className="mt-3 w-full text-sm border border-bgColor text-bgColor font-semibold rounded-md py-2 flex items-center justify-center gap-3 hover:bg-bgColor hover:text-darkRed transition"
        >
          <Image src="/icons/google-icon.png" alt="Google Icon" width={20} height={20} />
          Sign In using GMail Account
        </button>

        {/* Already have account */}
        <p className="text-center text-sm text-peachCream mt-6">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold hover:underline text-white">
            Sign In!
          </Link>
        </p>
      </div>
    </div>
  );
}
