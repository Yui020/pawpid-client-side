import axios from "axios";

const BASE_URL = "https://pawpid-match-ai-service-60157892781.europe-west1.run.app";

interface MatchingParams {
  species_type: string;
  used_ai: boolean;
  model_type: string;
  id_list: number[];
  building_type: string;
  daily_care: string;
  monthly_pet_budget_range: string;
  backup_caregiver: string;
  work_hours_type: string;
  hours_pet_left_alone: string;
  has_other_pets: string;
  past_pets: string;
  sex_preference: string;
  age_preference: string;
  energy_preference: string; // fixed name
}

export async function getMatchingPrediction(params: MatchingParams) {
  console.log("Incoming params:", params);

  const { species_type, used_ai, model_type, ...body } = params;

  const url = `${BASE_URL}/pawrfect_match/predict_matching_knn/${species_type}/${used_ai}/${model_type}`;
  console.log("Final request URL:", url);
  console.log("Request body:", body);

  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("API response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error in getMatchingPrediction:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
