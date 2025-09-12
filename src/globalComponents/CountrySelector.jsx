import React from "react";
import { countryCityMap } from "../data/cities";

const CountrySelector = ({ city, setCity, country, setCountry }) => {
  return (
    <div className="px-10 mt-6 gap-x-6 flex">
      <select
        className="border-none outline-none font-semibold text-[20px] text-emerald-600"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCity(countryCityMap[e.target.value][0]);
        }}
      >
        {Object.keys(countryCityMap).map((c) => (
          <option value={c} className="text-black font-normal text-[16px] ">
            {c}
          </option>
        ))}
      </select>
      <select
        className="ml-10 border-none outline-none font-semibold text-[20px] text-emerald-600"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {countryCityMap[country].map((ct) => (
          <option value={ct} className="text-black font-normal text-[16px]">
            {ct}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
