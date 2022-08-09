import { Card } from "./card";
import { EDUCATION_BACKGROUND, SKILLS } from "../utils/constants";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import cn from "classnames";
import { getRandomColors } from "../utils/getRandomColors";
import { useRef } from "react";

const About: React.FC = () => {
   const ref = useRef<HTMLDivElement | null>(null);
   const isInView = useInView(ref);

   return (
      <motion.div
         className="w-full py-32"
         id="about"
         ref={ref}
         style={{
            transform: isInView ? "translateX(0%)" : "translateX(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear",
         }}
      >
         <motion.div
            className={cn(
               "-mx-8 group p-6 bg-neutral-100 rounded-2xl hover:bg-pixie-green-400 transition-colors duration-300",
               "sm:-mx-6 sm:p-8",
               "md:-mx-4 sm:p-12",
               "lg:mx-0 lg:p-16"
            )}
         >
            <div>
               <h4
                  className={cn(
                     "text-black text-3xl font-extrabold",
                     "sm:text-4xl",
                     "md:text-5xl",
                     "xl:text-6xl"
                  )}
               >
                  Currently Working as
               </h4>
               <h4
                  className={cn(
                     "text-pixie-green text-3xl font-extrabold pt-2 group-hover:text-white",
                     "sm:text-4xl sm:pt-3",
                     "md:text-5xl md:pt-4",
                     "xl:text-6xl xl:pt-5"
                  )}
               >
                  A freelance Developer.
               </h4>
               <h6
                  className={cn(
                     "text-xl font-extrabold py-6 text-gray-700",
                     "sm:text-2xl sm:py-8",
                     "md:text-3xl md:py-12",
                     "lg:text-4xl lg:py-14"
                  )}
               >
                  Tech Enthusiast who loves to work with React and
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-apricot-peach-700 relative inline-block mx-2">
                     <span className="relative text-white">GraphQL</span>
                  </span>
               </h6>
            </div>
            <div className={cn("grid grid-cols-1 items-stretch gap-4 py-10", "lg:grid-cols-2")}>
               <div className={cn("pl-0", "lg:pl-6")}>
                  <Card
                     className={cn(
                        "h-full px-4 py-3",
                        "sm:px-6 sm:py-4",
                        "md:px-8 md:py-6",
                        "lg:px-10 lg:py8"
                     )}
                  >
                     <h6 className="text-xl font-semibold">Educational Background</h6>
                     <div className="h-full flex items-center">
                        <ul className={cn("w-full py-2 small-phones:py-4", "md:py-4", "lg:py-6")}>
                           {EDUCATION_BACKGROUND.map(edu => (
                              <Card
                                 key={edu.name}
                                 className="bg-neutral-100 border-2 rounded-2xl border-black p-4 mb-4"
                              >
                                 <h6 className="text-sm font-medium">{edu.name}</h6>
                                 <p className="text-xs text-gray-700">{edu.date}</p>
                              </Card>
                           ))}
                        </ul>
                     </div>
                  </Card>
               </div>
               <div className={cn("pr-0 flex flex-col gap-4", "lg:pr-6")}>
                  {/* skills */}
                  <Card className="p-2">
                     <ul className="flex flex-wrap">
                        {SKILLS.map(skill => (
                           <li
                              key={skill}
                              className={`px-2 m-2 py-1 rounded-full capitalize bg-${getRandomColors()}-100`}
                           >
                              <p className="text-sm font-bold">{skill}</p>
                           </li>
                        ))}
                     </ul>
                  </Card>
                  {/* socials */}

                  <div className={cn("grid grid-cols-1 gap-4 h-full", "sm:grid-cols-2")}>
                     <Card className="p-4 xl:flex">
                        <div className="pr-2">
                           <AiFillGithub size="2rem" />
                        </div>
                        <div className={cn("flex flex-col pt-2 xl:pt-0", "sm:pt-3", "lg:pt-4")}>
                           <div className="px-2 pb-1">
                              <h6 className="text-small">Contributions</h6>
                              <p className="text-md font-semibold">500+</p>
                           </div>
                           <div className="px-2 py-1">
                              <h6 className="text-small">Production</h6>
                              <p className="text-md font-semibold">3</p>
                           </div>
                        </div>
                     </Card>
                     <Card className="p-4 xl:flex">
                        <div className="pr-2">
                           <AiFillLinkedin size="2rem" />
                        </div>
                        <div className={cn("flex flex-col pt-2 xl:pt-0", "sm:pt-3", "lg:pt-4")}>
                           <div className="px-2 pb-1">
                              <h6 className="text-small">Connections</h6>
                              <p className="text-md font-semibold">40+</p>
                           </div>
                           <div className="px-2 py-1">
                              <h6 className="text-small">Skill Assessments</h6>
                              <p className="text-md font-semibold">3</p>
                           </div>
                        </div>
                     </Card>
                  </div>
               </div>
            </div>
         </motion.div>
      </motion.div>
   );
};

export default About;
