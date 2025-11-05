export default function GeneratedStrayImage({ 
  imageUrl,
  loading 
}: { 
  imageUrl?: string;
  loading?: boolean;
}) {
  const getDisplayImage = () => {
    if (!imageUrl) return null
    if (imageUrl.startsWith('data:image')) return imageUrl
    return `data:image/jpeg;base64,${imageUrl}`
  }

  const displayImage = getDisplayImage()

  return (
    <div className="border-2 border-crimsonRed/30 bg-[#FFF4E6] rounded-xl shadow-md p-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="w-64 h-64 border-2 border-dashed border-darkRed/40 rounded-lg overflow-hidden flex items-center justify-center">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crimsonRed mx-auto mb-2"></div>
              <p className="text-darkRed text-sm">Generating...</p>
            </div>
          ) : displayImage ? (
            <img src={displayImage} alt="Generated Stray" className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-400 text-center px-4">
              Your generated pet will appear here
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
