import {
  isAfter,
  isBefore,
  isEqual,
  isExists,
  isFuture,
  isPast,
  isValid,
  max,
  min,
} from "date-fns";
import { format } from "path";

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

  const isExistsDate = (year: number, month: number, day: number) => {
    const checkIsExistsDate = isExists(year, month, day);
    return checkIsExistsDate;
  };

  const maxDate = (date: Date[] | number[]) => {
    const findMaxDate = max(date);
    return findMaxDate;
  };

  const minDate = (date: Date[] | number[]) => {
    const findMinDate = min(date);
    return findMinDate;
  };

  const futureDate = (date: Date | number) => {
    const checkFutureDate = isFuture(date);
    return checkFutureDate;
  };

  const pastDate = (date: Date | number) => {
    const checkPastDate = isPast(date);
    return checkPastDate;
  };

  const checkValidation =(date: Date | number): boolean => {
    const checkDate = new Date(date);
    const verifydate = isValid(checkDate);
    return verifydate;
  };

  return {  
    isAfterDate,
    isBeforeDate,
    isEqualDate,
    isExistsDate,
    maxDate,
    minDate,
    futureDate,
    pastDate,
    checkValidation,
  };
}
