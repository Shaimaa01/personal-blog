import { useContext } from "react";
import ThemeContext from "/src/context/ThemeContext"

function ThemeButton() {
  const { theme, setTheme, themeIcon } = useContext(ThemeContext);

  return (
    <button
      className={`h-[40px] w-[40px] border   flex justify-center items-center rounded-[8px] cursor-pointer ${
        theme === "dark" ? " bg-Neutral-900 border-Neutral-700 " : "bg-Neutral-100 border-Neutral-200 "
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={themeIcon}
        alt="theme icon"
        className="max-sm:w-[20px] max-sm:h-[20px]"
      />
    </button>
  );
}

export default ThemeButton;
