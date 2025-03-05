import MenuIcon from "../../../icons/MenuIcon";
import CloseIcon from "../../../icons/CloseIcon";

function HamburgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div className="sm:hidden">
      {isMenuOpen ? (
        <button
          onClick={toggleMenu}
          className="w-[40px] h-[40px] flex items-center justify-center bg-Neutral-700 dark:bg-Neutral-0 text-Neutral-0 dark:text-Neutral-900 cursor-pointer
          rounded-[10px] "
        >
          <CloseIcon />
        </button>
      ) : (
        <button
          onClick={toggleMenu}
          className="w-[40px] h-[40px] text-Neutral-700 dark:text-Neutral-0 cursor-pointer flex justify-center items-center "
        >
          <MenuIcon />
        </button>
      )}
    </div>
  );
}

export default HamburgerMenu;
