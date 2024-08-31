import React, { useState } from 'react';
import './App.css'; // Make sure this file includes styles for both light and dark modes

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header className="App-header">
        <h1>Welcome to XRewinded!</h1>
        <button onClick={toggleDarkMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
