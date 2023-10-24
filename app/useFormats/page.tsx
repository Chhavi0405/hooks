import { format } from "date-fns";

export default function useFormat (){

    const getDate = (date?: string | number | undefined) => {
        const curDate = date ? new Date(date) : new Date();
        console.log(curDate,"curdate")
        return curDate;
      };
    
    const getMMddyyyy = (date?:any)=>{
        const formatDate = format(date,'MM-dd-yyyy')
        console.log(formatDate,"formatDated")
        return formatDate;
    }

    const getddMMyy =(date?:any)=>{
        const formatDate2 = format(date,'dd-MM-yy')
        console.log(formatDate2,"formatDate2")
        return formatDate2
    }
    const getDay =(date?:any)=>{
      const day = format(date,'dd')
      console.log(day)
      return day;
    
    }

    const getMonth =(date?:any)=>{
        const month = format(date,'MM')
        console.log(month,"month")
        return month;
      
      }
const getYear =(date?:any)=>{
    const year =format(date,'yyyy')
    console.log(year,"year")
    return year;
}



    return{getDate,getMMddyyyy,getddMMyy,getDay,getMonth,getYear}


    
}