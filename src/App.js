import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <h6>This is counter app</h6>
      <button id="increment-btn" aria-label='button-add' onClick={() => setCounter(counter + 1)}>Increment</button>
      <button id="decrement-btn" aria-label='button-dec' onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div aria-label='counter-value'>{counter}</div>
    </div>
  );
}

export default App;
