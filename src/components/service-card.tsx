import cn from "classnames";

interface Props {
   className?: string | undefined;
   title: string;
   body: string;
}

const BASE_CLASSES = cn(
   "bg-white rounded-2xl p-8 mt-8 rounded-tl-[4rem] w-full lg:max-w-lg",
   "lg:mt-0 lg:p-10"
);

export const ServiceCard: React.FC<Props> = ({ title, body }) => {
   const classes = `${BASE_CLASSES}`;

   return (
      <div className={classes}>
         <h6 className="text-2xl font-semibold capitalize py-4">{title}</h6>
         <p className={cn("text-lg py-2", "md:text-xl md:py-4")}>{body}</p>
      </div>
   );
};
