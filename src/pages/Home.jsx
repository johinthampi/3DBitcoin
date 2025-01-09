import React, { useState } from "react";
import ModelView from "../component/ModelView";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <div className="relative bg-black dark:bg-white h-screen flex items-center justify-center">
        {/* Text content */}
        <div className="absolute z-10 flex text-white dark:text-black">
          <h1 className="text-9xl font-custom">GLOBAL</h1>
          <div className="ms-5 mt-6">
            <h2 className="text-2xl">markets at</h2>
            <h1 className="text-5xl font-semibold">your sight .</h1>
          </div>
        </div>

        {/* ModelView (3D model) */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <ModelView />
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleMode}
          className="absolute top-10 px-4 py-2 text-sm font-medium rounded-md bg-black text-white dark:bg-gray-200 dark:text-black border border-white"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Home;