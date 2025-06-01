import type { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const FixedContent: FC<Props> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`fixed-content ${className}`} >
            {children}
        </div>
    );
}

export default FixedContent;