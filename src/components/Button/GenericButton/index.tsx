import { type CSSProperties, type FC, type ReactNode } from "react";
import "./styles.css"


interface IGenericButton {
    children: ReactNode;
    style?: CSSProperties;
    className?: string
    onClick?: () => void
}


const GenericButton: FC<IGenericButton> = ({ children, className = "button", style, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={"generic-button-standarts " +  className}
            style={{ ...style }}
        >
            {children}
        </button>
    );
}


export default GenericButton;
export type { IGenericButton };
