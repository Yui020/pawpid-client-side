"use client";
import React from "react";

interface Review2Props {
  adoptionDate: string;
  status: string;
  remarks: string;
  onAccept: () => void;
  onReject: () => void;
  onRemarksChange: (value: string) => void;
}

const Review2: React.FC<Review2Props> = ({
  adoptionDate,
  status,
  remarks,
  onAccept,
  onReject,
  onRemarksChange,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 font-poppins w-full max-w-xs">
      <p className="font-fredoka text-lg font-bold text-darkRed mb-1 text-center">
        Adoption Date:
      </p>
      <p className="text-blackRed mb-4 text-center">{adoptionDate}</p>

      <p className="font-fredoka text-lg font-bold text-darkRed mb-2 text-center">
        Application Status:
      </p>
      <div className="border border-darkRed rounded-md py-2 mb-3 text-darkRed font-semibold text-center">
        {status}
      </div>

      <hr className="border-t border-gray-300 mb-3" />

      <button
        onClick={onAccept}
        className="w-full bg-darkRed text-white py-2 rounded-md font-semibold mb-2 hover:bg-crimsonRed transition"
      >
        Accept Interview
      </button>

      <button
        onClick={onReject}
        className="w-full border border-darkRed text-darkRed py-2 rounded-md font-semibold hover:bg-gray-100 transition mb-4"
      >
        Reject
      </button>

      <div>
        <label className="block font-fredoka font-bold text-darkRed mb-1">
          Remarks:
        </label>
        <textarea
          value={remarks}
          onChange={(e) => onRemarksChange(e.target.value)}
          placeholder="Write remarks here..."
          className="w-full h-24 p-2 border border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed font-poppins text-darkRed placeholder-grayPink"
        />
      </div>
    </div>
  );
};

export default Review2;
