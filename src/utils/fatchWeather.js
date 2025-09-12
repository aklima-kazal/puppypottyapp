import axios from "axios";

export const fatchWeatherByCity = async (city) => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`
  );
  return res.data;
};
export const fatchAirPollution = async (lat, lon) => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return res.data;
};
