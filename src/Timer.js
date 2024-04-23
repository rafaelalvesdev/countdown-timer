
import { useEffect } from 'react';
import logo from './logo.png';

var Timer = ({data, setData}) => {

    useEffect(() => {
        window.interval && clearInterval(window.interval);
        if (data.status) {
            var timer = (data?.timer || "00:00").split(':');
            var minutes = parseInt(timer[0]);
            var seconds = parseInt(timer[1]);
            var isNegative = data.isNegative || false;
            window.interval = setInterval(() => {
                if(isNegative){
                    seconds++;
                    if(seconds === 60){
                        minutes++;
                        seconds = 0;
                    }
                }
                else if (seconds === 0) {
                    if (minutes !== 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        seconds--;
                        isNegative = true;
                    }
                } else {
                    seconds--;
                }
                setData({...data, 
                    timer: `${Math.abs(minutes).toString().padStart(2, '0')}:${Math.abs(seconds).toString().padStart(2, '0')}`, 
                    isNegative: isNegative});
            }, 1000);
        }        
    });

    return !data.status ? <></> : (
        <>
            <h1>{data.title}</h1>
            <p className="countdown-timer">{data.isNegative ? '-' : ''}{data.timer}</p>

            <div className="separator"></div>
            <footer>        
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </>
    );

};

export default Timer;