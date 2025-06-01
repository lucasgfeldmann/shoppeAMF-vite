import type { ComponentProps, FC } from "react";
import Content from "../../Content";
import "./styles.css";
import type HorizontalContent from "../../Content/HorizontalContent";

const ContainerMediumHorizontalProduct: FC<ComponentProps<typeof HorizontalContent>> = ({ className, ...props }) => {
    return (
        <Content.Horizontal {...props} className={`container-medium-horizontal-product-standart ${className}`} />
    );
}

export default ContainerMediumHorizontalProduct;