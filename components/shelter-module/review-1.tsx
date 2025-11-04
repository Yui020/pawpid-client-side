"use client";
import React from "react";

interface Review1Props {
  adoptionDate: string;
  status: string;
  onApprove: () => void;
  onReject: () => void;
}

const Review1: React.FC<Review1Props> = ({
  adoptionDate,
  status,
  onApprove,
  onReject,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 font-poppins w-full max-w-xs text-center">
      <p className="font-fredoka text-lg font-bold text-darkRed mb-1">
        Adoption Date:
      </p>
      <p className="text-blackRed mb-4">{adoptionDate}</p>

      <p className="font-fredoka text-lg font-bold text-darkRed mb-2">
        Application Status:
      </p>
      <div className="border border-darkRed rounded-md py-2 mb-3 text-darkRed font-semibold">
        {status}
      </div>

      <hr className="border-t border-gray-300 mb-3" />

      <button
        onClick={onApprove}
        className="w-full bg-darkRed text-white py-2 rounded-md font-semibold mb-2 hover:bg-crimsonRed transition"
      >
        Approve for Interview
      </button>

      <button
        onClick={onReject}
        className="w-full border border-darkRed text-darkRed py-2 rounded-md font-semibold hover:bg-gray-100 transition"
      >
        Reject
      </button>
    </div>
  );
};

export default Review1;
