import React from "react";

interface AdopterData {
  fullName: string;
  birthdate: string;
  phone: string;
  email: string;
  address: string;
  imageUrl?: string;
}

interface AdopterBasicInfoProps {
  adopterData: AdopterData;
}

export default function AdopterBasicInfo({ adopterData }: AdopterBasicInfoProps) {
  const { fullName, birthdate, phone, email, address, imageUrl } = adopterData;

  return (
    <div className="bg-whiteRed rounded-lg shadow-md p-6 w-full max-w-[700px] flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* PROFILE IMAGE */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100">
          <img
            src={imageUrl || "/assets/profile-image.png"}
            alt={fullName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="flex-1 space-y-4">
        <div className="flex gap-4">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">
            Full Name:
          </p>
          <p className="text-sm font-poppins text-blackRed">{fullName}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">
            Birthdate:
          </p>
          <p className="text-sm font-poppins text-blackRed">{birthdate}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">
            Phone:
          </p>
          <p className="text-sm font-poppins text-blackRed">{phone}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">
            Email:
          </p>
          <p className="text-sm font-poppins text-blackRed">{email}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-sm font-poppins font-bold text-crimsonRed whitespace-nowrap">
            Address:
          </p>
          <p className="text-sm font-poppins text-blackRed">{address}</p>
        </div>
      </div>
    </div>
  );
}
