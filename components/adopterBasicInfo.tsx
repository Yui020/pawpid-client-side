import React from 'react';
import Image from 'next/image';

interface UserInfoSidebarProps {
  fullName: string;
  birthdate: string;
  phone: string;
  email: string;
  address: string;
  imageUrl?: string;
}

export default function AdopterBasicInfo({
  fullName,
  birthdate,
  phone,
  email,
  address

}: UserInfoSidebarProps) {
  return (
    <div className="bg-[#FEFEFA] rounded-lg shadow-md p-6 w-full max-w-[320px] h-auto">
      
      {/* PROFFILE IMAGE */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100">
          <img src="/assets/profile-image.png"  alt={fullName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="space-y-4">
        <div className="flex gap-5 px-7">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">Full Name:</p>
          <p className="text-sm font-poppins text-blackRed">{fullName}</p>
        </div>

        <div className="flex gap-6 px-7">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">Birthdate:</p>
          <p className="text-sm font-poppins text-blackRed">{birthdate}</p>
        </div>

        <div className="flex gap-11 px-7">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">Phone:</p>
          <p className="text-sm font-poppins text-blackRed">{phone}</p>
        </div>

        <div className="flex gap-12 px-7">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">Email:</p>
          <p className="text-sm font-poppins text-blackRed">{email}</p>
        </div>

        <div className="flex gap-7 px-7">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">Address:</p>
          <p className="text-sm font-poppins text-blackRed">{address}</p>
        </div>
      </div>
    </div>
  );
}