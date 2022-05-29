import React, { useEffect, useState } from 'react'

const Stop = () => {
   const [watch, setWatch] = useState(1000)
    const [timerId, setTimerId] = useState()



    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
      }




   const start=()=>{
       if(!timerId){

           let id= setInterval(()=>{
                setWatch((prev)=>prev+100)
            },1)
            setTimerId(id)
       }
   }
   const stop=()=>{
       clearInterval(timerId)
   }
   const reset=()=>{
       clearInterval(timerId)
       setWatch(0)
   }
  return <div className='App'>
      <h1>Watch :</h1>
      <h1>{msToTime(watch)}</h1> 
    <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  </div>
  
}

export default Stop