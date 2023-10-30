import { format, getTime } from "date-fns";

export default function useFormat() {
  const getDate = (date?: string | number | undefined) => {
    const curDate = date ? new Date(date) : new Date();
    return curDate;
  };

  const getMMddyyyy = (date?: number | Date | string) => {
    const formatDate = format(date as Date, "MM-dd-yyyy");
    return formatDate;
  };

  const getddMMyy = (date?: number | Date | string) => {
    const formatDate2 = format(date as Date, "dd-MM-yy");
    return formatDate2;
  };

  const getyyyyMMdd = (date?: number | Date | string) => {
    const formatDate3 = format(date as Date, "yyyy-MM-dd");
    return formatDate3;
  };
  const getyyyyMMMMdd = (date?: number | Date | string) => {
    const formatDate4 = format(date as Date, "yyyy-MMMM-dd");
    return formatDate4;
  };

  const getDay = (date?: number | Date | string) => {
    const day = format(date as Date, "dd");
    return day;
  };

  const getMonth = (date?: number | Date | string) => {
    const month = format(date as Date, "MM");
    return month;
  };
  const getYear =(date?: any) =>  {
    let newDate = new Date(date)
    const year = format(newDate, "yyyy");
    if (year.length > 4) {
      return ("Invalid")
    }

    else {
      return year
    }
    //  return year

  };

  const getTimeInHHMM = (date?: number | Date | string | undefined) => {
    const time = getTime(
      date instanceof Date ? date : new Date(date || Date.now())
    );
    const formattedTime = format(time, "HH:mm  ");
    return formattedTime;
  };

  const getTimeInHHMMSS = (date?: number | Date | string | undefined) => {
    const time = getTime(
      date instanceof Date ? date : new Date(date || Date.now())
    );
    const formattedTime = format(time, "HH:mm:ss");
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
    getyyyyMMdd,
    getyyyyMMMMdd
  };
}
