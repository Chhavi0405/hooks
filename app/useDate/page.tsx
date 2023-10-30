import { getTime, intlFormat } from "date-fns";

export default function useDate() {
  const intlTimeZone = (date?: Date | number) => {
    const displayTime = intlFormat(
      date as Date,
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        // timeZone: timeZone,
      },
      {
        locale: "de-DE",
      }
    );
    console.log(displayTime, "intlTimeZone");
    return displayTime;
  };

  return {
    intlTimeZone,
  };
}
