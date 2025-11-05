const API_URL = 'https://pawpid-stray-service-60157892781.asia-northeast1.run.app';

export const addStray = async (shelterId: number, newStray: any) => {
  try {
    const formData = new FormData();

    // Append all form data to FormData object
    for (const key in newStray) {
      if (key !== "stray_image") {
        formData.append(key, newStray[key as keyof typeof newStray]);
      }
    }

    // Append the stray image as binary data
    if (newStray.stray_image instanceof File) {
      formData.append("stray_image", newStray.stray_image);
    }

    // Sending POST request to add the new stray
    const response = await fetch(`${API_URL}/strays/add_new_stray/${shelterId}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to add stray");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding stray:", error);
    throw error;
  }
};
