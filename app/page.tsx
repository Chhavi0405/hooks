"use client";

import { useState } from "react";
import useFormat from "./useFormats/page";

export default function Home() {
  const {
    getDate,
    getMMddyyyy,
    getddMMyy,
    getDay,
    getMonth,
    getYear,
    getTimeInHHMM,
    getTimeInHHMMSS,
    getyyyyMMdd,
    getyyyyMMMMdd
  } = useFormat();
  const [input, setInput] = useState<string | number>();
  const [inputDay, setInputDay] = useState<string | number>();
  const [isTime, setIsTime] = useState<number | Date | string>();
  const [isMonthFull,setIsMonthFull]  = useState<string|number|Date>()
  const handleFormatdate = () => {
    setInput(getYear(getDate()));
  };

  const handleDay = () => {
    setInputDay(getDay(getDate()));
  };

  const handleGetTime = () => {
    setIsTime(getTimeInHHMM(getDate()));
  };
  const handleFullMonth =()=>{
    setIsMonthFull(getyyyyMMMMdd(getDate()))
  }
  // console.log(input,"input")
  return (
    <>
      <h2>Custom Hooks</h2>

      <button onClick={() => getMMddyyyy(getDate("2023-05-23"))}>
        format Date
      </button>
      <br />
      <button onClick={() => getddMMyy(getDate())}>
        format Date2 in ddMMyy
      </button>
      <br />
      <button onClick={() => getyyyyMMdd(getDate())}>
        format Date3 in yyyyMMdd
      </button>
      <br />
      {/* <button onClick={()=>getDay(getDate())}>getday</button> */}
      <button onClick={() => handleDay()}>getday</button>
      {inputDay}
      <br />
      <button onClick={() => getMonth(getDate())}>getMonth</button>
      <br />
      {/* <button onClick={()=>getYear(getDate())}>getYear</button> */}
      <button onClick={() => handleFormatdate()}>getYear</button>
      {input}
      <br />
      <button onClick={() => handleGetTime()}>get Time In HH:MM</button>
      {isTime}
      <br />
      <button onClick={() => getTimeInHHMMSS(getDate())}>
        time in HH:MM:SS
      </button>
      <br/>
      <button onClick={()=>handleFullMonth()}>get full month</button>
    </>
  );
}
