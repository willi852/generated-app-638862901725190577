import React from 'react';

function HistoryPanel({ history }) {
  if (!history.length) return null;

  return (
    <div className="history-panel">
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span className="expression">{item.expression}</span>
            <span className="result">= {item.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPanel;