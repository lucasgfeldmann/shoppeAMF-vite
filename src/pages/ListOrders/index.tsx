import { useEffect, useState, type FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Product from "../../components/Product";
import Content from "../../components/Content";
import "./styles.css";
import * as orderService from "../../services/order";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const ListOrders: FC = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<orderService.Order[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);


    function formatedDate(date: Date) {
        const doneAt = new Date(date); // garante que seja Date
        const formattedDate = doneAt.toLocaleDateString("pt-BR");
        const hour = doneAt.getHours()
        const minutes = doneAt.getMinutes()
        return `${formattedDate} ${hour}:${minutes}`
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await orderService.getAll();
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
                <Text.Header>Orders</Text.Header>
                <Button.StandartButton onClick={() => navigate("/orders/create")}>
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
                                <Product.Especification>Date: {formatedDate(item.done_at)}</Product.Especification>
                                <Product.Especification>Product ID: {item.product_id}</Product.Especification>
                                <Product.Especification>User ID: {item.user_id}</Product.Especification>
                                <Product.Especification>Quantity: {item.quantity}</Product.Especification>
                                <Product.Especification>Total price: ${(item.total_price * 1 / 1000).toFixed(2)}</Product.Especification>
                                <Content.Horizontal style={{ gap: 8 }}>
                                    <Button.StandartButton onClick={() => navigate(`/orders/${item.id}`)}>
                                        <Text.Sm style={{ color: "#fff" }}>Edit</Text.Sm>
                                    </Button.StandartButton>
                                    <Button.StandartButton onClick={async () => {
                                        try {
                                            await orderService.deleteOrder(item.id);
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

export default ListOrders;