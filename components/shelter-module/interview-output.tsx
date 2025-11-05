// Ensure this is in the InterviewOutput component
interface InterviewOutputProps {
  adopterData: {
    fullName: string;
    birthdate: string;
    phone: string;
    email: string;
    address: string;
    idCardImage?: string;

    preferredInterviewDate: string;
    preferredInterviewTime: string;
    canVisitShelter: string;
  };
}

const InterviewOutput: React.FC<InterviewOutputProps> = ({
  adopterData,
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-8 text-darkRed overflow-y-auto scrollbar-custom">
      {/* Header Section */}
      <div className="flex items-center space-x-6">
        <img
          src={adopterData.idCardImage || "/profile-placeholder.png"}
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full border-4 border-crimsonRed"
        />
        <div className="space-y-1">
          <p><strong>Full Name:</strong> {adopterData.fullName}</p>
          <p><strong>Birthdate:</strong> {adopterData.birthdate}</p>
          <p><strong>Phone:</strong> {adopterData.phone}</p>
          <p><strong>Email:</strong> {adopterData.email}</p>
          <p><strong>Address:</strong> {adopterData.address}</p>
        </div>
      </div>

      {/* Interview Section */}
      <h2 className="font-extrabold text-lg border-b-2 border-[#8B3A2E]">
        INTERVIEW DETAILS
      </h2>
      <div className="space-y-2">
        <p><strong>Preferred Date for Zoom Interview:</strong> {adopterData.preferredInterviewDate}</p>
        <p><strong>Preferred Time for Zoom Interview:</strong> {adopterData.preferredInterviewTime}</p>
        <p><strong>Will be able to visit the shelter for meet-and-greet:</strong> {adopterData.canVisitShelter}</p>
      </div>
    </div>
  );
};

export default InterviewOutput;
