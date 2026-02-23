import { useState } from "react"

 export default function Counter()
{
  const [count,setCount]= useState(0);
  const clickAdd=()=>
  {
    const newCount=count+1;
    setCount(newCount);
  }



  const counterstyle={
    border : '2px solid yellow'
  }
  return(
    <div style={counterstyle}>
       <h2>Count : {count}</h2>
       <button onClick={clickAdd}>Add</button>
    </div>

  )

}