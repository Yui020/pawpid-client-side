import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/pawrfect_match";

interface MatchingParams {
  species_type: string;
  used_ai: boolean;
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
  energy_preferencee: string;
}

export async function getMatchingPrediction(params: MatchingParams) {
  const {
    species_type,
    used_ai,
    id_list,
    building_type,
    daily_care,
    monthly_pet_budget_range,
    backup_caregiver,
    work_hours_type,
    hours_pet_left_alone,
    has_other_pets,
    past_pets,
    sex_preference,
    age_preference,
    energy_preferencee,
  } = params;

  const url = `${BASE_URL}/predict_matching_knn/${species_type}/${used_ai}`;

  const query = new URLSearchParams({
    building_type,
    daily_care,
    monthly_pet_budget_range,
    backup_caregiver,
    work_hours_type,
    hours_pet_left_alone,
    has_other_pets,
    past_pets,
    sex_preference,
    age_preference,
    energy_preferencee,
  });

  const idQuery = id_list.map(id => `id_list=${id}`).join("&");

  const finalUrl = `${url}?${query.toString()}&${idQuery}`;

  const response = await axios.get(finalUrl);
  return response.data;
}
