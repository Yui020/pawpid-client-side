export default function AIStrayCard({ stray }: { stray: any }) {
  return (
    <div className="bg-[#FBE6E4] rounded-2xl overflow-hidden shadow-md border border-[#D5B6B5]">
      <img src={stray.image} alt={stray.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#911A1C]">{stray.name} - {stray.match}%</h3>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          {[stray.breed, stray.age, stray.sex, stray.size].map((tag, i) => (
            <span
              key={i}
              className="bg-[#F6D4D2] text-[#911A1C] px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className="mt-4 bg-[#911A1C] text-white px-4 py-1 rounded-md hover:bg-[#6d1315] transition"
        >
          Stray Details →
        </button>
      </div>
    </div>
  );
}