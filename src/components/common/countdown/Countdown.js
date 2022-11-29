import React, {useEffect, useState} from "react";

import './Countdown.css'

export default function Countdown() {

  const [expiryTime, setExpiryTime] = useState("20 jan 2023 12:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor(
        (remainingDayTime % (1000 * 60)) / 1000
      );

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  function leadingZero(number, size){
    number = number.toString();
    while (number.length < size) {
      number = "0" + number
    }
    return number;
  }

  useEffect(() => {
    countdownTimer();
  });

  return(
    <div className="countdown-container">
      <h1>COMING SOON</h1>
      <div className="countdown">
        <div className="box-container">
          <div className="box">
            <h1>{leadingZero(countdownTime.countdownDays, 2)}</h1>
          </div>
          <h2>DAYS</h2>
        </div>
        <div className="box-container">
          <div className="box">
            <h1>{leadingZero(countdownTime.countdownHours, 2)}</h1>
          </div>
          <h2>HOURS</h2>
        </div>
        <div className="box-container">
          <div className="box">
            <h1>{leadingZero(countdownTime.countdownMinutes, 2)}</h1>
          </div>
          <h2>MINUTES</h2>
        </div>
        <div className="box-container">
          <div className="box">
            <h1>{leadingZero(countdownTime.countdownSeconds, 2)}</h1>
          </div>
          <h2>SECONDS</h2>
        </div>
      </div>
    </div>
  )
}