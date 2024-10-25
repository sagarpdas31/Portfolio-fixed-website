// import { useState, createContext, useContext } from "react";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");

//     return (
//         <ThemeContext.Provider value={[theme, setTheme]}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// //custom hook
// const useTheme = () => useContext(ThemeContext);

// export { useTheme, ThemeProvider };

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check for saved theme or default to "bright"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "bright");

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
