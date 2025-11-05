export async function lookForClosestLookingStray(preferences: any) {
  const BASE_URL = "https://pawpid-match-ai-service-60157892781.asia-northeast1.run.app";

  const queryParams = new URLSearchParams({
    pet_size: preferences.pet_size,
    physique: preferences.physique,
    pet_type: preferences.pet_type,
    pattern: preferences.pattern,
    fur: preferences.fur,
    ears: preferences.ears,
  }).toString();

  const response = await fetch(`${BASE_URL}/ai_visualizer/generate_ai_image?${queryParams}`, {
    method: "GET",
    headers: { "Accept": "application/json" },
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("API Error:", response.status, errText);
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}