import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <header>
          <h1>Scientific Calculator</h1>
          <button 
            onClick={toggleDarkMode} 
            className="theme-toggle"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <Calculator />
      </div>
    </div>
  );
}

export default App;