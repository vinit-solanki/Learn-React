import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import the context

function Canvas() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context

  return (
    <div className={theme === 'dark' ? 'bg-black p-2 text-white mt-2 rounded-lg p-4 flex justify-center h-full ' : 'bg-white p-2 text-white mt-2 rounded-lg p-4 flex justify-center h-full '}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Canvas;
