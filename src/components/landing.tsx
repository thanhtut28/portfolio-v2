import { motion, Variants } from "framer-motion";
import cn from "classnames";

const leftText: Variants = {
   hidden: {
      transform: "translateX(-100%)",
      opacity: 0,
   },
   show: {
      transform: "translateX(0%)",
      opacity: 1,
      transitionDuration: "0.5s",
   },
};

const rightText: Variants = {
   hidden: {
      transform: "translateX(100%)",
      opacity: 0,
   },
   show: {
      transform: "translateX(0%)",
      opacity: 1,
      transitionDuration: "0.5s",
   },
};

const avatar: Variants = {
   hidden: {
      transform: "translateY(-500px)",
      opacity: 0,
   },
   show: {
      transform: "translateY(0%)",
      opacity: 1,
      transition: { type: "spring", bounce: 0.5, delay: 0.5 },
   },
};

const image: Variants = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transitionDelay: "0.5s",
      transitionDuration: "0.5s",
   },
};

const Landing: React.FC = () => {
   return (
      <div className="relative pt-10" id="home">
         <motion.h2
            variants={leftText}
            initial="hidden"
            animate="show"
            className={cn(
               "text-6xl text-tacao font-extrabold text-left",
               "small-phones:text-5xl",
               "sm:text-7xl",
               "md:text-8xl",
               "lg:text-8xl",
               "xl:text-9xl"
            )}
         >
            Hello,
         </motion.h2>
         <div>
            <motion.h2
               variants={rightText}
               initial="hidden"
               animate="show"
               className={cn(
                  "text-6xl text-pixie-green font-extrabold pl-[3rem] inline-block",
                  "small-phones:text-5xl",
                  "sm:text-7xl",
                  "md:text-8xl md:pl-[5rem]",
                  "lg:text-8xl lg:pl-[7rem]",
                  "xl:text-9xl xl:pl-[10rem]"
               )}
            >
               I am
            </motion.h2>
            <motion.div
               variants={avatar}
               initial="hidden"
               animate="show"
               className={cn(
                  "w-12 h-12 bg-pixie-green rounded-full inline-block relative ml-2 mb-2 ",
                  "small-phones:w-10 small-phones:h-10",
                  "sm:w-14 sm:h-14",
                  "md:w-16 md:h-16",
                  "lg:w-20 lg:h-20"
               )}
            >
               <img
                  src="/assets/me.png"
                  alt="Than Htut Aung"
                  className="w-full absolute bottom-[-1px] left-[-1px]"
               />
            </motion.div>
         </div>
         <div>
            <motion.h2
               variants={leftText}
               initial="hidden"
               animate="show"
               className={cn(
                  "text-5xl text-white font-extrabold pl-[4.5rem]",
                  "sm:text-6xl sm:pl-[5.5rem]",
                  "md:text-8xl md:pl-[7rem]",
                  "lg:text-8xl lg:pl-[9rem]",
                  "xl:text-9xl xl:pl-[15rem]"
               )}
            >
               Than Htut Aung
            </motion.h2>
         </div>

         {/* icons */}
         <motion.div
            variants={image}
            initial="hidden"
            animate="show"
            className={cn(
               "w-16 absolute bottom-10 left-0",
               "sm:w-20",
               "md:w-24",
               "lg:w-28",
               "xl:w-32 xl:bottom-1/4"
            )}
         >
            <img src="/assets/skull.png" alt="skull" className="w-full -rotate-12" />
         </motion.div>
         <motion.div
            variants={image}
            initial="hidden"
            animate="show"
            className={cn(
               "w-16 absolute right-0 -bottom-4",
               "small-phones:hidden",
               "sm:w-20 sm:right-1/4",
               "md:w-24 md:right-24",
               "lg:w-32 lg:top-20 lg:right-1/4",
               "xl:top-1/3 xl:right-1/4"
            )}
         >
            <img src="/assets/pumpkin-full.png" alt="skull" className="w-full" />
         </motion.div>

         {/* floating candy */}

         <motion.div
            className="absolute top-0 w-full h-full flex justify-center items-center"
            initial={{ x: 0, y: 0 }}
            // all values divied by two
            // because the container takes the full width and can't fix
            animate={{
               x: ["50%", "0%", "-50%", "-15%", "50%"],
               y: ["-25%", "50%", "0%", "-50%", "-25%"],
               rotate: 360,
            }}
            transition={{
               duration: 10,
               repeat: Infinity,
            }}
         >
            <img
               src="/assets/zombie-candy.png"
               alt="skull"
               className={cn("w-14", "sm:w-20", "md:w-26", "lg:w-32")}
            />
         </motion.div>
      </div>
   );
};

export default Landing;
