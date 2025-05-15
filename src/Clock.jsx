import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
 const [divideMinutes,setDivideMinutes] = useState(false)
  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2,'0');
  const timeString = `${hours}:${minutes}`;
  useEffect(() => {
    setDivideMinutes(minutes % 5 === 0);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  },[minutes]);
 
  return (
    <>
      <h1>{timeString}</h1>
      {divideMinutes && (<h1>Время делится на 5</h1>)}
    </>
  );
}

export default Clock;
