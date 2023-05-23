import React, { useEffect, useState } from "react";
import { WeatherCard } from "./components/WeatherCard";
import { TodayWeatherCard } from "./components/TodayWeatherCard";
import { GetWeahterData, WeatherData } from "./api/WeatherApi";

import "./style/App.css";

function App() {
  //useEffect(() => {//isviekcia api call ir nusettina state}, []);
  // Isivykdo kai komponentas yra uzkraunamas arba kai state yra pakeiciamas
  //

  const [weatherData, setWeatherData] = useState<WeatherData | null>();
  const [weatherArrayTimeIndex, setWeatherArrayTimeIndex] = useState<number>(0);
  const [weatherArrayDateIndex, setWeatherArrayDateIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      let response = await GetWeahterData();
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
      // Get hourly time for this day weather
      setWeatherArrayTimeIndex(timeNow - 1);

      // Setting temperature
      setWeatherArrayDateIndex(indexOfToday);
    };

    // Get today

    fetchData();
  }, []);

  return (
    <div className="content">
      <TodayWeatherCard
        temperature={
          weatherData?.hourly.temperature_2m[weatherArrayTimeIndex] ?? 0
        }
      />
      <div className="weeksCards">
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 24] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 24]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 48] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 48]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 72] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 72]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 96] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 96]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 120] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 120]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
        <WeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 144] ?? 0
          }
          date={
            weatherData?.hourly.time[weatherArrayDateIndex + 144]
              .split("T")[0]
              .split("2023-")[1] ?? ""
          }
        />
      </div>
    </div>
  );
}

export default App;
