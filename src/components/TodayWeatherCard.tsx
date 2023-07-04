interface TodayWeatherCardProps {
  temperature: number;
  cityName: string;
}

export const TodayWeatherCard = (props: TodayWeatherCardProps) => {
  return (
    <div className="today-card card">
      <h2>{props.cityName}</h2>
      <h1>{Math.round(props.temperature)}°C</h1>
      <p>NOW</p>
    </div>
  );
};
