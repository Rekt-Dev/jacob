// ThemeToggle.tsx
import React, { useState } from 'react';
import './ThemeToggle.css'; // Import the CSS for styling

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Toggle the body class to switch between themes
    document.body.classList.toggle('dark', isDarkMode);
  };

  return (
    <button className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
