import React, { useState } from 'react';
import './App.css';
import Keypad from './components/KeyPad';
import CalculatorDisplay from './components/CalculatorDisplay';

function App() {
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const performCalculation = key => {
    if (key === "=") {
      calculate();
    } else if (key === "AC") {
      reset();
    } else if (key === "C") {
      backspace();
    } else {
      setResult(result + key);
    }
  };

  return (
    <div
      className="fullPage"
    >
      <CalculatorDisplay result={result} />
      <Keypad performCalculation={performCalculation} />
    </div>
  );
}

export default App;
