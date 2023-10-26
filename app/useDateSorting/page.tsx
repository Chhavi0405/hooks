import { compareAsc, compareDesc } from "date-fns"


export default function UseDateSorting () {
  
const sortDateAsc=(date?: Date[] | undefined)=>{
    const arr :Date[]|number[]|undefined=date;
    const sortedDates =arr?.sort(compareAsc)
    return sortedDates
    
    
}

const sortDateDesc=(date?: Date[] | undefined)=>{
    const arr1 :Date[]|number[]|undefined=date;
    const sortedDatesDesc =arr1?.sort(compareDesc)
    return sortedDatesDesc
    
    
}
return{sortDateAsc,sortDateDesc}

}

