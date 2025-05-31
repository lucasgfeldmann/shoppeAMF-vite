import { type FC, type ReactNode, type HTMLAttributes } from "react";
import "./styles.css";

interface GenericTextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

const GenericText: FC<GenericTextProps> = ({ children, className, ...props }) => {
    return (
        <p className={`p-text-standart ${className}`} {...props}>
            {children}
        </p>
    );
};

export default GenericText;
