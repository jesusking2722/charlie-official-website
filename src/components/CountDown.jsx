import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-29T18:00:00+01:00"); // 18:00 Europe time (CET)

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-comp">
      <div className="timer-box">
        <div className="time-item flex">
          <div className="_vale">{countdown.days}</div>
          <div className="_tag">Days</div>
        </div>
        <div className="time-item flex">
          <div className="_vale">{countdown.hours}</div>
          <div className="_tag">Hours</div>
        </div>
        <div className="time-item flex">
          <div className="_vale">{countdown.minutes}</div>
          <div className="_tag">Minutes</div>
        </div>
        <div className="time-item flex">
          <div className="_vale">{countdown.seconds}</div>
          <div className="_tag">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
