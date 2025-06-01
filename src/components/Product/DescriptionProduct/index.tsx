import type { ComponentProps, FC } from "react";
import Text from "../../Text";
import type GenericText from "../../Text/GenericText";
import "./styles.css";


const DescriptionProduct: FC<ComponentProps<typeof GenericText>> = ({ className, ...props }) => {
    return (
        <Text.Generic {...props} className={`description-product-standart ${className}`} />
    );
}

export default DescriptionProduct;