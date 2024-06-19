"use client";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export const MarqueBottom = () => {
  const tomorrowDate = dayjs().add(1, "day").format(" MMMM DD, YYYY");

  const calculateTimeUntilTomorrow = () => {
    return dayjs().endOf("day").diff(dayjs(), "second");
  };

  const timeFormat = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [time, setTime] = useState(calculateTimeUntilTomorrow());

  const updateClock = useCallback(() => {
    const tillTomorrow = calculateTimeUntilTomorrow();
    setTime(tillTomorrow);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [updateClock]);

  return (
    <Marquee className="h2-text h-16  bg-gradient-to-tr from-[#F03E49] to-[#5E248A] text-white">
      HURRY UP: Registration will close on{" "}
      <span className="mx-2">{tomorrowDate}</span> due to overwhelming media
      demand - ACT NOW!
      <span className="font-semibold mx-2"> {timeFormat(time)}</span>
    </Marquee>
  );
};
