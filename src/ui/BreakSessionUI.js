import React, { Children } from "react";
export const BreakSessionContainer = ({children, ...props}) => {
    return (
        <div className="flex flex-col items-center" {...props}>
            {children}

        </div>
    )
}

export const BrekSessionLabel = ({children, ...props}) =>{
    return(
        <p className="text-lg text-red-200" {...props}>{children}</p>
    )
}



