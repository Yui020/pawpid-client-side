"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignIn = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Email:", formData.email);
  console.log("Password:", formData.password);

    // After successful sign in
    router.push("//");
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google clicked");
    // Google Auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-peachCream relative font-poppins">
      
      {/* ====== BACKGROUND IMAGES ====== */}
      <Image src="/assets/paw-bottom.png" alt="Paw Left" width={400} height={400}
        className="absolute top-50 left-10 opacity-90 w-[400px] md:w-[300px] lg:w-[250px]"
      />
      <Image src="/assets/paw-top.png" alt="Paw Right" width={250} height={250}
        className="absolute top-50 right-10 opacity-90 w-[400px] md:w-[300px] lg:w-[250px]"
      />
      <Image src="/assets/cat-bg.png" alt="Cat Bottom Left" width={250} height={250}
        className="absolute bottom-0 left-0 opacity-90 w-[200px] md:w-[250px] lg:w-[280px]"
      />
      <Image src="/assets/dog-bg.png" alt="Dog Bottom Right" width={250} height={250}
        className="absolute bottom-0 right-0 opacity-90 w-[200px] md:w-[250px] lg:w-[280px]"
      />

      {/* ====== SIGN-IN CARD ====== */}
      <div className="bg-darkRed text-white p-10 rounded-2xl shadow-lg w-full max-w-md z-10">
        <div className="flex justify-center mb-6">
          <Image src="/assets/pawpid-logo.png" alt="Pawpid Logo" width={180} height={180} />
        </div>

        <h2 className="text-2xl font-poppins font-bold text-start">Welcome!</h2>
        <p className="text-start text-sm font-poppins text-peachCream mb-6">Sign in and get started!</p>

        <form onSubmit={handleSignIn}>
          
          {/* Email */}
          <div>
            <label className="block text-sm text-bgColor font-poppins font-semibold mb-1">Email</label>
            <input type="email"  required value={formData.email} placeholder="Email Address"
              onChange={(e) => onInputChange("email", e.target.value)}
              className="w-full px-4 py-2 mb-5 rounded-md bg-bgColor text-darkRed placeholder-drayPink border border-pastelPink focus:ring-2 focus:ring-pastelPink outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-bgColor font-semibold mb-1">Password</label>
            <div className="relative">
              <input required type={showPassword ? "text" : "password"} value={formData.password} placeholder="Password"
                onChange={(e) => onInputChange("password", e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-bgColor text-darkRed placeholder-drayPink border border-pastelPink focus:ring-2 focus:ring-pastelPink outline-none"
            />
              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-crimsonRed hover:text-darkRed"
                >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
                </button>

            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-5">
            <a href="#" className="text-xs text-peachCream hover:underline"> Forgot Password? </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full mb-5 bg-pastelPink text-darkRed font-poppins font-semibold rounded-md py-2 hover:bg-bgColor hover:text-crimsonRed hover:border-pastelPink hover:border-t-3 transition"
          > Sign In </button>
        </form>

        {/* Google Sign-In */}
        <div className="flex items-center my-6">
          <div className="flex-grow text-xs border-t border-peachCream"></div>
          <span className="mx-3 text-peachCream text-xs">or continue with</span>
          <div className="flex-grow text-xs border-t border-peachCream"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="mt-3 w-full text-sm border border-bgColor text-bgColor font-semibold rounded-md py-2 flex items-center justify-center gap-3 hover:bg-bgColor hover:text-darkRed transition"
        >
          <Image src="/icons/google-icon.png" alt="Google Icon" width={20} height={20} />
          Sign in using Gmail Account
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-peachCream mt-6">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="font-semibold hover:underline text-white">
            Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
}