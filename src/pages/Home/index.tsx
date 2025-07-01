import { useEffect, useState, type FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Content from "../../components/Content";
import Product from "../../components/Product";
import "./styles.css";
import { useNavigate } from "react-router";
import * as productService from "../../services/product"


const Home: FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<Boolean>(true);
    const [products, setProducts] = useState<productService.Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await productService.getAll();
            setProducts(result);
            setLoading(false)
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    return (
        <>
            <Layout.Header style={{ justifyContent: "space-between" }}>
                <Text.Header>Home</Text.Header>
            </Layout.Header>
            <Content.Grid className="shop-horizontal-content">
                {!products[0] && <Text.Lg style={{ fontSize: 22 }}>Nenhum produto encontrado</Text.Lg>}
                {products.map((item, index) => (
                    <Product.ContainerVertical style={{ backgroundColor: "#ccc", borderRadius: 16, padding: 8, boxSizing: "border-box" }} onClick={() => navigate(`/${item.id}`)} key={index}>
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

export default Home;

