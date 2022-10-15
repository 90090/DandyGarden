import React from 'react';
import { useEffect, useState } from 'react';

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => { 

    const [time, setTime] = useState({hours, minutes, seconds});
    const [work, setWork] = useState(false);
   
    const tick = () => {
   
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
            
            if(work) { 
                toggleWork()      
                resetBreak()
            } else{
                
                toggleWork()
                reset()
            }
        }
        else if (time.seconds === 0) {
            setTime({hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }
    };

    const reset = () => setTime({hours: 0, minutes: 25, seconds: 0});
    const resetBreak = () => setTime({hours: 0, minutes: 5, seconds: 0});

    const toggleWork = () => setWork(!work);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
       
    return (
        <div>
            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
            .toString()
            .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p> 
            
        </div>
    );
}

export default Timer;