import { useState } from "react";
import { WeatherCard } from "./WeatherCard";
import { TodayWeatherCard } from "./TodayWeatherCard";
import { WeatherData } from "../api/WeatherApi";
import { CityInput } from "./CityInput";
import { CoordinatesData } from "../api/CoordinatesApi";
import { useNavigate } from "react-router-dom";
import CityWeatherData from "./CityWeatherData";

export default function Home() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("Vilnius");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherArrayTimeIndex, setWeatherArrayTimeIndex] = useState<number>(0);
  const [weatherArrayDateIndex, setWeatherArrayDateIndex] = useState<number>(0);
  const [cityCoordinates, setCityCoordinates] = useState<CoordinatesData>({
    longitude: 25.28,
    latitude: 54.69,
    name: "Vilnius",
  });

  CityWeatherData(
    cityCoordinates,
    setWeatherData,
    setWeatherArrayTimeIndex,
    setWeatherArrayDateIndex
  );
  console.log("Weather data--------------");
  console.log(weatherData);
  console.log("Weather data hourly--------------");
  console.log(weatherData?.hourly);
  console.log("weather data hourly tempretaure --------------");
  console.log(weatherData?.hourly.temperature_2m);
  console.log("weather data hourly tempretaure [index]--------------");
  console.log(weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 24]);

  return (
    <div>
      <CityInput
        setCityCoordinates={setCityCoordinates}
        cityName={cityName}
        setCityName={setCityName}
      />
      <div onClick={() => navigate("detailed-info")}>
        <TodayWeatherCard
          temperature={
            weatherData?.hourly.temperature_2m[weatherArrayTimeIndex] ?? 0
          }
          cityName={cityName}
        />
      </div>
      <div className="weeksCards">
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 13] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 24]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 37] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 48]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 61] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 72]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 85] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 96]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 109] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 120]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
        <div onClick={() => navigate("detailed-info")}>
          <WeatherCard
            temperature={
              weatherData?.hourly.temperature_2m[weatherArrayDateIndex + 133] ??
              0
            }
            date={
              weatherData?.hourly.time[weatherArrayDateIndex + 144]
                .split("T")[0]
                .split("2023-")[1] ?? ""
            }
          />
        </div>
      </div>
    </div>
  );
}
