import { createContext, useState, useEffect } from "react";
import iconSun from "/assets/images/icon-sun.svg";
import iconMoon from "/assets/images/icon-moon.svg";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const [themeIcon, setThemeIcon] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove("dark");
      setThemeIcon(iconMoon);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
