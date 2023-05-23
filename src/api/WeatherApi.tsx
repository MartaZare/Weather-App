export interface WeatherData {
  hourly: HourlyWeatherData;
}

interface HourlyWeatherData {
  time: string[];
  temperature_2m: number[];
}

export async function GetWeahterData() {
  let response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=54.69&longitude=25.28&hourly=temperature_2m"
  );

  if (!response.ok) {
    return null;
  }

  let responseData = (await response.json()) as WeatherData;
  return responseData;
}
