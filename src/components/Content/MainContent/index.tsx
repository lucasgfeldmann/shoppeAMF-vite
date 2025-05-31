import type { FC, HTMLAttributes, ReactNode } from "react";
import "./styles.css"


interface Props extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
}

const MainContent: FC<Props> = ({ children, className, ...props }: Props) => {
    return (
        <main {...props} className={`main-content ${className}`}>
            {children}
        </main>
    );
}

export default MainContent;