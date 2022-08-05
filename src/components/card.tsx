export interface DivProps extends React.ComponentPropsWithoutRef<"div"> {
   specialProp?: string;
}

interface Props extends DivProps {
   className?: string | undefined;
}

const BASE_CLASSES = `rounded-2xl border-2 border-black`;

export const Card: React.FC<Props> = ({ className, children, ...rest }) => {
   const classes = `${BASE_CLASSES} ${className}`;

   return (
      <div {...rest} className={classes}>
         {children}
      </div>
   );
};
