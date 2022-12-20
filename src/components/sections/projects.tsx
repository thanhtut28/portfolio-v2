import Wrapper from "../wrapper";
import cn from "classnames";
import { PROJECTS } from "../../utils/constants";

const Projects: React.FC = () => {
   return (
      <section className={cn("py-20 px-4", "sm:px-6", "md:px-8", "lg:px-10")} id="showcase">
         <Wrapper>
            <div className="pb-10 sm:pb-20">
               <h2
                  className={cn(
                     "text-5xl text-black font-extrabold text-left",
                     "small-phones:text-4xl",
                     "sm:text-6xl",
                     "lg:text-8xl"
                  )}
               >
                  Projects
               </h2>
               <h2
                  className={cn(
                     "text-5xl text-tacao font-extrabold text-left",
                     "small-phones:text-4xl",
                     "sm:text-6xl",
                     "lg:text-8xl"
                  )}
               >
                  Showcase.
               </h2>
            </div>
            <div
               className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg mx-auto bg-neutral-100 rounded-3xl p-6 mb-20",
                  "small-phones:p-4",
                  "sm:p-6",
                  "md:p-8",
                  "lg:p-12",
                  "xl:p-16"
               )}
            >
               {PROJECTS.map((project, index) => (
                  <div
                     key={project.title}
                     className={cn(
                        `p-6 rounded-2xl bg-black ${index === 2 ? "sm:col-span-2" : ""}`,
                        "small-phones:p-4",
                        "sm:p-6",
                        "lg:p-8",
                        "xl:p-10"
                     )}
                  >
                     <div className="overflow-hidden">
                        <img
                           src={`./assets/${project.img}.png`}
                           alt="rose-stream"
                           className="rounded-xl object-cover"
                        />
                     </div>

                     <div
                        className={cn(
                           "py-4 flex gap-4 justify-between items-start",
                           "sm:py-6",
                           "md:py-8",
                           "lg:py-10"
                        )}
                     >
                        <div>
                           <h6
                              className={cn(
                                 "text-lg font-semibold text-white",
                                 "sm:text-xl",
                                 "lg:text-2xl"
                              )}
                           >
                              {project.title}
                           </h6>
                           <p className={cn("text-xs text-gray-400", "sm:text-sm", "md:text-base")}>
                              {project.subtitle}
                           </p>
                        </div>
                        {project.link && (
                           <a
                              className={cn(
                                 "mt-2 w-16 bg-white border border-transparent rounded-md py-1.5 flex items-center justify-center text-sm font-medium text-black hover:bg-black hover:text-white hover:border hover:border-white transition-all flex-shrink-0 font-neue",
                                 "md:text-base",
                                 "lg:w-20 lg:text-lg",
                                 "xl:w-24"
                              )}
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                           >
                              Visit
                           </a>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </Wrapper>
      </section>
   );
};

export default Projects;
