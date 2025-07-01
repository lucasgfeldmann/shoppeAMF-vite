import { useEffect, useState, type FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Product from "../../components/Product";
import ProductSvg from "../../assets/products/firstProduct.svg";
import Content from "../../components/Content";
import "./styles.css";
import * as orderService from "../../services/order";

const OrderHisoty: FC = () => {

    const [products, setProducts] = useState<orderService.Order[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);


    function formatedDate(date: Date) {
        const doneAt = new Date(date); // garante que seja Date
        const formattedDate = doneAt.toLocaleDateString("pt-BR");
        return formattedDate
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await orderService.getHistory();
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
                <Text.Header>History Orders</Text.Header>
            </Layout.Header>
            <Content.Vertical style={{ gap: 15 }}>
                {!products[0] && <Text.Lg style={{ fontSize: 22 }}>Nenhum historico encontrado</Text.Lg>}
                {
                    products.map(item => (
                        <Product.ConteinerHorizontal style={{ gap: 10, backgroundColor: "#f2f2f2", padding: 10, borderRadius: 10 }}>
                            <Product.ImageSm src={ProductSvg} />
                            <Product.ContainerVertical style={{ height: "auto", alignSelf: "stretch", justifyContent: "space-between" }}>
                                <Product.Especification>{formatedDate(item.done_at)}</Product.Especification>
                                <Product.Especification>ID Produto{item.product_id}</Product.Especification>
                                <Product.Especification>Quantidade: {item.quantity}</Product.Especification>
                                <Product.Especification>Total: ${(item.total_price * 1 / 1000).toFixed(2)}</Product.Especification>
                            </Product.ContainerVertical>
                        </Product.ConteinerHorizontal>
                    ))
                }
            </Content.Vertical>

        </>
    );
}

export default OrderHisoty;