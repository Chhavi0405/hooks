import { format, getTime } from "date-fns";


export default function useConversion (){

     const convertTimeTo12HourTime =(date?:string|Date|number)=>{
        const time = getTime(
            date instanceof Date ? date : new Date(date || Date.now())
          );
          const format12 = format(time,'h:mm a')
          console.log(format12,"a")
          return format12
     }

     const convertTimeTo24HourTime  =(date?:string|Date|number)=>{
        const time = getTime(
            date instanceof Date ? date : new Date(date || Date.now())
          );
          const format24 = format(time,'H:mm')
          console.log(format24,"full")
          return format24
     }
     

  const getTimeAndDate =(date?:string|Date|number)=>{
        const time = getTime(
            date instanceof Date ? date : new Date(date || Date.now())
          );
          const formatTimeAndDate = format(time,'Pp')
          console.log(formatTimeAndDate,"full")
          return formatTimeAndDate
     }
    



    return{
        convertTimeTo12HourTime,
        convertTimeTo24HourTime,
        getTimeAndDate,
    }
}


