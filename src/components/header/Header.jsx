import { useState } from "react";
import Navbar from "./header-components/Navbar";
import ProfilePicture from "./header-components/ProfilePicture";
import ThemeButton from "./header-components/ThemeButton";
import HamburgerMenu from "./header-components/HamburgerMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="relative flex justify-between items-center bg-Neutral-0 dark:bg-Neutral-800 border border-Neutral-200 dark:border-Neutral-700 w-full max-sm:w-full h-[52px] p-[6px] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(123,123,123,0.03)] mx-auto">
      <ProfilePicture />
      <div className="flex justify-between items-center gap-[20px] max-sm:gap-[6px]">
        <Navbar isMenuOpen={isMenuOpen} />
        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
