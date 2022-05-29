import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(10)

    useEffect(()=>{
        const id=setInterval(()=>{
            
            if(timer <= 1){
                clearInterval(id)
            }else{
                setTimer(timer - 1)
            }
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[timer])
  return <div><h1>Count Down : <br/>{timer}</h1></div>
  
}

export default Timer