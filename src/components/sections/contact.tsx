import cn from "classnames";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Card } from "../card";

const Contact: React.FC = () => {
   return (
      <footer
         className={cn(
            "bg-black py-10 px-4",
            "small-phones:px-1",
            "sm:px-6",
            "md:px-8",
            "lg:px-10"
         )}
         id="contact"
      >
         <div
            className={cn(
               "rounded-2xl border border-gray-500 px-4 py-10 flex flex-col gap-16 items-center justify-between max-w-screen-2xl mx-auto",
               "sm:px-8 sm:py-12",
               "md:px-12 md:py-16",
               "lg:flex-row lg:px-10 lg:py-20",
               "xl:px-14"
            )}
         >
            <div>
               <h2
                  className={cn(
                     "text-5xl text-white font-extrabold text-left pb-2",
                     "small-phones:text-4xl",
                     "sm:text-6xl",
                     "lg:text-7xl lg:pb-4",
                     "xl:text-8xl xl:pb-6"
                  )}
               >
                  Get in
               </h2>
               <h2
                  className={cn(
                     "text-5xl text-apricot-peach font-extrabold text-left",
                     "small-phones:text-4xl",
                     "sm:text-6xl",
                     "lg:text-7xl",
                     "xl:text-8xl"
                  )}
               >
                  Touch
               </h2>
            </div>
            <div className="flex w-full">
               <div
                  className={cn(
                     "bg-neutral-100 px-4 py-6 rounded-2xl w-full",
                     "small-phones:px-3",
                     "sm:px-6 sm:py-8",
                     "lg:px-8 lg:py-10",
                     "xl:px-10 xl:py-14"
                  )}
               >
                  <h6 className={cn("text-2xl text-black font-semibold", "sm:text-3xl")}>
                     Here is the good fit for your business. Also you can dicuss with me for your
                     business needs.
                  </h6>
                  <div className="py-6">
                     <p className={cn("text-lg", "sm:text-xl")}>
                        I know you are busy so just send an email and I'll reply you ASAP. Upgrade
                        your business with me.
                     </p>
                  </div>
                  <div
                     className={cn(
                        "grid grid-cols-1 gap-0 py-6",
                        "md:grid-cols-3 md:gap-4",
                        "lg:grid-cols-1 lg:gap-0",
                        "xl:grid-cols-3 xl:gap-4"
                     )}
                  >
                     <Card
                        className={cn(
                           "p-4 my-2",
                           "small-phones:p-2",
                           "md:col-span-2",
                           "lg:col-span-auto",
                           "xl:col-span-2"
                        )}
                     >
                        <h6
                           className={cn(
                              "text-xl font-semibold pb-6",
                              "small-phones:text-lg",
                              "md:text-2xl"
                           )}
                        >
                           Email
                        </h6>
                        <Card className="py-1 px-2 rounded-full flex items-center">
                           <div
                              className={cn(
                                 "w-9 h-9 bg-tacao-400 border-2 border-black rounded-full flex justify-center items-center flex-shrink-0",
                                 "small-phones:w-8 small-phones:h-8"
                              )}
                           >
                              <AiOutlineMail size="1.5rem" />
                           </div>
                           <p
                              className={cn(
                                 "text-sm font-medium pl-2",
                                 "small-phones:text-xs",
                                 "md:text-base"
                              )}
                           >
                              <a
                                 href={`mailto:thanhtutaung2k22@gmail.com?subject=Need a website&body=Hello Than Htut Aung, I wanna hire you to build a website. Please contact me as soon as possible.`}
                                 className="underline"
                              >
                                 thanhtutaung2k22@gmail.com
                              </a>
                           </p>
                        </Card>
                     </Card>
                     <Card className={cn("p-4 my-2", "small-phones:p-2")}>
                        <h6
                           className={cn(
                              "text-xl font-semibold pb-6",
                              "small-phones:text-lg",
                              "md:text-2xl"
                           )}
                        >
                           Socials
                        </h6>
                        <Card className="py-1 px-2 rounded-full flex items-center">
                           <div className="w-9 h-9 bg-pixie-green-400 border-2 border-black rounded-full flex justify-center items-center">
                              <a
                                 href="https://github.com/thanhtut28"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <AiOutlineGithub size="1.7rem" />
                              </a>
                           </div>
                           <div className="w-9 h-9 ml-1.5 bg-apricot-peach-400 border-2 border-black rounded-full flex justify-center items-center">
                              <a
                                 href="https://www.linkedin.com/in/than-htut-aung-a80490202/"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <AiOutlineLinkedin size="1.8rem" />
                              </a>
                           </div>
                        </Card>
                     </Card>
                  </div>
                  <h6
                     className={cn("text-center text-gray-500 text-sm font-medium", "md:text-base")}
                  >
                     Handcrafted By Than Htut Aung &copy; 2022.
                  </h6>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Contact;
