//import { extractImageFeatureVectorUpload } from "../microservices_api/match_ai_services/SimilarStray";

/*

      const [loading, setLoading] = useState(false);
      const [result, setResult] = useState<any>(null);
        const handleSimilarity = async () => {
          setLoading(true);
          try {
            const data = await extractImageFeatureVectorUpload({
            });
    
            setResult(data);  
            console.log("Similar looking strays:", data);
            //Display Similar Looking strays 
            //router.push("/pawrfect-match/ai-stray-generator/"); 
    
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false);
          }
        };

        */

export default function FileUpload({ onFileSelect }: { onFileSelect?: (file: File) => void }) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };


  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border-2 border-[#7B2F20]/30 bg-[#FFF4E6] rounded-xl shadow-md p-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <label
          htmlFor="file-upload"
          className="w-64 h-64 flex flex-col items-center justify-center border-2 border-dashed border-[#7B2F20]/40 rounded-lg cursor-pointer hover:bg-[#FFF4E6]/50 transition-colors"
        >
          <svg
            className="w-12 h-12 text-[#7B2F20]/60 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </form>
  );
}