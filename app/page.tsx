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

  const [input, setInput] = useState<string | number>('');
  const [isDay, setIsDay] = useState<string | number>('');
  const [isFullYearFormat, setIsFullYearFormat] = useState<string | number>('');
  const [inputDay, setInputDay] = useState<string | number>('');
  const [isMonth, setIsMonth] = useState<string | number | Date>('');
  const [isFullTime, setIsFullTime] = useState<string | number | Date>('');
  const [isTime, setIsTime] = useState<number | Date | string>('');
  const [isMonthFull, setIsMonthFull] = useState<string | number | Date>('');
  const [is12hrs, setIs12Hrs] = useState<number | string | Date>('');
  const [is24hrs, setIs24Hrs] = useState<number | string | Date>('');
  const [isTimeDate, setisTimeDate] = useState<number | string | Date>('');
  const [isAsc, setIsAsc] = useState<number[] | Date[] | undefined>([]);
  const [isDesc, setIsDesc] = useState<number[] | Date[] | undefined>([]);
  const [isFormatDate2,setIsFormatDate2] = useState<string|number>('')
  const dates = [
    new Date(1995, 6, 2),
    new Date(1997, 6, 2),
    new Date(1989, 6, 10),
    new Date(1987, 1, 11),
  ];

  const handleAsc = () => {
    setIsAsc(sortDateAsc(dates));
  };

const handleFormatDate2 =()=>{
  setIsFormatDate2(getddMMyy(getDate()))
}

  const handleDesc = () => {
    setIsDesc(sortDateDesc(dates));
  };


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

        <button className=" border-2 mb-3" onClick={() => handleFormatDate2()}>
          format Date2 in ddMMyy
        </button>
        <p className=" space-x-4 text-pink-950">{isFormatDate2.toString()}</p>
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
        <p className=" space-x-4 text-pink-950">{isMonth.toString()}</p>
        <br />
        <button className=" border-2 mb-3" onClick={() => handleFormatdate()}>getYear</button>
        <p className=" space-x-4 text-pink-950">{input}</p>
        <br />
        <button className=" border-2 mb-3" onClick={() => handleGetTime()}>get Time In HH:MM</button>
        <p className=" space-x-4 text-pink-950">{isTime.toString()}</p>
        <br />
        <button className=" border-2 mb-3" onClick={() => handleFullTime()}>time in HH:MM:SS</button>
        <p className=" space-x-4 text-pink-950">{isFullTime.toString()}</p>
        <br />
        <button className=" border-2 mb-3" onClick={() => handleFullMonth()}>get full month</button>
        <p className=" space-x-4 text-pink-950">{isMonthFull.toString()}</p>

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
        &nbsp;
        <p className=" space-x-4 text-pink-950">{is12hrs.toString()}</p>
        <br />
        <button className=" border-2 mb-3" onClick={() => handleTimeIn24()}>in 24 hrs</button>
        &nbsp;
        <p className=" space-x-4 text-pink-950">{is24hrs.toString()}</p>
        <br />
        <button className=" border-2 mb-3  " onClick={() => handleTimeDate()}>time-Date</button>
        &nbsp;
        <p className=" space-x-4 text-pink-950">{isTimeDate.toString()}</p>
        <br />
        <br />

      </div>

      <div className="px-4">
        <h3 className="text-xl  font-medium mb-2" >Sorting</h3>

        <button className=" border-2 mb-3" onClick={() => handleAsc()}>Ascending</button>
        &nbsp;
        <ul>
          <li> 
          <p className=" space-x-4 text-pink-950">{isAsc?.toString()} </p>
          </li>
        </ul>


        <br />

        <button className=" border-2 mb-3" onClick={() => handleDesc()}>Descending</button>
        &nbsp;
        <ul>
          <li className=" space-x-4 text-pink-950"> 
         { isDesc?.toString()  }
           </li>
        </ul>

      </div>

      
    </>
  );
}
