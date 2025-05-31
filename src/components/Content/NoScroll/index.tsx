import type { ComponentProps, FC } from "react";
import MainContent from "../MainContent";
import "./styles.css"




const NoScrollContent: FC<ComponentProps<typeof MainContent>> = ({ className, ...props }) => {
    return (
        <MainContent {...props} className={`no-scroll-content ${className}`} />
    );
}

export default NoScrollContent;