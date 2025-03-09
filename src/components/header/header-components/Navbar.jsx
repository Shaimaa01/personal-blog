import { NavLink } from "react-router-dom";

function Navbar({ isMenuOpen }) {
  return (
    <>
      {/* desktop  & tablet */}
      <nav className="flex gap-[24px]  font-DM text-[16px] leading-[130%] tracking-[-0.2px] max-sm:hidden ">
        {["Home", "Blog", "About", "Newsletter"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item}`}
            className={({ isActive }) =>
              `transition duration-300 ease-in-out transition-discrete underline decoration-[3px] ${
                item == "Blog" ? "underline-offset-4" : "underline-offset-1"
              }  ${
                isActive
                  ? "text-Neutral-700 dark:text-Neutral-0  decoration-Blue-500 dark:decoration-Blue-700"
                  : "text-Neutral-600 dark:text-Neutral-400 decoration-transparent  "
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {isMenuOpen && (
        /* mobile */
        <nav
          className="absolute z-100 sm:hidden flex flex-col w-full left-0 top-[calc(100%+12px)] bg-Neutral-0 dark:bg-Neutral-800 shadow-[0px_8px_15px_0px_rgba(8,6,25,0.06)] 
        border border-Neutral-200 dark:border-Neutral-700 rounded-[10px] p-[12px] 
         gap-[6px]   font-DM font-medium text-[18px] leading-[150%] tracking-[-0.5px]  "
        >
          {["Home", "Blog", "About", "Newsletter"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item}`}
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

export default Navbar;
