import React from 'react';

function CalculatorDisplay({ value, error }) {
  return (
    <div className="calculator-display">
      <div className={`display-content ${error ? 'error' : ''}`}>
        {error || value}
      </div>
    </div>
  );
}

export default CalculatorDisplay;