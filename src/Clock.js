
import { useEffect, useState } from 'react';
import logo from './logo.png';
import moment from 'moment';



var Clock = ({data}) => {

    var [clock, setClock] = useState ('');

    useEffect(() => {
        window.interval && clearInterval(window.interval);
        if (data.status == 'clock') {
            var now = moment().format("HH:mm:ss");

            window.interval = setInterval(() =>
            setClock(now), 1000);
        };   
    });
    return data.status!='clock' ? <></> : (
        <>
            <h1>{data.title}</h1>
            <p className="clock">{clock}</p>
            <div className="separator"></div>
            <footer>        
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </>
    );
};

export default Clock;