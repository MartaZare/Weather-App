export interface CoordinatesData {
  latitude: number;
  longitude: number;
}

export async function CityCoordinates(cityName: string) {
  try {
    console.log("SENDING NAME " + cityName);
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
      console.log(await response.json());
      throw new Error(
        "Request failed with status " + response.status + response
      );
    }

    const result = (await response.json()) as CoordinatesData[];
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
