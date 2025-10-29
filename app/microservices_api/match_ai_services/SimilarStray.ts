import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export interface SimilarStray {
  image: File;
}

export async function extractImageFeatureVectorUpload(file: File): Promise<SimilarStray[]> {
  const formData = new FormData();

  formData.append("file", file);
  const response = await axios.post(`${BASE_URL}/extract_image_feature_vector_upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}



