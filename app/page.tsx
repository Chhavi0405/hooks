'use client'

import useFormat from "./useFormats/page"


export default function Home() {

  const { getDate,getMMddyyyy,getddMMyy,getDay,getMonth,getYear  } = useFormat();
  return (
    <>
    <h2>Custom Hooks</h2>
  
    <button onClick={()=>getMMddyyyy(getDate('2023-05-23'))}>format Date</button>
   <br/>
   <button onClick={()=>getddMMyy(getDate())}>format Date2 in ddMMyyyy</button>
   <br/>
   <button onClick={()=>getDay(getDate())}>getday</button>
   <br/>
   <button onClick={()=>getMonth(getDate())}>getMonth</button>
   <br/>
   <button onClick={()=>getYear(getDate())}>getYear</button>


    </>
  )
}
