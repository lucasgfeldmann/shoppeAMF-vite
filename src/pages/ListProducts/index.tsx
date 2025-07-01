import { useEffect, useState, type FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Product from "../../components/Product";
import Content from "../../components/Content";
import "./styles.css";
import * as productService from "../../services/product";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const ListProducts: FC = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<productService.Product[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);


    useEffect(() => {
        const fetchProducts = async () => {
            const result = await productService.getAll();
            setProducts(result);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    return (
        <>
            <Layout.Header>
                <Text.Header>Products</Text.Header>
                <Button.StandartButton onClick={() => navigate("/products/create")}>
                    <Text.Sm style={{ color: "#fff" }} >Create</Text.Sm>
                </Button.StandartButton>
                <Button.StandartButton onClick={() => navigate("/account")}>
                    <Text.Sm style={{ color: "#fff" }}>Sair do ADM</Text.Sm>
                </Button.StandartButton>
            </Layout.Header>
            <Content.Vertical style={{ gap: 15 }}>
                {!products[0] && <Text.Lg style={{ fontSize: 22 }}>Nenhum produto encontrado</Text.Lg>}
                {
                    products.map(item => (
                        <Product.ConteinerHorizontal style={{ gap: 10, backgroundColor: "#f2f2f2", padding: 10, borderRadius: 10 }}>
                            <Product.ContainerVertical style={{ height: "auto", alignSelf: "stretch", justifyContent: "space-between" }}>
                                <Product.Especification>ID: {item.id}</Product.Especification>
                                <Product.Especification>Name: {item.name}</Product.Especification>
                                <Product.Especification>Description: {item.description}</Product.Especification>
                                <Product.Especification>Quantity: {item.quantity}</Product.Especification>
                                <Product.Especification>Price: ${(item.price * 1 / 1000).toFixed(2)}</Product.Especification>
                                <Content.Horizontal style={{ gap: 8 }}>
                                    <Button.StandartButton onClick={() => navigate(`/products/${item.id}`)}>
                                        <Text.Sm style={{ color: "#fff" }}>Edit</Text.Sm>
                                    </Button.StandartButton>
                                    <Button.StandartButton onClick={async () => {
                                        try {
                                            await productService.deleteProduct(item.id);
                                            window.location.reload();
                                        } catch (e) {
                                            alert(e)
                                        }
                                    }}>
                                        <Text.Sm style={{ color: "#fff" }}>Delete</Text.Sm>
                                    </Button.StandartButton>
                                </Content.Horizontal>
                            </Product.ContainerVertical>
                        </Product.ConteinerHorizontal>
                    ))
                }
            </Content.Vertical>

        </>
    );
}

export default ListProducts;