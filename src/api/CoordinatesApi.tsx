export interface CoordinatesData {
  latitude: number;
  longitude: number;
}

export async function CityCoordinates(cityName: string) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${cityName}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "IVtRMQz/tmCd/xHXa39gfA==iuJcBIIBxM0PaXbW",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const result = (await response.json()) as CoordinatesData[];
    return result;

  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
