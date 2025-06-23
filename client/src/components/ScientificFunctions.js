import React from 'react';

const functions = [
  { label: 'sin', display: 'sin' },
  { label: 'cos', display: 'cos' },
  { label: 'tan', display: 'tan' },
  { label: '√', display: 'sqrt' },
  { label: 'π', display: 'Math.PI' },
  { label: 'log', display: 'log' },
  { label: 'ln', display: 'ln' },
  { label: 'x²', display: '^2' },
  { label: 'x^y', display: '^' }
];

function ScientificFunctions({ onFunctionClick }) {
  return (
    <div className="scientific-functions">
      {functions.map((func) => (
        <button
          key={func.label}
          className="scientific-function"
          onClick={() => onFunctionClick(func.display)}
        >
          {func.label}
        </button>
      ))}
    </div>
  );
}

export default ScientificFunctions;