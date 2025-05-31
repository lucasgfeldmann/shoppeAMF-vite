import type { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.css"


interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
}

const VerticalContent: FC<Props> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`vertical-content ${className}`}>
            {children}
        </div>
    );
}

export default VerticalContent;