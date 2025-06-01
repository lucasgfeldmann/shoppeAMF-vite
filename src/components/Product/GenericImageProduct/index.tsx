import type { FC, ImgHTMLAttributes } from "react";
import "./styles.css"

const GenericImageProduct: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
    return (
        <img {...props} className={`generic-image-product-standart ${className}`} />
    );
}

export default GenericImageProduct;