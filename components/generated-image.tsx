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

        
export default function GeneratedStrayImage({ imageUrl }: { imageUrl?: string }) {
  return (
    <div className="border-2 border-crimsonRed/30 bg-[#FFF4E6] rounded-xl shadow-md p-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="w-64 h-64 border-2 border-dashed border-darkRed/40 rounded-lg overflow-hidden">
          <img src={imageUrl || "@/assets/strayImage.png"} alt="Generated Stray"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}