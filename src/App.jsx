import { useEffect, useState } from "react";
import CountrySelector from "./globalComponents/CountrySelector";
import { fatchAirPollution, fatchWeatherByCity } from "./utils/fatchWeather";
import CityClock from "./globalComponents/CityClock";
import WeatherCard from "./globalComponents/WeatherCard";
import AirQuality from "./globalComponents/AirQuality";

function App() {
  const [country, setCountry] = useState("Bangladesh");
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [pollution, setPollution] = useState(null);

  useEffect(() => {
    if (!city) return;
    const load = async () => {
      try {
        const data = await fatchWeatherByCity(city);
        const airpollution = await fatchAirPollution(
          data.coord.lat,
          data.coord.lon
        );
        setWeather(data);
        setPollution(airpollution);
      } catch (error) {
        alert(error);
      }
    };
    load();
  }, [city]);
  console.log(weather);

  return (
    <>
      <div className="min-h-screen bg-center bg-cover px-6 py-10 bg-[url(/src/assets/12.jpg)] ... ">
        <div className="flex flex-col items-center bg-black opacity-85 max-w-[800px] shadow-xl/30 ... shadow-amber-800 mx-auto p-6 mt-6 text-amber-50 rounded-3xl">
          <h1 className="text-[40px] font-bold text-cyan-300 text-shadow-lg/40 ... text-shadow-lime-300 mb-6">
            Weather App
          </h1>
          <p className="text-[24px] font-bold text-pink-300 text-shadow-lg/20 ... text-shadow-pink-200 mb-3">
            {country} - {city}
          </p>
          {weather?.timezone && (
            <CityClock timezoneoffset={weather?.timezone} />
          )}
          <div className="mt-6 ">
            <CountrySelector
              setCity={setCity}
              setCountry={setCountry}
              country={country}
              city={city}
            />
          </div>
          <div>
            {weather && (
              <div className="mt-6 grid grid-cols-3 gap-4">
                <WeatherCard Weather={weather} />
                <div className="bg-slate-900 p-4 text-center rounded-2xl">
                  <p className="text-2xl font-medium text-violet-500 text-shadow-md/20 ... text-shadow-violet-200">
                    Wind
                  </p>
                  <p className="text-lg font-medium text-violet-100 text-shadow-md/20 ... text-shadow-violet-200 mt-2 mb-1">
                    {weather.wind.speed} m/s
                  </p>
                  <p className="text-lg font-medium text-violet-100 text-shadow-md/20 ... text-shadow-violet-200">
                    {weather.wind.deg}°{" "}
                  </p>
                </div>
                <AirQuality data={pollution} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
