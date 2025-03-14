import { NavLink } from "react-router-dom";

function MobileNavbar({ isMenuOpen, toggleMenu }) {
  return (
    <>
      {isMenuOpen && (
        /* mobile */
        <nav
          className={` mt-[12px]  sm:hidden flex flex-col w-full  bg-Neutral-0 dark:bg-Neutral-800 shadow-[0px_8px_15px_0px_rgba(8,6,25,0.06)] 
        border border-Neutral-200 dark:border-Neutral-700 rounded-[10px] p-[12px] 
         gap-[6px]   font-DM font-medium text-[18px] leading-[150%] tracking-[-0.5px]   `}
        >
          {["Home", "Blog", "About", "Newsletter"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item}`}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `pb-[6px]  border-b border-Neutral-200 dark:border-Neutral-700 last:border-transparent  ${
                  isActive
                    ? "text-Neutral-900 dark:text-Neutral-0  "
                    : "text-Neutral-600 dark:text-Neutral-400  "
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}

export default MobileNavbar;
