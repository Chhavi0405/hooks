import { isAfter, isBefore, isEqual, isExists, isFuture, isPast, isValid, max, min } from "date-fns";

export default function useValidation() {
  const isAfterDate = (date: Date | number, dateToCompare: Date | number) => {
    const checkAfterDate = isAfter(date, dateToCompare);
    return checkAfterDate;
  };

  const isBeforeDate = (date: Date | number, dateToCompare: Date | number) => {
    const checkBeforeDate = isBefore(date, dateToCompare);
    return checkBeforeDate;
  };

  const isEqualDate = (dateLeft: Date | number, dateRight: Date | number) => {
    const checkIsEqualDate = isEqual(dateLeft, dateRight);
    return checkIsEqualDate;
  };

  const isExistsDate =(year:number,month:number,day:number)=>{
    const checkIsExistsDate =isExists(year,month,day)
    return checkIsExistsDate;
  }
  
  const maxDate = (date:Date[]|number[])=>{
    const findMaxDate = max(date)
    return findMaxDate;
  }

  const minDate = (date:Date[]|number[])=>{
    const findMinDate = min(date)
    return findMinDate;
  }

  const futureDate =(date:Date|number)=>{
    const checkFutureDate = isFuture(date)
    return checkFutureDate;
  }
  
  const pastDate =(date:Date|number)=>{
    const checkPastDate = isPast(date)
    return checkPastDate;
  }

  const validDate =(date:any)=>{
    const checkValidDate = isValid(date)
    return checkValidDate
  }

  const isValidDate=(year: number, month: number, day: number )=> {
    var d = new Date(year, month-1, day);
    console.log(d,"dateeeee",d.getFullYear() ,"yearr", d.getMonth(),"mon",d.getDate(),"day")
    if ( d.getFullYear() == year  && d.getMonth()+1 == month &&  d.getDate() == day  ) {
      // console.iflog("first")
      
        return true;
      
    }
    // console.log("second")
    return false;
}

  return {
    isAfterDate,
    isBeforeDate,
    isEqualDate,
    isExistsDate,
    maxDate,
    minDate,
    futureDate,
    pastDate,
    validDate,
    isValidDate
  };
}
