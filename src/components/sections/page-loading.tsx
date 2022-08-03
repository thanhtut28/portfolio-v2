import { AnimatePresence, motion, Variants } from "framer-motion";
import { HashLoader } from "react-spinners";
interface Props {
   isVisible: boolean;
}

const variant: Variants = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
};

const PageLoading: React.FC<Props> = ({ isVisible }) => {
   return (
      <AnimatePresence>
         {isVisible && (
            <motion.div
               initial="hidden"
               variants={variant}
               animate="show"
               exit="exit"
               className="w-full h-[100vh] fixed flex flex-col justify-center items-center"
            >
               <div>
                  <HashLoader color="#5f1075" loading={isVisible} size={50} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default PageLoading;
