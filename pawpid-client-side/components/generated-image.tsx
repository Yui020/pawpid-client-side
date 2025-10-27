export default function GeneratedImage({ imageUrl }: { imageUrl: string }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border-2 border-[#7B2F20]/30 bg-[#FFF4E6] rounded-xl shadow-md p-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt="Generated Pet"
          className="w-64 h-64 object-contain mx-auto mb-4"
        />
        {/* Optional: Add buttons or hidden inputs later if needed */}
      </div>
    </form>
  );
}