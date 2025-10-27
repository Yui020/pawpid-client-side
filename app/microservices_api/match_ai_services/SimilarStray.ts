import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/extract_image_feature_vector_upload";

export interface SimilarStray {
  id: number;
  name: string;
  species_type: string;
  breed: string;
  age: string;
  sex: string;
  image_url: string;
  similarity_score: number;
}

export async function extractImageFeatureVectorUpload(file: File): Promise<SimilarStray[]> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${BASE_URL}/extract_image_feature_vector_upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
}
