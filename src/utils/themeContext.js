// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to light mode

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Save theme preference in localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};