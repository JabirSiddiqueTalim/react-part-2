import { useState } from "react"

export default function Batsman()
{
  const [run,setRuns]= useState(0);
  const [six,setSix]=useState(0);
  const singleAdd=()=>
  {
    const newRun=run+1;
    setRuns(newRun);
  }
  const fourAdd=()=>
    {
      const newRun=run+4;
      setRuns(newRun);
    }
    const sixAdd=()=>
      {
        const newRun=run+6;
        const sixes=six+1;
        setSix(sixes);
        setRuns(newRun);
      }
  return(
      <div>
          <h2>Player Name : Sakib Al Hasan</h2>
          <p>Six : {six} </p>
          {
            run >50 && <p>Great your run 50</p>
          }
          <h3>Run : {run}</h3>
          <button onClick={singleAdd}>Single</button>
          <button onClick={fourAdd}>Four</button>
          <button onClick={sixAdd}>Six</button>
      </div>
  )
}