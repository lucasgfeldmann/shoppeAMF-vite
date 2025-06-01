import type { ComponentProps, FC } from "react";
import type VerticalContent from "../../Content/VerticalContent";
import Content from "../../Content";
import "./styles.css";

const ContainerMediumVerticalProduct: FC<ComponentProps<typeof VerticalContent>> = ({ className, ...props }) => {
    return (
        <Content.Vertical {...props} className={`container-medium-vertical-product-standart ${className}`} />
    );
}

export default ContainerMediumVerticalProduct;