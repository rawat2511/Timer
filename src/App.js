import './App.css';
import { Timer } from './Component/Timer';
import { useState } from 'react';

function App() {

  const [initialTime, setInitialTime] = useState("");
  const [finalTime, setFinalTime] = useState("");
  const [start, setStart] = useState(false);


  return (
    <div className="App">
      <h1>Timer</h1>
      <input value={initialTime} onChange={(e) => setInitialTime(Number(e.currentTarget.value))} type="number" placeholder="Initial Time" value={initialTime} />
      <input value={finalTime} onChange={(e) => setFinalTime(Number(e.currentTarget.value))} type="number" placeholder="Final Time" value={finalTime} />
      <button onClick={() => setStart( !start )}  >Start Timer</button>
      {
        start && <Timer initialTime={initialTime} finalTime={finalTime} setStart={setStart} />
      }
    </div>
  );
}

export default App;
