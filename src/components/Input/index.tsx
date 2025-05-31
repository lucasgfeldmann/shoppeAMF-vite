import type { FC, InputHTMLAttributes } from "react";
import "./styles.css"


const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <input {...props} className={`input-standart ${className}`} />
    );
}


export default Input;

