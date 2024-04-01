// DarkModeButton.tsx
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { IoIosSunny } from 'react-icons/io';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div
      className={`flex justify-center items-center ${
        isDarkMode ? 'dark:bg-gray-800' : ''
      }`}
    >
      {/* Toggle for Dark/Light Mode */}
      <button
        onClick={toggleDarkMode}
        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex align-middle items-center justify-center font-bold text-2xl"
      >
        {isDarkMode ? <FaMoon className="text-white" /> : <IoIosSunny />}
      </button>
    </div>
  );
}
