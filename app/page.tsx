"use client";

import { useState } from "react";
import useFormat from "./useFormats/page";
import useConversion from "./useConversion/page";
import UseDateSorting from "./useDateSorting/page";
import useValidation from "./useValidation/page";

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

  const { isAfterDate, isBeforeDate, isEqualDate ,isExistsDate,maxDate,minDate,futureDate,pastDate,validDate,isValidDate} = useValidation();

  const [input, setInput] = useState<string | number>("");
  const [isDay, setIsDay] = useState<string | number>("");
  const [isFullYearFormat, setIsFullYearFormat] = useState<string | number>("");
  const [inputDay, setInputDay] = useState<string | number>("");
  const [isMonth, setIsMonth] = useState<string | number | Date>("");
  const [isFullTime, setIsFullTime] = useState<string | number | Date>("");
  const [isTime, setIsTime] = useState<number | Date | string>("");
  const [isMonthFull, setIsMonthFull] = useState<string | number | Date>("");
  const [is12hrs, setIs12Hrs] = useState<number | string | Date>("");
  const [is24hrs, setIs24Hrs] = useState<number | string | Date>("");
  const [isTimeDate, setisTimeDate] = useState<number | string | Date>("");
  const [isAsc, setIsAsc] = useState<number[] | Date[] | undefined>([]);
  const [isDesc, setIsDesc] = useState<number[] | Date[] | undefined>([]);
  const [isFormatDate2, setIsFormatDate2] = useState<string | number>("");
  const [checkIsAfter, setCheckIsAfter] = useState<boolean | string>();
  const [checkIsBefore, setCheckIsBefore] = useState<boolean | string>();
  const [checkIsEqual, setCheckIsEqual] = useState<boolean | string>();
  const [checkIsExists,setCheckIsExists] = useState<boolean|string|number>()
  const [isMax,setIsMax] = useState<Date>()
  const [isMin,setIsMin] = useState<Date>()
  const [isFuture,setIsFuture] = useState<boolean | string>()
  const [isPast,setIsPast] = useState<boolean | string>()
  const [isValid,setIsValid]= useState<boolean|string >()
  const dates = [
    new Date(1995, 6, 2),
    new Date(1997, 6, 2),
    new Date(1989, 6, 10),
    new Date(1987, 1, 11),
  ];

  const handleAsc = () => {
    setIsAsc(sortDateAsc(dates));
  };

  const handleFormatDate2 = () => {
    setIsFormatDate2(getddMMyy(getDate()));
  };

  const handleDesc = () => {
    setIsDesc(sortDateDesc(dates));
  };
  const handleMaxDate =()=>{
    setIsMax(maxDate(dates))
  }

  const handleMinDate =()=>{
    setIsMin(minDate(dates))
  }
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
  const handleAfterDate = () => {
    const validValue = isAfterDate(getDate(), getDate("2024-05-23"));
    setCheckIsAfter(validValue ? "true" : "false");
  };
  const handleBeforeDate = () => {
    const validValue = isBeforeDate(getDate(), getDate("2024-05-23"));
    setCheckIsBefore(validValue ? "true" : "false");
  };
  const handleEqualDate = () => {
    const validValue = isEqualDate(getDate(), getDate("2024-05-23"));
    setCheckIsEqual(validValue ? "true" : "false");
  };
  const handleExistsDate =()=>{
    const validExistDate = isExistsDate(2023,3,31)
    setCheckIsExists(validExistDate? "true" : "false");
  }
  const handleFutureDate =()=>{
    const validFutureDate = futureDate(getDate("2024-05-23"))
    setIsFuture(validFutureDate? "true" : "false");
  }
  const handlePastDate =()=>{
    const validPastDate = pastDate(getDate("2024-05-23"))
    setIsPast(validPastDate? "true" : "false");
  }

  const handleValidDate =()=>{
    const checkDate = isValidDate(201478, 1, 31)
    console.log(checkDate,"checkdate")
    setIsValid(checkDate)
  }
  const result = getYear(new Date(20144, 6, 2))
  console.log(result,"result")
  return (
    <>
      <div className="px-4 py-4 ">
        <h2 className="text-xl text-center italic font-extrabold text-red-950 mb-4">
          Custom Hooks
        </h2>
        <h2 className="text-xl font-medium mb-2">Date Formats</h2>
        <button
          className=" border-2 mb-3  space-x-4"
          onClick={() => handleGetDay()}
        >
          format Date
        </button>
        <p className=" space-x-4 text-pink-950">{isDay}</p>
        <button className=" border-2 mb-3" onClick={() => handleFormatDate2()}>
          format Date2 in ddMMyy
        </button>
        <p className=" space-x-4 text-pink-950">{isFormatDate2.toString()}</p>
        <button className=" border-2 mb-3" onClick={() => handleddMMyy()}>
          format Date3 in yyyyMMdd
        </button>{" "}
        <p className=" space-x-4 text-pink-950">{isFullYearFormat}</p>
        <button className=" border-2 mb-3" onClick={() => handleDay()}>
          getday
        </button>
        <p className=" space-x-4 text-pink-950">{inputDay}</p>
        <button className=" border-2 mb-3" onClick={() => handleMonth()}>
          getMonth
        </button>
        <p className=" space-x-4 text-pink-950">{isMonth.toString()}</p>
        <button className=" border-2 mb-3" onClick={() => handleFormatdate()}>
          getYear
        </button>
        <p className=" space-x-4 text-pink-950">{input}</p>
        <button className=" border-2 mb-3" onClick={() => handleGetTime()}>
          get Time In HH:MM
        </button>
        <p className=" space-x-4 text-pink-950">{isTime.toString()}</p>
        <button className=" border-2 mb-3" onClick={() => handleFullTime()}>
          time in HH:MM:SS
        </button>
        <p className=" space-x-4 text-pink-950">{isFullTime.toString()}</p>
        <button className=" border-2 mb-3" onClick={() => handleFullMonth()}>
          get full month
        </button>
        <p className=" space-x-4 text-pink-950">{isMonthFull.toString()}</p>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-medium mb-2">Time Conversion</h2>

        <button
          className=" border-2 mb-3"
          onClick={() => {
            handleTime();
          }}
        >
          in 12 hrs
        </button>
        <p className=" space-x-4 text-pink-950">{is12hrs.toString()}</p>
        <button className=" border-2 mb-3" onClick={() => handleTimeIn24()}>
          in 24 hrs
        </button>
        <p className=" space-x-4 text-pink-950">{is24hrs.toString()}</p>
        <button className=" border-2 mb-3  " onClick={() => handleTimeDate()}>
          time-Date
        </button>
        <p className=" space-x-4 text-pink-950">{isTimeDate.toString()}</p>
      </div>

      <div className="px-4">
        <h3 className="text-xl  font-medium mb-2">Sorting</h3>
        <button className=" border-2 mb-3" onClick={() => handleAsc()}>
          Ascending
        </button>
        <ul>
          <li>
            <p >{isAsc?.toString()} </p>
          </li>
        </ul>
        <button className=" border-2 mb-3" onClick={() => handleDesc()}>
          Descending
        </button>
        &nbsp;
        <ul>
          <li className=" space-x-4 text-pink-950">{isDesc?.toString()}</li>
        </ul>
      </div>

      <div className="px-4">
        <h3 className="text-xl  font-medium mb-2">Date Validation</h3>

        <button className=" border-2 mb-3" onClick={() => handleAfterDate()}>
          isAfter Date
        </button>
        <p className=" space-x-4 text-pink-950">{checkIsAfter}</p>

        <button className=" border-2 mb-3" onClick={() => handleBeforeDate()}>
          isBefore Date
        </button>
        <p className=" space-x-4 text-pink-950">{checkIsBefore}</p>

        <button className=" border-2 mb-3" onClick={() => handleEqualDate()}>
          isEqual Date
        </button>
        <p className=" space-x-4 text-pink-950">{checkIsEqual}</p>

        <button className=" border-2 mb-3" onClick={() => handleExistsDate()}>
          isExists Date
        </button>
        <p className=" space-x-4 text-pink-950">{checkIsExists}</p>

        <button className=" border-2 mb-3" onClick={() => handleMaxDate()}>
          Max Date
        </button>
        <p className=" space-x-4 text-pink-950">{isMax?.toDateString()}</p>

        <button className=" border-2 mb-3" onClick={() => handleMinDate()}>
          Min Date
        </button>
        <p className=" space-x-4 text-pink-950">{isMin?.toDateString()}</p>

        <button className=" border-2 mb-3" onClick={() => handleFutureDate()}>
          Future Date
        </button>
        <p className=" space-x-4 text-pink-950">{isFuture}</p>

        <button className=" border-2 mb-3" onClick={() => handlePastDate()}>
        Past Date
        </button>
        <p className=" space-x-4 text-pink-950">{isPast}</p>

        <button className=" border-2 mb-3" onClick={() => handleValidDate()}>
         Valid Date
        </button>
        <p className=" space-x-4 text-pink-950">{isValid?.toString()}</p>



      </div>
    </>
  );
}
