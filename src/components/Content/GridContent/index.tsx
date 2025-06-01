import type { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const GridContent: FC<Props> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`grid-component-standart ${className}`}>
            {children}
        </div>
    );
}

export default GridContent;