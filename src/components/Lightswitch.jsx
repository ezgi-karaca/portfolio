import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={handleClick}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full transition duration-300 ease-in-out">
            <span
              className={`${
                darkMode
                  ? "translate-x-5 bg-[#777777]"
                  : "translate-x-0 bg-white"
              } inline-block w-5 h-5 transform rounded-full transition duration-300 ease-in-out`}
            />
          </div>
        </label>
        <span className="ml-3 text-xs text-[#777777]">
          {" "}
          {darkMode ? "DARK MODE" : "LIGHT MODE"}{" "}
        </span>
      </div>
    </>
  );
}

export default Lightswitch;
