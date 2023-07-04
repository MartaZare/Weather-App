import { SetStateAction, useEffect } from "react";
import { GetWeahterData, WeatherData } from "../api/WeatherApi";
import { CoordinatesData } from "../api/CoordinatesApi";

export default function CityWeatherData(
  cityCoordinates: CoordinatesData,
  setWeatherData: React.Dispatch<SetStateAction<WeatherData | null>>,
  setWeatherArrayTimeIndex: React.Dispatch<SetStateAction<number>>,
  setWeatherArrayDateIndex: React.Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    const fetchData = async () => {
      const coordinates = await cityCoordinates;
      const latitude = (Math.round(coordinates.latitude * 100) / 100).toFixed(
        2
      );
      const longitude = (Math.round(coordinates.longitude * 100) / 100).toFixed(
        2
      );

      let response = await GetWeahterData(latitude, longitude);

      setWeatherData(response);

      let dateNow = new Date();
      let timeNow = dateNow.getHours();

      let today: string;
      today =
        dateNow.getFullYear() +
        "-0" +
        (dateNow.getMonth() + 1) +
        "-" +
        dateNow.getDate() +
        "T12:00";

      let indexOfToday = response?.hourly.time.indexOf(today) ?? 0;

      setWeatherArrayTimeIndex(timeNow - 1);
      setWeatherArrayDateIndex(-indexOfToday);
      console.log("TIME");
      console.log(indexOfToday);
    };

    fetchData();
  }, [cityCoordinates]);
}
