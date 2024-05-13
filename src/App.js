import { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import Timer from './Timer';
import Form from './Form';

function App() {

  var [theme, setTheme] = useState ("");

  var [data, setData] = useState({
    title: '',
    nextTitle: '',
    timer: '',
    isNegative: false,
    status: false
  });

  useEffect (() =>{
    var timerCompare = moment(data.timer, 'mm:ss'); 
    if (timerCompare < moment('05:00', 'mm:ss'))
    setTheme ('theme1')
    else if (timerCompare < moment('02:00', 'mm:ss'))
    setTheme ('theme2')
  }, [data]);

  return (
    <div className={"App " + theme}>
      <Form data={data} setData={setData} />
      <Timer data={data} setData={setData} />
    </div>
  );
}

export default App;
