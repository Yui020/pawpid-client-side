"use client";

import { useEffect, useState } from "react";
import ShelterSidebar from "@/components/shelter-module/sidebar";
import ShelterStrayCard from "@/components/shelter-module/shelter-stray-card";
import ShelterStrayDetailsModal from "@/components/shelter-module/stray-details-modal";
import Image from "next/image";
import { Search } from "lucide-react";
import AddStrayModal from "@/components/shelter-module/add-stray-modal";
import { fetchStrays } from "@/app/microservices_api/fetchStrays";

export default function ShelterHome() {
  const [selectedStray, setSelectedStray] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [strays, setStrays] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const shelterId = 1;

  // Fetch the strays when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStrays = await fetchStrays(shelterId);
        setStrays(fetchedStrays);
      } catch (error) {
        console.error('Error fetching strays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shelterId]);



 // Add new stray to list
  const handleAddStray = (newStray: any) => {
    const formattedStray = {
      stray_id: `STR${String(strays.length + 1).padStart(3, "0")}`,
      stray_name: newStray.stray_name,
      sex: newStray.sex,
      age_group: newStray.age_group,
      size: newStray.size,
      stray_image: newStray.stray_image,
      stray_Background: newStray.stray_Background,
      species_type: newStray.species_type,
      energy_level: newStray.energy_level,
      sociability: newStray.training_level || "N/A",
      medical_needs: newStray.medical_needs ? "Yes" : "None",
      spay_neuter: newStray.spay_neuter ? "Yes" : "No",
    };
    setStrays((prev) => [...prev, formattedStray]);
  };

  return (
    <div className="flex relative min-h-screen bg-whiteRed overflow-x-hidden">
      {/* Sidebar */}
      <ShelterSidebar />

      {/* Paw Prints Image */}
      <div className="absolute top-[-10px] right-0 z-0 hidden lg:block">
        <Image
          src="/assets/shelterHomeImage.png"
          alt="Home Hero"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <main className="ml-64 w-full px-10 py-8 relative z-10">
        <p className="text-base font-poppins text-blackRed mb-3">
          KIO &gt; Shelter &gt; Home
        </p>

        <h1 className="text-5xl text-red-gradient font-fredoka font-extrabold mb-2">
          Welcome back!
        </h1>
        <p className="text-base font-poppins text-blackRed mb-4">
          Manage reports, review activity, and keep the platform safe for all
          learners.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 max-w-3xl w-full">
          <div className="bg-darkRed rounded-xl shadow-md text-bgColor py-4 px-5 flex items-center justify-between sm:py-5 sm:px-6">
            <div className="text-start">
              <h2 className="text-xl sm:text-2xl font-fredoka font-bold mb-1">
                {strays.length.toString().padStart(2, "0")}
              </h2>
              <p className="text-sm sm:text-base font-poppins">
                Rescued Strays
              </p>
            </div>
            <img
              src="/assets/straysInMyCareImage.png"
              alt="Rescued Strays"
              className="w-20 h-20 sm:w-15 sm:h-15 object-contain"
            />
          </div>

          <div className="bg-darkRed rounded-xl shadow-md text-bgColor py-4 px-5 flex items-center justify-between sm:py-5 sm:px-6">
            <div className="text-start">
              <h2 className="text-xl sm:text-2xl font-fredoka font-bold mb-1">
                00
              </h2>
              <p className="text-sm sm:text-base font-poppins">
                Adopted Strays
              </p>
            </div>
            <img
              src="/assets/shelterImage.png"
              alt="Adopted Strays"
              className="w-20 h-20 sm:w-15 sm:h-15 object-contain"
            />
          </div>

          <div className="bg-darkRed rounded-xl shadow-md text-bgColor py-4 px-5 flex items-center justify-between sm:py-5 sm:px-6">
            <div className="text-start">
              <h2 className="text-xl sm:text-2xl font-fredoka font-bold mb-1">
                00
              </h2>
              <p className="text-sm sm:text-base font-poppins">
                Spayed/Neutered
              </p>
            </div>
            <img
              src="/assets/boneImage.png"
              alt="Spayed/Neutered"
              className="w-20 h-20 sm:w-15 sm:h-15 object-contain"
            />
          </div>
        </div>

        <section>
          <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-red-gradient text-center mb-1">
            Pet Profile Management
          </h2>
          <p className="text-base font-poppins text-blackRed text-center mb-8">
            Manage your rescue strays
          </p>

          {/* Search and Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            {/* Search Bar */}
            <div className="flex items-center border border-crimsonRed rounded-md p-2 w-full max-w-md bg-white">
              <Search className="text-grayPink w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none font-poppins text-darkRed placeholder-grayPink"
              />
            </div>

            {/* Species Dropdown */}
            <div>
              <select
                name="Species"
                defaultValue=""
                className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
                style={{
                  appearance: "none",
                  backgroundImage: "url('/icons/dropdown-icon.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "18px 10px",
                }}
              >
                <option value="" className="text-grayPink" disabled>
                  Species
                </option>
                <option value="Dog" className="text-darkRed">
                  Dog
                </option>
                <option value="Cat" className="text-darkRed">
                  Cat
                </option>
                <option value="Other" className="text-darkRed">
                  Other
                </option>
              </select>
            </div>

            {/* Age Dropdown */}
            <div>
              <select
                name="Age"
                defaultValue=""
                className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
                style={{
                  appearance: "none",
                  backgroundImage: "url('/icons/dropdown-icon.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "18px 10px",
                }}
              >
                <option value="" className="text-grayPink" disabled>
                  Age
                </option>
                <option value="Puppy/Kitten" className="text-darkRed">
                  Puppy / Kitten
                </option>
                <option value="Adult" className="text-darkRed">
                  Adult
                </option>
                <option value="Senior" className="text-darkRed">
                  Senior
                </option>
              </select>
            </div>

            {/* Gender Dropdown */}
            <div>
              <select
                name="Gender"
                defaultValue=""
                className="w-full px-4 py-2 pr-8 border font-poppins border-crimsonRed rounded-md focus:outline-none focus:ring-2 focus:ring-crimsonRed text-darkRed"
                style={{
                  appearance: "none",
                  backgroundImage: "url('/icons/dropdown-icon.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "18px 10px",
                }}
              >
                <option value="" className="text-grayPink" disabled>
                  Gender
                </option>
                <option value="Male" className="text-darkRed">
                  Male
                </option>
                <option value="Female" className="text-darkRed">
                  Female
                </option>
              </select>
            </div>

            {/* Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-darkRed hover:bg-red-800 text-bgColor font-poppins font-semibold px-4 py-2 rounded-md shadow-md transition-all"
            >
              + Add new Stray
            </button>
          </div>

          {/* Cards Grid */}
          <div
            className="grid gap-5 pr-5 py-5 items-start overflow-y-auto shadow-xs"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              maxHeight: "750px",
              paddingRight: "15px",
              paddingLeft: "5px",
            }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              strays.map((stray, index) => (
                <ShelterStrayCard
                  key={stray.Stray_id || index}
                  stray={stray}
                  onExpand={() => setSelectedStray(stray)}
                />
              ))
            )}
          </div>
        </section>
      </main>

      {/* Details Modal */}
      {selectedStray && (
        <ShelterStrayDetailsModal
          stray={selectedStray}
          onClose={() => setSelectedStray(null)}
        />
      )}

      {/* Add Stray Modal */}
      {showAddModal && (
        <AddStrayModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddStray}
          shelterId={1}
        />
      )}
    </div>
  );
}
