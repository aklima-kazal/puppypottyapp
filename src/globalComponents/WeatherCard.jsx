import React from "react";

const WeatherCard = ({ Weather }) => {
  const icon = Weather.weather[0].icon;
  return (
    <div className="bg-slate-900 p-4 text-center rounded-2xl">
      <p className="text-2xl font-medium text-violet-500 text-shadow-md/20 ... text-shadow-violet-200">
        current weather
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
        className="mx-auto bg-black mt-4 mb-4  p-4 text-center rounded-2xl"
      />
      <p className="text-2xl font-medium text-white text-shadow-md/20 ... text-shadow-violet-200">
        {Weather.weather[0].main}
      </p>
      <p className="text-lg font-medium text-violet-100 text-shadow-md/20 ... text-shadow-violet-200">
        {Weather.weather[0].description}
      </p>
      <p className="text-[16px] font-normal text-violet-200 text-shadow-md/20 ... text-shadow-violet-200">
        {Weather.main.temp} C° (Feels like {Weather.main.feels_like} C°)
      </p>
    </div>
  );
};

export default WeatherCard;
