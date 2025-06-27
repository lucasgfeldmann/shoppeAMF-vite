import { type ButtonHTMLAttributes, type FC, type HTMLAttributes, type ReactNode } from "react";
import "./styles.css"


interface IGenericButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    onClick?: () => void
}


const GenericButton: FC<IGenericButton> = ({ children, className = "button", ...props }) => {
    return (
        <button
            className={`generic-button-standarts ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}


export default GenericButton;
export type { IGenericButton };
