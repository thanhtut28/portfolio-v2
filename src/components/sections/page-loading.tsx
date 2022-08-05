import { motion, Variants } from "framer-motion";
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
      y: "0%",
   },
   exit: {
      opacity: 0,
      y: "-100%",
   },
};

const PageLoading: React.FC<Props> = ({ isVisible }) => {
   return (
      <>
         {isVisible && (
            <motion.div
               initial="hidden"
               variants={variant}
               animate="show"
               exit="exit"
               className="w-full bg-black h-[100vh] fixed flex flex-col justify-center items-center"
            >
               <div>
                  <HashLoader color="#AFD7B3" loading={isVisible} size={50} />
               </div>
            </motion.div>
         )}
      </>
   );
};

export default PageLoading;
