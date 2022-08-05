import Wrapper from "../wrapper";
import cn from "classnames";
import { getServices } from "../../utils/getServices";
import { ServiceCard } from "../service-card";

const Services: React.FC = () => {
   const [firstService, moreServices] = getServices();

   return (
      <div className={cn("bg-pixie-green-400 py-20 px-4", "sm:px-6", "md:px-8", "lg:px-10")}>
         <Wrapper>
            <div className={cn("lg:flex lg:gap-16 lg:items-end lg:justify-between")}>
               <div className="mb-10">
                  <h2
                     className={cn(
                        "text-6xl text-black font-extrabold text-left",
                        "small-phones:text-5xl",
                        "sm:text-6xl",
                        "lg:text-8xl"
                     )}
                  >
                     What I can
                  </h2>
                  <h2
                     className={cn(
                        "text-6xl text-white font-extrabold text-left",
                        "small-phones:text-5xl",
                        "sm:text-6xl",
                        "lg:text-8xl"
                     )}
                  >
                     Offer.
                  </h2>
               </div>
               <ServiceCard title={firstService.title} body={firstService.body} />
            </div>
            <div className={cn("lg:flex lg:py-20")}>
               {moreServices.map((service, index) => (
                  <div key={service.title} className={index === 1 ? "lg:mt-16 lg:mx-10" : ""}>
                     <ServiceCard title={service.title} body={service.body} />
                  </div>
               ))}
            </div>
         </Wrapper>
      </div>
   );
};

export default Services;
