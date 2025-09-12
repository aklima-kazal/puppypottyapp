import React from "react";

const AirQuality = ({ data }) => {
  if (!data) return null;

  const values = data.list[0].components;
  return (
    <div className="bg-slate-900 p-4 text-center rounded-2xl">
      <p className="mb-4 text-xl font-medium text-violet-500 text-shadow-md/20 ... text-shadow-violet-200">
        Air Pollution & Quality
      </p>
      {Object.entries(values).map(([key, val]) => (
        <p
          className="capitalize text-lg font-medium text-violet-100 mt-1"
          key={val}
        >
          {key.replace("_", " ")}: {val}{" "}
        </p>
      ))}
      {data.list.map((item) => (
        <p
          className="capitalize text-lg font-medium text-violet-100 mt-1"
          key={item.dt_txt}
        >
          {item.dt_txt}: {item.main.aqi}{" "}
        </p>
      ))}
    </div>
  );
};

export default AirQuality;
