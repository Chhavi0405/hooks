"use client";

import { useState } from "react";
import useFormat from "./useFormats/page";
import useConversion from "./useConversion/page";
import UseDateSorting from "./useDateSorting/page";

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
  const { convertTimeTo12HourTime, convertTimeTo24HourTime, getTimeAndDate } =
    useConversion();
  const { sortDateAsc, sortDateDesc } = UseDateSorting();

  const [input, setInput] = useState<string | number>();
  const [isDay, setIsDay] = useState<string | number>();
  const [isFullYearFormat, setIsFullYearFormat] = useState<string | number>();
  const [inputDay, setInputDay] = useState<string | number>();
  const [isMonth, setIsMonth] = useState<string | number | Date>();
  const [isFullTime, setIsFullTime] = useState<string | number | Date>();
  const [isTime, setIsTime] = useState<number | Date | string>();
  const [isMonthFull, setIsMonthFull] = useState<string | number | Date>();
  const [is12hrs, setIs12Hrs] = useState<number | string | Date>();
  const [is24hrs, setIs24Hrs] = useState<number | string | Date>();
  const [isTimeDate, setisTimeDate] = useState<number | string | Date>();
  const [isAsc, setIsAsc] = useState<number[] | Date[] | undefined>([]);
  const [isDesc, setIsDesc] = useState<number[] | Date[] | undefined>([]);

  const dates = [
    new Date(1995, 6, 2),
    new Date(1997, 6, 2),
    new Date(1989, 6, 10),
    new Date(1987, 1, 11),
  ];

  const handleAsc = () => {
    setIsAsc(sortDateAsc(dates));
  };

  console.log(isAsc, "ascending");
  const ascDates = sortDateAsc(dates);
  //  console.log(ascDates,"qwer")

  const handleDesc = () => {
    setIsDesc(sortDateDesc(dates));
  };

  console.log(isDesc, "descending");
  // const descendDate = sortDateDesc(dates2)
  // console.log(descendDate,"descend")

  const handleFormatdate = () => {
    setInput(getYear(getDate()));
  };

  const handleDay = () => {
    setInputDay(getDay(getDate()));
  };

  const handleGetTime = () => {
    setIsTime(getTimeInHHMM(getDate()));
  };
  const handleFullMonth = () => {
    setIsMonthFull(getyyyyMMMMdd(getDate()));
  };
  const handleTime = () => {
    setIs12Hrs(convertTimeTo12HourTime(getDate()));
  };
  const handleTimeIn24 = () => {
    setIs24Hrs(convertTimeTo24HourTime(getDate()));
  };
  const handleTimeDate = () => {
    setisTimeDate(getTimeAndDate(getDate()));
  };
  const handleGetDay = () => {
    setIsDay(getMMddyyyy(getDate("2023-05-23")));
  };
  const handleddMMyy = () => {
    setIsFullYearFormat(getyyyyMMdd(getDate()));
  };
  const handleMonth = () => {
    setIsMonth(getMonth(getDate()));
  };
  const handleFullTime = () => {
    setIsFullTime(getTimeInHHMMSS(getDate()));
  };

  return (
    <> 

    <div className="px-4 py-4 ">
      <h2 className="text-xl text-center italic font-extrabold text-red-950 mb-4">Custom Hooks</h2>
    
      <h2 className="text-xl font-medium mb-2">Date Formats</h2>
      <button className=" border-2 mb-3  space-x-4" onClick={() => handleGetDay()}>format Date</button> 
      
      <p className=" space-x-4 text-pink-950">{isDay}</p>
     
      <button className=" border-2 mb-3" onClick={() => getddMMyy(getDate())}>
        format Date2 in ddMMyy
      </button>
      <br />
      <button className=" border-2 mb-3" onClick={() => handleddMMyy()}>
        format Date3 in yyyyMMdd
      </button>{" "}
      <p className=" space-x-4 text-pink-950">{isFullYearFormat}</p>
      
      <br />
      <button className=" border-2 mb-3" onClick={() => handleDay()}>getday</button>
      <p className=" space-x-4 text-pink-950">{inputDay}</p>
      
      <br />
      <button className=" border-2 mb-3" onClick={() => handleMonth()}>getMonth</button>
      <p className=" space-x-4 text-pink-950">{isMonth}</p> 
      <br />
      <button className=" border-2 mb-3" onClick={() => handleFormatdate()}>getYear</button>
      <p className=" space-x-4 text-pink-950">{input}</p>
      <br />
      <button  className=" border-2 mb-3" onClick={() => handleGetTime()}>get Time In HH:MM</button>
      <p className=" space-x-4 text-pink-950">{isTime}</p>
      <br />
      <button className=" border-2 mb-3" onClick={() => handleFullTime()}>time in HH:MM:SS</button>
      <p className=" space-x-4 text-pink-950">{isFullTime}</p>
      <br />
      <button className=" border-2 mb-3" onClick={() => handleFullMonth()}>get full month</button>
      <p className=" space-x-4 text-pink-950">{isMonthFull}</p> 
     
      </div>

      <div className="px-4">
      <h2 className="text-xl font-medium mb-2">Time Conversion</h2>
  
      <button className=" border-2 mb-3"
        onClick={() => {
          handleTime();
        }}
      >
        in 12 hrs
      </button>
      &nbsp;{is12hrs}
      <br />
      <button className=" border-2 mb-3" onClick={() => handleTimeIn24()}>in 24 hrs</button>
      &nbsp;{is24hrs}
    <br/>
      <button className=" border-2 mb-3  " onClick={() => handleTimeDate()}>time-Date</button>
      &nbsp;{isTimeDate}
      <br />
      <br />

      </div>

      <div className="px-4">
      <h3 className="text-xl  font-medium mb-2" >sorting</h3>
     
      <button className=" border-2 mb-3" onClick={() => handleAsc()}>Ascending</button>
      &nbsp;
      {/* {isAsc?.map((dates) => {
        console.log(dates,"ASC dates")
      })} */}
      <br />

      <button className=" border-2 mb-3" onClick={() => handleDesc()}>Descending</button>
      &nbsp;
      {/* {isDesc?.map((dates2, index: number) => {
        console.log(dates2, "DESCdates");
      })} */}
      </div>
    </>
  );
}
