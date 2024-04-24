import { useState } from 'react';
import './App.css';
import Timer from './Timer';
import Form from './Form';

function App() {

  var [data, setData] = useState({
    title: '',
    nextTitle: '',
    timer: '',
    isNegative: false,
    status: false
  });

  return (
    <div className="App">
      <Form data={data} setData={setData} />
      <Timer data={data} setData={setData} />
    </div>
  );
}

export default App;
