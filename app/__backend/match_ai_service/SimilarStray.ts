export async function lookForClosestLookingStray(image_base64: string) {
  const BASE_URL = "https://pawpid-match-ai-service-60157892781.asia-northeast1.run.app";

  function base64ToFile(base64: string, filename: string): File {
    try {
      // Clean the string (remove spaces and line breaks)
      base64 = base64.trim().replace(/\s/g, "");

      // Ensure proper prefix for decoding
      if (!base64.startsWith("data:")) {
        base64 = `data:image/jpeg;base64,${base64}`;
      }

      const arr = base64.split(",");
      const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
      const bstr = atob(arr[1]);
      const n = bstr.length;
      const u8arr = new Uint8Array(n);
      for (let i = 0; i < n; i++) u8arr[i] = bstr.charCodeAt(i);
      return new File([u8arr], filename, { type: mime });
    } catch (err) {
      console.error("Error converting base64 to file:", err);
      throw new Error("Invalid Base64 string");
    }
  }

  const file = base64ToFile(image_base64, "stray.jpg");

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/ai_visualizer/look_for_closest_looking_stray`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("API Error:", response.status, errText);
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}
