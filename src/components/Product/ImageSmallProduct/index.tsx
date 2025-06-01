import type { ComponentProps, FC } from "react";
import "./styles.css"
import GenericImageProduct from "../GenericImageProduct";

const ImageSmallProduct: FC<ComponentProps<typeof GenericImageProduct>> = ({ className, ...props }) => {
    return (
        <GenericImageProduct {...props} className={`image-small-product-standart ${className}`} />
    );
}

export default ImageSmallProduct;