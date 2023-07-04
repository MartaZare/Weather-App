interface WeatherCardProps {
  temperature: number;
  date: string;
}

export const WeatherCard = (props: WeatherCardProps) => {
  return (
    <div className="card">
      <h1>{Math.round(props.temperature)}°C</h1>
      <p>{props.date}</p>
    </div>
  );
};
