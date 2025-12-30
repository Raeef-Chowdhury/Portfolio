"use client";
import { useEffect, useState } from "react";

function Time() {
  const getCurrentTime = (): string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const hoursStr = hours.toString().padStart(2, "0");

    return `${hoursStr}:${minutes}:${seconds} ${ampm}`;
  };
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <>{time}</>;
}
export default Time;
