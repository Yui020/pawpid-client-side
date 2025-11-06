"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AIStrayCard from "@/components/stray-card3";
import VaccinationTable from "@/components/vaccinationTable";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [selectedStray, setSelectedStray] = useState<any | null>(null);

  // dummy strays
  const strays = [
    {
      name: "TINA",
      match: "90",
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
      description:
        "Tina used to love sticking by her mom, but since her mom was adopted, she’s had to learn to put her big girl pants on and face the world with courage. She’s rather reserved and prefers to stay in quiet corners, but she does like to socialize with her other sheltermates from time to time.",
    },
    {
      name: "COCO",
      match: 85,
      breed: "Puspin",
      age: "Young",
      sex: "Male",
      size: "Medium",
      image: "/assets/strayImage.png",
      Stray_name: "COCO",
      Species_type: "Cat",
      Sex: "Male",
      Age_group: "Young",
      Energy_level: "Playful",
      Sociability: "Affectionate",
      Medical_needs: "None",
      SpayNeuter: "No",
      description:
        "Coco is a playful young cat who enjoys chasing toys and snuggling after meals. He’s the kind of companion who loves both adventure and nap time equally!",
    },
    {
      name: "BRUNO",
      match: "78",
      breed: "Aspen",
      age: "Puppy",
      sex: "Male",
      size: "Small",
      image: "/assets/strayImage.png",
      Stray_name: "BRUNO",
      Species_type: "Dog",
      Sex: "Male",
      Age_group: "Puppy",
      Energy_level: "Very High",
      Sociability: "Friendly",
      Medical_needs: "Deworming",
      SpayNeuter: "No",
      description:
        "Bruno is a cheerful puppy bursting with energy and curiosity. He’s looking for a family who can keep up with his playful spirit and help him grow into a loyal companion.",
    },
  ];

    // dummy vaccination records
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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-darkRed/10 via-pastelPink/10 to-whiteRed">
      {/* OVERLAPPING HERO IMAGE */}
      <div className="absolute top-[-50px] right-0 z-0 hidden lg:block">
        <Image
          src="/assets/pawpidHomeImage.png"
          alt="Dashboard Hero"
          width={550}
          height={550}
          className="object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 py-10 md:py-10">
        
        <div className="mb-6">
          <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">  WELCOME BACK, SEULGI! </h1>
          <p className="text-base font-poppins text-blackRed">  Ready to meet your pawrfect match? </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-start mb-16 max-w-3xl">
          
          {/* Pawrfect Match */}
          <Link href="/pawrfect-match"
            className="bg-darkRed hover:bg-red-800 transition-all duration-200 text-bgColor font-poppins font-semibold py-4 px-6 rounded-xl shadow-md flex items-center gap-4">
            <Image src="/assets/matchingImage.png" alt="Pawfect Match" width={60} height={60} />
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold leading-tight"> PAWRFECT MATCH </h3>
              <p className="text-sm lg:text-base mt-1 opacity-80 font-normal"> Find your furry match.  </p>
            </div>
          </Link>

          {/* Strays in My Care */}
          <Link href="/strays-in-my-care"
            className="bg-darkRed hover:bg-red-800 transition-all duration-200 text-bgColor font-poppins font-semibold py-4 px-6 rounded-xl shadow-md flex items-center gap-4">
            <Image src="/assets/straysInMyCareImage.png" alt="Strays in My Care" width={60} height={60} />
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold leading-tight"> STRAYS IN MY CARE </h3>
              <p className="text-sm lg:text-base mt-1 opacity-80 font-normal"> Track rescued strays. </p>
            </div>
          </Link>

          {/* Partner Shelters */}
          <Link
            href="/shelters"
            className="bg-darkRed hover:bg-red-800 transition-all duration-200 text-bgColor font-poppins font-semibold py-4 px-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <Image src="/assets/shelterImage.png" alt="Partner Shelters" width={60} height={60} />
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold leading-tight"> PARTNER SHELTERS </h3>
              <p className="text-sm lg:text-base mt-1 opacity-80 font-normal"> Meet our partner shelters. </p>
            </div>
          </Link>

          {/* Adoption FAQs */}
          <Link
            href="/faqs"
            className="bg-darkRed hover:bg-red-800 transition-all duration-200 text-bgColor font-poppins font-semibold py-4 px-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <Image src="/assets/faqsImage.png" alt="Adoption FAQs" width={60} height={60} />
            <div>
              <h3 className="text-lg lg:text-2xl font-semibold leading-tight"> ADOPTION FAQS </h3>
              <p className="text-sm lg:text-base mt-1 opacity-80 font-normal"> Learn before you adopt. </p>
            </div>
          </Link>
        </div>

        {/* STRAYS LOOKING FOR LOVE */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-darkRed"> STRAYS LOOKING FOR LOVE </h2>
          <p className="text-sm md:text-base font-poppins text-blackRed mt-1"> Browse adorable strays waiting to capture your heart </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-3 mb-8">
          {["All", "Dog", "Cat", "Shelter"].map((btn) => (
            <button key={btn} onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-md font-poppins font-semibold transition-all duration-200 ${
              filter === btn
                ? "bg-darkRed text-white"
                : "bg-[#ffe2e6] text-darkRed hover:bg-red-100"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* STRAY CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {strays.map((stray, index) => (
            <AIStrayCard key={index} stray={stray}
              onSelect={() => setSelectedStray(stray)} // modal trigger
            />
          ))}
        </div>

{/* ////////////////////////////////////////////////////////// */}

        {/* MODAL WITH VACCINATION TABLE */}
        {selectedStray && (
          <div className="fixed px-10 inset-0 bg-blackRed/70 flex justify-center items-center z-50">
            <div className="bg-[#FFF4E6] border-2 border-crimsonRed/40 rounded-xl shadow-lg p-6 max-w-5xl w-full relative overflow-y-auto max-h-[90vh]">
              {/* CLOSE BUTTON */}
              <button onClick={() => setSelectedStray(null)}
                className="absolute top-3 right-4 text-crimsonRed font-bold text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* MODAL CONTENT */}
              <div className="grid md:grid-cols-2 gap-6 font-poppins">
                
                {/* LEFT SIDE */}
                <div className="grid grid-rows-2 gap-4">
                  <div className="cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition">
                    <img src={selectedStray.image} alt={selectedStray.Stray_name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-justify text-blackRed leading-relaxed">
                    {selectedStray.description}
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <div className="grid grid-cols-2 gap-y-4 text-left font-poppins">
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Name:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Stray_name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Type:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Species_type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Sex:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Sex}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Age:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Age_group}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Energy Level:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Energy_level}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Sociability:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Sociability}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Medical Needs:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.Medical_needs}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crimsonRed">Spay/Neuter:</p>
                      <p className="text-2xl font-bold text-blackRed -mt-1">{selectedStray.SpayNeuter}</p>
                    </div>
                  </div>


                  <div className="mt-6">
                    <h3 className="text-xl font-fredoka font-bold text-crimsonRed mb-2"> Vaccination Record </h3>
                    <VaccinationTable updates={updates} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
