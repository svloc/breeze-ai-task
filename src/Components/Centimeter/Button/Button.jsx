import React from "react";
import './Button.css';
function Button(props){
    const{children,variant,...rest}=props;
    switch (variant) {
        case 'danger':
            return(<button className="btn btn-danger" {...rest}>{children}</button>);
        case 'buttonWithImg':
            return(<button className="btn flex justify-content-center align-items-center w-full" {...rest}>{children}</button>);
    
        default:
            return(<button className="btn btn-black" {...rest}>{children}</button>);
    }  
}
export default Button;