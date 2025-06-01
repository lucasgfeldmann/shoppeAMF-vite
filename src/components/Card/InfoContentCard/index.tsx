import type { ComponentProps, FC } from "react";
import Content from "../../Content";
import type VerticalContent from "../../Content/VerticalContent";
import "./styles.css";

const InfoContentCard: FC<ComponentProps<typeof VerticalContent>> = ({ className, ...props }) => {
    return (
        <Content.Vertical {...props} className={`info-content-card-standart ${className}`} />
    );
}

export default InfoContentCard;