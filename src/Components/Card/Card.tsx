import React, { FC } from 'react';
import cn from "classnames";
interface CardProps {
   children:React.ReactNode
   className?:string
}
const Card: FC<CardProps> = (props:CardProps) => {

   const {children,className}=props;

   const rootCls=cn(
       className,
       "drop-shadow-white",
       "bg-blue-940",
       "text-white-950",
       "p-6",
       "rounded-lg"
   )

   return( <div className={rootCls}>{children}</div>)
};

export default Card;
