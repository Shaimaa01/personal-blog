import { createContext, useState, useEffect } from "react";
import iconSun from "/assets/images/icon-sun.svg";
import iconMoon from "/assets/images/icon-moon.svg";
import patternDark from "/assets/images/pattern-dark.svg";
import patternLight from "/assets/images/pattern-light.svg";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const [themeIcon, setThemeIcon] = useState();
  const [pattern, setPattern] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeIcon(iconSun);
      setPattern(patternDark);
    } else {
      document.documentElement.classList.remove("dark");
      setThemeIcon(iconMoon);
      setPattern(patternLight);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      <div className="bg-Neutral-0 dark:bg-Neutral-900 pt-[20px] max-sm:pt-[16px]   px-[max(0px,calc((100%-640px)/2))] max-sm:px-[16px]  relative overflow-hidden">
      <img src={pattern} alt="background pattern in left  " className="absolute left-[-212px] top-[227px] max-lg:hidden" />
      <img src={pattern} alt="background pattern in right " className="absolute right-[-212px] top-0 max-lg:hidden" />
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
