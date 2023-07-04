import { SetStateAction, useState } from "react";
import { CityCoordinates, CoordinatesData } from "../api/CoordinatesApi";

interface CityInputProps {
  setCityCoordinates: (arg: CoordinatesData) => void;
  cityName: string;
  setCityName: React.Dispatch<SetStateAction<string>>;
}

export const CityInput = (props: CityInputProps) => {
  function containsNumber(myString: string) {
    return /\d/.test(myString);
  }

  const [city, setCity] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let formatedCity =
      city.toLowerCase().charAt(0).toUpperCase() + city.slice(1);

    let result = await CityCoordinates(formatedCity);
    console.log(result);
    if (!result || containsNumber(city)) {
      alert("Please provide a valid city name");
      return "";
    }

    props.setCityCoordinates(result[0]);
    props.setCityName(result[0].name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="cityName"
          onChange={(event) => setCity(event.target.value)}
          placeholder="Search..."
        />
      </form>
    </>
  );
};
