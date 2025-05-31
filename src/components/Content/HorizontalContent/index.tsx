import type { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.css"


interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
}

const HorizontalContent: FC<Props> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`horizontal-content ${className}`}>
            {children}
        </div>
    );
}

export default HorizontalContent;