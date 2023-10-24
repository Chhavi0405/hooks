import { format, getTime } from "date-fns";

export default function useFormat() {
  const getDate = (date?: string | number | undefined) => {
    const curDate = date ? new Date(date) : new Date();
    console.log(curDate, "curdate");
    return curDate;
  };

  const getMMddyyyy = (date?: number | Date | string) => {
    const formatDate = format(date as Date, "MM-dd-yyyy");
    console.log(formatDate, "formatDated");
    return formatDate;
  };

  const getddMMyy = (date?: number | Date | string) => {
    const formatDate2 = format(date as Date, "dd-MM-yy");
    console.log(formatDate2, "formatDate2");
    return formatDate2;
  };

  const getyyyyMMdd = (date?: number | Date | string) => {
    const formatDate3 = format(date as Date, "yyyy-MM-dd");
    console.log(formatDate3, "formatDate3");
    return formatDate3;
  };

  const getDay = (date?: number | Date | string) => {
    const day = format(date as Date, "dd");
    console.log(day);
    return day;
  };

  const getMonth = (date?: number | Date | string) => {
    const month = format(date as Date, "MM");
    console.log(month, "month");
    return month;
  };
  const getYear = (date?: number | Date | string) => {
    const year = format(date as Date, "yyyy");
    console.log(year, "year");
    return year;
  };

  const getTimeInHHMM = (date?: number | Date | string | undefined) => {
    const time = getTime(
      date instanceof Date ? date : new Date(date || Date.now())
    );
    const formattedTime = format(time, "HH:mm"); 
    console.log(formattedTime, "time");
    return formattedTime;
  };

  const getTimeInHHMMSS =(date?: number | Date | string | undefined) => {
    const time = getTime(
      date instanceof Date ? date : new Date(date || Date.now())
    );
    const formattedTime = format(time, "HH:mm:ss"); 
    console.log(formattedTime, "time");
    return formattedTime;
  };

  return {
    getDate,
    getMMddyyyy,
    getddMMyy,
    getDay,
    getMonth,
    getYear,
    getTimeInHHMM,
    getTimeInHHMMSS,
    getyyyyMMdd
  };
}
