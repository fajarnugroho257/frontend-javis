import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ToggleMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 flex items-center bg-gray-700 dark:bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <div className="absolute left-1 text-yellow-500 text-xs">
        <FaSun />
      </div>
      <div className="absolute right-1 text-gray-300 text-xs">
        <FaMoon />
      </div>
    </div>
  );
}

export default ToggleMode;
