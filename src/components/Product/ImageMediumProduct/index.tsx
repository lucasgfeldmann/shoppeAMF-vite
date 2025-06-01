import type { ComponentProps, FC } from "react";
import "./styles.css"
import GenericImageProduct from "../GenericImageProduct";

const ImageMediumProduct: FC<ComponentProps<typeof GenericImageProduct>> = ({ className, ...props }) => {
    return (
        <GenericImageProduct {...props} className={`image-medium-product-standart ${className}`} />
    );
}

export default ImageMediumProduct;