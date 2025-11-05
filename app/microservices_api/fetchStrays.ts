// app/microservices_api/fetchStrays.ts
const API_URL = 'https://pawpid-stray-service-60157892781.asia-northeast1.run.app';

export const fetchStrays = async (shelterId: number) => {
  try {
    const response = await fetch(`${API_URL}/strays/get-all-stray-in-shelter/${shelterId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data; // The fetched stray data
  } catch (error) {
    console.error(error);
    return [];
  }
};
