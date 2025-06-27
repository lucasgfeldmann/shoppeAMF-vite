import { useEffect, useState, type FC } from "react";
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
import * as productService from "../../services/product"



const Shop: FC = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<productService.Product[] | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await productService.getAll();
            setProducts(result);
        };
        fetchProducts();
    }, []);

    if (!products) {
        return <h1>Carregando...</h1>;
    }
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
                {products.map((item, index) => (
                    <Product.ContainerVertical onClick={() => navigate(`/product/${item.id}`)} key={index}>
                        <Product.ImageMd src={ProductSvg} />
                        <Product.Price style={{ paddingInline: 2 }}>{item.name}</Product.Price>
                        <Product.Description style={{ paddingInline: 2 }}>{item.description}</Product.Description>
                        <Product.Description style={{ paddingInline: 2 }}>Stock: {item.quantity}</Product.Description>
                        <Product.Price style={{ paddingInline: 2, alignSelf: "end" }}>${(item.price * 1 / 1000).toFixed(2)}</Product.Price>
                    </Product.ContainerVertical>
                ))}
            </Content.Grid>
        </>
    );
}

export default Shop;

