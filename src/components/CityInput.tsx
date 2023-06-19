import { useState } from "react";
import { CityCoordinates, CoordinatesData } from "../api/CoordinatesApi";

interface CityInputProps {
  setCityCoordinates: (arg: CoordinatesData) => void;
}

export const CityInput = (props: CityInputProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let formatedCity =
      city.toLowerCase().charAt(0).toUpperCase() + city.slice(1);

    let result = await CityCoordinates(formatedCity);
    props.setCityCoordinates(result[0]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="cityName"
          onChange={(event) => setCity(event.target.value)}
        />
        <input type="submit" id="submitInpt" />
      </form>
    </>
  );
};
