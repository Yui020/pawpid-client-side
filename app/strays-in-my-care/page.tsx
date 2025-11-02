"use client";
import { useState } from "react";
import PawBackground from "@/components/pawBackground";
import AIStrayCard from "@/components/stray-card";
import VaccinationTable from "@/components/vaccinationTable";

export default function StraysInMyCare() {
  const [selectedStray, setSelectedStray] = useState<any | null>(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // vaccination records
  const [updates, setUpdates] = useState([
    {
      date_vaccinated: "2025-10-01",
      date_of_last_vaccinated: "2025-09-15",
      vaccination_receipt_image_url: "#",
      stray_current_weight: "18kg",
      stray_last_recorded_weight: "17kg",
      date_created: "2025-10-02",
    },
  ]);

  const [newRecord, setNewRecord] = useState({
    date_vaccinated: "",
    date_of_last_vaccinated: "",
    stray_current_weight: "",
    stray_last_recorded_weight: "",
    vaccination_receipt_image_url: "",
  });

  const [strays, setStrays] = useState<any[]>([
    {
      name: "TINA",
      match: "90%",
      breed: "Aspin",
      age: "Adult",
      sex: "Female",
      size: "Large",
      image: "/assets/strayImage.png",
      Stray_name: "TINA",
      Species_type: "Dog",
      Sex: "Female",
      Age_group: "Adult",
      Energy_level: "High",
      Sociability: "Friendly",
      Medical_needs: "None",
      SpayNeuter: "Yes",
      Adoption_date: "2023-08-10",
      description:
        "Tina used to love sticking by her mom, but since her mom was adopted, she’s had to learn to put her big girl pants on and face the world with courage. She’s rather reserved and prefers to stay in quiet corners, but she does like to socialize with her other sheltermates from time to time.",
    },
  ]);

  // input change handler for new record
  const onRecordChange = (field: string, value: string) => {
    setNewRecord({ ...newRecord, [field]: value });
  };

  // add new vaccination record
  const handleAddVaccination = (e: any) => {
    e.preventDefault();
    const updatedRecord = {
      ...newRecord,
      date_created: new Date().toISOString().split("T")[0],
    };
    setUpdates([...updates, updatedRecord]);
    setNewRecord({
      date_vaccinated: "",
      date_of_last_vaccinated: "",
      stray_current_weight: "",
      stray_last_recorded_weight: "",
      vaccination_receipt_image_url: "",
    });
    setShowUpdateModal(false);
  };

  return (
    <PawBackground>
      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">
            STRAYS IN MY CARE TRACKER
          </h1>
          <p className="text-base font-poppins text-blackRed">
            Monitor and update vaccination status of your adopted stray from
            PawPid!
          </p>
        </div>

        {/* GRID OF CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {strays.map((stray, index) => (
            <AIStrayCard
              key={index}
              stray={stray}
              onSelect={() => setSelectedStray(stray)}
            />
          ))}
        </div>

        {/* MAIN STRAY MODAL */}
        {selectedStray && (
          <div className="fixed px-10 inset-0 bg-blackRed/70 flex justify-center items-center z-50">
            <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-5xl w-full relative overflow-y-auto max-h-[90vh]">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedStray(null)}
                className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* MAIN GRID */}
              <div className="grid md:grid-cols-2 gap-6 font-poppins">
                {/* LEFT SECTION */}
                <div className="grid grid-rows-2 gap-4">
                  <div
                    onClick={() => alert("This would open image viewer")}
                    className="cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition"
                  >
                    <img
                      src={selectedStray.image}
                      alt={selectedStray.Stray_name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-justify text-black leading-relaxed">
                    {selectedStray.description}
                  </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="grid grid-cols-2 gap-y-4 text-left font-poppins">
                      {/* Basic Info */}
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Name:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Stray_name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Type:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Species_type}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Sex:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Sex}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Age:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Age_group}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Energy level:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Energy_level}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Sociability:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Sociability}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Medical Needs:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Medical_needs}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-crimsonRed">
                          Spay/Neuter:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.SpayNeuter}
                        </p>
                      </div>
                      <div className="col-span-2 mt-2">
                        <p className="text-sm font-semibold text-crimsonRed">
                          Date of Adoption:
                        </p>
                        <p className="text-2xl font-bold text-blackRed -mt-1">
                          {selectedStray.Adoption_date}
                        </p>
                      </div>
                    </div>

                    {/* VACCINATION SECTION */}
                    <h2 className="text-crimsonRed font-fredoka font-bold text-3xl mt-6">
                      Vaccination
                    </h2>
                    <VaccinationTable updates={updates} />
                  </div>

                  {/* UPDATE BUTTON */}
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-crimsonRed text-white px-4 py-1 rounded-md hover:bg-[#6d1315] transition"
                      onClick={() => setShowUpdateModal(true)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADD RECORD MODAL */}
        {showUpdateModal && (
          <div className="fixed inset-0 bg-blackRed/70 flex justify-center items-center z-[60] px-10">
            <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-xl w-full relative">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              <h2 className="text-crimsonRed font-fredoka font-bold text-3xl mb-6">
                Add Vaccination Record
              </h2>

              <form onSubmit={handleAddVaccination} className="font-poppins text-sm">
                {/* Date Vaccinated */}
                <div className="grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
                    Date Vaccinated:
                  </label>
                  <input
                    required
                    type="date"
                    value={newRecord.date_vaccinated}
                    onChange={(e) => onRecordChange("date_vaccinated", e.target.value)}
                    className="w-full px-4 py-2 border font-poppins border-crimsonRed rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
                  />
                </div>

                {/* Last Vaccinated */}
                <div className="grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="block font-poppins font-semibold text-sm text-darkRed mb-1">
                    Last Vaccinated:
                  </label>
                  <input
                    required
                    type="date"
                    value={newRecord.date_of_last_vaccinated}
                    onChange={(e) => onRecordChange("date_of_last_vaccinated", e.target.value)}
                    className="w-full px-4 py-2 border font-poppins border-crimsonRed rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
                  />
                </div>

                {/* Current Weight */}
                <div className="grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold text-darkRed">
                    Current Weight:
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecord.stray_current_weight}
                    onChange={(e) =>
                      onRecordChange("stray_current_weight", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed"
                    placeholder="Example: 18kg"
                  />
                </div>

                {/* Last Weight */}
                <div className="grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold text-darkRed">
                    Last Weight:
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecord.stray_last_recorded_weight}
                    onChange={(e) =>
                      onRecordChange("stray_last_recorded_weight", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-crimsonRed rounded-md focus:ring-2 focus:ring-crimsonRed"
                    placeholder="Example: 17kg"
                  />
                </div>

                {/* Receipt Upload */}
                <div className="grid grid-cols-2 not-last-of-type:mb-6">
                  <div>
                    <label className="block font-poppins font-semibold text-darkRed mb-2">
                      Upload Vaccination Receipt:
                    </label>
                  </div>

                  <div>
                    <input required  type="file" accept="image/svg+xml,image/png,image/jpeg,image/jpg"
                      onChange={(e) =>
                        onRecordChange( "vaccination_receipt_image_url",
                          e.target.files?.[0] ? URL.createObjectURL(e.target.files[0]) : ""
                        )
                      }
                      className="block w-full border-2 font-poppins border-crimsonRed rounded-md py-2 px-3 text-darkRed file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-peachCream file:text-crimsonRed file:font-poppins file:font-semibold hover:file:bg-crimsonRed hover:file:text-white file:cursor-pointer"
                    />
                  </div>
                </div>

                {/* SAVE */}
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="bg-crimsonRed text-white px-4 py-2 rounded-md hover:bg-[#6d1315] transition"
                  >
                    Save Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </PawBackground>
  );
}
