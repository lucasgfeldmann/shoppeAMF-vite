import type { FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Content from "../../components/Content";
import Product from "../../components/Product";
import ProductSvg from "../../assets/products/firstProduct.svg";
import "./styles.css";
import Input from "../../components/Input";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

type ProductData = {
    img: string;
    description: string;
    price: number;
}

const data: ProductData[] = [
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
    {
        img: ProductSvg,
        description: "Lorem ipsum dolor sit amet consectetur",
        price: 17.00
    },
]


const Shop: FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Layout.Header>
                <Text.Header>Shop</Text.Header>
                <Input type="text" placeholder="Socks ✖️" className="search-shop" />
                <Button.Rounded onClick={() => navigate("/")} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                    <Icon.Settings width={35} />
                </Button.Rounded>
            </Layout.Header>
            <Content.Grid className="shop-horizontal-content">
                {data.map((item, index) => (
                    <Product.ContainerVertical onClick={() => navigate("/product/2")} key={index}>
                        <Product.ImageMd src={item.img} />
                        <Product.Description>{item.description}</Product.Description>
                        <Product.Price>${item.price}</Product.Price>
                    </Product.ContainerVertical>
                ))}
            </Content.Grid>
        </>
    );
}

export default Shop;

