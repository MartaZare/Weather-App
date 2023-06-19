export interface WeatherData {
  hourly: HourlyWeatherData;
}

interface HourlyWeatherData {
  time: string[];
  temperature_2m: number[];
}

export async function GetWeahterData(latitude: string, longitude: string) {
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
  );

  if (!response.ok) {
    return null;
  }

  let responseData = (await response.json()) as WeatherData;
  console.log("WeatherApi responseData: ");
  console.log(responseData);
  return responseData;
}
