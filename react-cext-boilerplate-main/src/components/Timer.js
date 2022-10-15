import React from 'react'

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => { 

    const [time, setTime] = React.useState({hours, minutes, seconds});
    const [work, setWork] = React.useState({work: true});
    
    const tick = () => {
   
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
            if(work) {
                setWork({work: false})
                resetBreak()
            } else {
                setWork({work: true})
                reset()
            }
        }
        else if (time.seconds === 0) {
            setTime({hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }

    };

    const reset = () => setTime({hours: 0, minutes: 25, seconds: 10});
    const resetBreak = () => setTime({hours: 0, minutes: 5, seconds: 0});

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
       
    return (
        <div>
            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
            .toString()
            .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p> 
            {/* <button onClick={start}>Resettt</button> */}
            {/* <p>{work}</p> */}
        </div>
    );
}

export default Timer;