import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import the context

function Canvas() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context

  return (
    <div className={theme === 'dark' ? 'h-full bg-black p-24 text-white mt-2 rounded-lg p-4 flex justify-center' : 'h-full bg-white p-24 text-white mt-2 rounded-lg p-4 flex justify-center'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Canvas;
