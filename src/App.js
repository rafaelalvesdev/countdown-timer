import { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import Timer from './Timer';
import Form from './Form';
import Clock from './Clock';

function App() {

  var [theme, setTheme] = useState ("");

  var [data, setData] = useState({
    title: '',
    nextTitle: '',
    timer: '',
    isNegative: false,
    status: 'form'
  });

  useEffect (() =>{
    var timerCompare = moment(data.timer, 'mm:ss'); 
    if (data.status == 'timer')
    if (data.isNegative)
      setTheme ('theme2')
    else if (timerCompare < moment('02:30', 'mm:ss'))
      setTheme ('theme1')
    else if (timerCompare < moment('05:00', 'mm:ss'))
    setTheme ('theme3')
    else if (timerCompare < moment('10:00', 'mm:ss'))
      setTheme ('theme4')
  }, [data]);

  return (
    <div className={"App " + theme}>
      <Form data={data} setData={setData} />
      <Timer data={data} setData={setData} />
      <Clock data={data} />
    </div>
  );
}

export default App;
