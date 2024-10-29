import React, { createContext, useState } from "react"; // Added useState import

// Step 1: Create a context object
export const ThemeContext = createContext();

// Step 2: Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Shared State
  const [theme, setTheme] = useState('dark');

  // Toggle Theme Function
  const toggleTheme = () => setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};