import React, { useState, useEffect } from 'react';

function Themes() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <h2>Themes</h2>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>

      <div className={`App ${theme}`}>
        <p>This is your themed application!</p>
      </div>
    </div>
  );
}

export default Themes;
