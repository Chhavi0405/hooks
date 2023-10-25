"use client";

import { useState } from "react";
import useFormat from "./useFormats/page";
import useConversion from "./useConversion/page";

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
    getyyyyMMMMdd,
    
  } = useFormat();
  const {convertTimeTo12HourTime,convertTimeTo24HourTime,getTimeAndDate} = useConversion()
  const [input, setInput] = useState<string | number>();
  const [isDay,setIsDay] = useState<string | number>();
  const [isFullYearFormat,setIsFullYearFormat]=useState<string | number>();
  const [inputDay, setInputDay] = useState<string | number>();
  const [isMonth,setIsMonth]  = useState<string|number|Date>()
  const [isFullTime,setIsFullTime] = useState<string|number|Date>()
  const [isTime, setIsTime] = useState<number | Date | string>();
  const [isMonthFull,setIsMonthFull]  = useState<string|number|Date>()
  const [is12hrs,setIs12Hrs] = useState <number|string|Date>()
  const [is24hrs,setIs24Hrs] = useState<number|string|Date>()
  const [isTimeDate,setisTimeDate] = useState<number|string|Date>()
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
  const handleTime =()=>{
  setIs12Hrs(convertTimeTo12HourTime(getDate()))
  }
  const handleTimeIn24 =()=>{
    setIs24Hrs(convertTimeTo24HourTime(getDate()))
  }
  const handleTimeDate =()=>{
    setisTimeDate(getTimeAndDate(getDate()))
  }
  const handleGetDay=()=>{
    setIsDay(getMMddyyyy(getDate("2023-05-23")))
  }
  const handleddMMyy =()=>{
    setIsFullYearFormat(getyyyyMMdd(getDate()))
  }
  const handleMonth =()=>{
    setIsMonth(getMonth(getDate()))
  }
  const handleFullTime =()=>{
    setIsFullTime(getTimeInHHMMSS(getDate()))
  }
  return (
    <>
      <h2>Custom Hooks</h2>
<br/>
      <button onClick={() =>handleGetDay() }>
        format Date
      </button> &nbsp; 
      {isDay}
      <br />
      <button onClick={() => getddMMyy(getDate())}>
        format Date2 in ddMMyy
      </button>
      <br />
      <button onClick={() =>handleddMMyy() }>
        format Date3 in yyyyMMdd
      </button> &nbsp;
       {isFullYearFormat}
      <br />
      <button onClick={() => handleDay()}>getday</button>
      &nbsp;
      {inputDay}
      <br />
      <button onClick={() => handleMonth}>getMonth</button>
      <br /> &nbsp; 
      {isMonth}
      <button onClick={() => handleFormatdate()}>getYear</button>
      &nbsp;{input}
      <br />
      <button onClick={() => handleGetTime()}>get Time In HH:MM</button>
      &nbsp;{isTime}
      <br />
      <button onClick={() => handleFullTime()}>
        time in HH:MM:SS
      </button>
      &nbsp;{isFullTime}
      <br/>
      <button onClick={()=>handleFullMonth()}>get full month</button>
     &nbsp; {isMonthFull}
      <br/>
      <br/>
      <h2>Time Conversion</h2>
      <br/>
      <button onClick={()=>{handleTime()}}>in 12 hrs</button>
      &nbsp;{is12hrs}
      <br/>
      <button onClick={()=>handleTimeIn24()}>in 24 hrs</button>
      &nbsp;{is24hrs}
      <br/>
      <button onClick={()=>handleTimeDate()}>time-Date</button>
      &nbsp;{isTimeDate}
    </>
  );
}
