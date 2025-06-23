import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
import HistoryPanel from './HistoryPanel';
import ScientificFunctions from './ScientificFunctions';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const evaluateExpression = async () => {
    try {
      const response = await axios.post('/api/calculator/evaluate', {
        expression: displayValue
      });
      
      const result = response.data.result;
      setHistory(prev => [{ expression: displayValue, result }, ...prev]);
      setDisplayValue(String(result));
      setError(null);
    } catch (err) {
      console.error('Evaluation error:', err);
      setError(err.response?.data?.error || 'Error evaluating expression');
    }
  };

  const updateDisplay = (value) => {
    setError(null);
    setDisplayValue(prev => prev === '0' || error ? value : prev + value);
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setError(null);
  };

  const handleBackspace = () => {
    setDisplayValue(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleFunction = (func) => {
    setDisplayValue(prev => `${prev}${func}(`);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="calculator">
      <CalculatorDisplay 
        value={displayValue} 
        error={error} 
      />
      <div className="calculator-body">
        <ScientificFunctions 
          onFunctionClick={handleFunction} 
        />
        <CalculatorKeypad
          onDigitClick={updateDisplay}
          onOperatorClick={updateDisplay}
          onClear={clearDisplay}
          onBackspace={handleBackspace}
          onEvaluate={evaluateExpression}
        />
      </div>
      <HistoryPanel history={history} />
    </div>
  );
}

export default Calculator;