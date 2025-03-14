import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* desktop  & tablet */}
      <nav className="flex gap-[24px]  font-DM text-[16px] leading-[130%] tracking-[-0.2px] max-sm:hidden ">
        {["Home", "Blog", "About", "Newsletter"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item}`}
            className={({ isActive }) =>
              `transition duration-300 ease-in-out transition-discrete underline decoration-[3px]
               hover:decoration-Blue-500 hover:dark:decoration-Blue-700 hover:text-Neutral-700 hover:dark:text-Neutral-0 
               focus:bg-[#FFFFFF] focus:rounded-[4px] focus:shadow-[0_0_0_2px_#FEFEFE,0_0_0_4px_#5792C0] focus:decoration-transparent
               focus:dark:bg-Neutral-900 focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:dark:decoration-transparent
              ${
                item == "Blog" ? "underline-offset-4" : "underline-offset-1"
              }  ${
                isActive
                  ? "text-Neutral-700 dark:text-Neutral-0  decoration-Blue-500 dark:decoration-Blue-700"
                  : "text-Neutral-600 dark:text-Neutral-400 decoration-transparent "
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
