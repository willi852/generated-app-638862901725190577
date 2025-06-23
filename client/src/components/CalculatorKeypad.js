import React from 'react';

function CalculatorKeypad({
  onDigitClick, 
  onOperatorClick,
  onClear,
  onBackspace,
  onEvaluate
}) {
  return (
    <div className="calculator-keypad">
      <div className="keypad-row">
        <button className="clear" onClick={onClear}>C</button>
        <button onClick={() => onOperatorClick('(')}>(</button>
        <button onClick={() => onOperatorClick(')')}>)</button>
        <button className="operator" onClick={onBackspace}>←</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onDigitClick('7')}>7</button>
        <button onClick={() => onDigitClick('8')}>8</button>
        <button onClick={() => onDigitClick('9')}>9</button>
        <button className="operator" onClick={() => onOperatorClick('/')}>÷</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onDigitClick('4')}>4</button>
        <button onClick={() => onDigitClick('5')}>5</button>
        <button onClick={() => onDigitClick('6')}>6</button>
        <button className="operator" onClick={() => onOperatorClick('*')}>×</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onDigitClick('1')}>1</button>
        <button onClick={() => onDigitClick('2')}>2</button>
        <button onClick={() => onDigitClick('3')}>3</button>
        <button className="operator" onClick={() => onOperatorClick('-')}>-</button>
      </div>
      <div className="keypad-row">
        <button onClick={() => onDigitClick('0')}>0</button>
        <button onClick={() => onDigitClick('.')}>.</button>
        <button className="equals" onClick={onEvaluate}>=</button>
        <button className="operator" onClick={() => onOperatorClick('+')}>+</button>
      </div>
    </div>
  );
}

export default CalculatorKeypad;