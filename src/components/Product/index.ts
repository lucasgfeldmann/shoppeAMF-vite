import ContainerMediumHorizontalProduct from "./ContainerMediumHorizontalProduct";
import ContainerMediumVerticalProduct from "./ContainerMediumVerticalProduct";
import DescriptionProduct from "./DescriptionProduct";
import EspecificationProduct from "./EspecificationProduct";
import GenericImageProduct from "./GenericImageProduct";
import ImageMediumProduct from "./ImageMediumProduct";
import ImageSmallProduct from "./ImageSmallProduct";
import PriceProduct from "./PriceProduct";

const Product = {
    ContainerVertical: ContainerMediumVerticalProduct,
    ConteinerHorizontal: ContainerMediumHorizontalProduct,
    ImageMd: ImageMediumProduct,
    ImageSm: ImageSmallProduct,
    Description: DescriptionProduct,
    Especification: EspecificationProduct,
    Price: PriceProduct,
    GenericImage: GenericImageProduct,

}

export default Product;