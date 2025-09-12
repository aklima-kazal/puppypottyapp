import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const CityClock = ({ timezoneoffset }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const localTime = dayjs()
        .utcOffset(timezoneoffset / 60)
        .format("hh:mm:ss A");
      setTime(localTime);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [timezoneoffset]);
  return (
    <p className="text-2xl font-bold text-cyan-700 text-shadow-lg/20 ... text-shadow-cyan-200  ">
      {time}
    </p>
  );
};

export default CityClock;
