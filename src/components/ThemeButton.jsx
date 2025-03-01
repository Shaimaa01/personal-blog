import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeButton() {
  const { theme, setTheme, themeIcon } = useContext(ThemeContext);

  return (
    <button
      className={`h-[44px] w-[44px] max-sm:w-[32px] max-sm:h-[32px]  flex justify-center items-center rounded-[8px] cursor-pointer ${
        theme === "dark" ? " bg-Neutral-700" : "bg-Neutral-100"
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
