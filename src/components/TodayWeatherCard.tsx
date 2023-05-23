interface TodayWeatherCardProps {
  temperature: number;
}

export const TodayWeatherCard = (props: TodayWeatherCardProps) => {
  return (
    <div className="today-card card">
      <h1>{props.temperature}°C</h1>
      <p>TODAY</p>
    </div>
  );
};
