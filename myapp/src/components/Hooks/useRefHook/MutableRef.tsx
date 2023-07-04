import React,{useState,useEffect,useRef} from 'react'

const MutableRef = () => {

    const [timer,setTimer] = useState(0);
    const intervalId = useRef<number | null>(null);

    const stopTimer = () => {
        if(intervalId.current){
            window.clearInterval(intervalId.current)
        }
    }

    const tick = () => setTimer(prevstate => prevstate + 1)

    useEffect(() => {
        intervalId.current = window.setInterval(tick,1000)
        return() => {
            stopTimer()
        }
    },[])


  return (
    <div>
        <h1>Timer : {timer}</h1>
        <button type='button' onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default MutableRef