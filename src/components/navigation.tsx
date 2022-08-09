import { motion } from "framer-motion";
import cn from "classnames";
import { NAVIGATIONS } from "../utils/constants";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

interface Props {
   openMobileNav: boolean;
   setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<Props> = ({ openMobileNav, setOpenMobileNav }) => {
   const [lastYPos, setLastYPos] = useState(0);
   const [shouldShowActions, setShouldShowActions] = useState(true);

   useEffect(() => {
      function handleScroll() {
         const yPos = window.scrollY;
         const isScrollingUp = yPos < lastYPos;

         if (window.scrollY < 100) return;

         if (!openMobileNav) {
            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
         }
      }

      window.addEventListener("scroll", handleScroll, false);

      return () => {
         window.removeEventListener("scroll", handleScroll, false);
      };
   }, [lastYPos, openMobileNav]);

   return (
      <motion.header
         className={cn(`fixed top-0 left-0 w-full py-2 z-50 lg:py-4`)}
         initial={{ y: 0 }}
         animate={{ y: shouldShowActions ? 0 : -200 }}
         transition={{ y: { duration: 0.4 } }}
      >
         <nav
            className={cn(
               "relative px-4 max-w-screen-2xl z-50 w-full mx-auto",
               "sm:px-6",
               "md:px-8",
               "lg:px-10"
            )}
         >
            <div className="flex bg-black rounded-full bg-opacity-75 backdrop-blur-sm px-2 border border-gray-400">
               <div className={cn("flex items-center px-4", "sm:px-6", "md:px-8")}>
                  <h1
                     className={cn(
                        "text-white text-2xl font-black",
                        "small-phones:text-xl",
                        "sm:text-3xl",
                        "lg:text-4xl"
                     )}
                  >
                     <a href="/#home">THA</a>
                  </h1>
               </div>
               <div
                  className={cn(
                     "w-full py-2 flex items-center justify-end border-l border-gray-400",
                     "lg:py-6"
                  )}
               >
                  <ul className="hidden lg:flex">
                     {NAVIGATIONS.map(nav => (
                        <li
                           key={nav}
                           className="mx-8 font-neue transition-all font-medium cursor-pointer text-white text-lg hover:text-pixie-green capitalize"
                        >
                           <a href={`#${nav}`}>{nav}</a>
                        </li>
                     ))}
                  </ul>
                  <button
                     className="flex lg:hidden h-10 w-10 bg-pixie-green rounded-full justify-center items-center"
                     onClick={() => setOpenMobileNav(prev => !prev)}
                  >
                     {!openMobileNav ? <HiMenu size="1.7rem" /> : <HiX size="1.7rem" />}
                  </button>
               </div>
            </div>
         </nav>

         <div
            className={`lg:hidden fixed top-0 left-0 bottom-0 right-0 w-full h-[100vh] pt-20 p-8 bg-black z-40  transition-all duration-500 ${
               openMobileNav ? "translate-x-0" : "translate-x-full"
            }`}
         >
            <ul className="flex flex-col">
               {NAVIGATIONS.map(nav => (
                  <li
                     key={nav}
                     className="font-neue transition-all cursor-pointer text-white font-semibold hover:text-pixie-green capitalize py-6 border-b border-white border-opacity-10 text-lg md:text-xl"
                     onClick={() => setOpenMobileNav(false)}
                  >
                     <a className="w-full block" href={`#${nav}`}>
                        {nav}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </motion.header>
   );
};

export default Navigation;
