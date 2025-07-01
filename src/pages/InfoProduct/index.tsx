import { useEffect, useState, type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Product from "../../components/Product";
import ProductSvg from "../../assets/products/firstProduct.svg";
import { useNavigate, useParams } from "react-router";
import * as productService from "../../services/product"
import Text from "../../components/Text";
import * as orderService from "../../services/order";



const InfoProduct: FC = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<productService.Product | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const params = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const result = await productService.getById(parseInt(params.id as string, 10));
            setProduct(result);
        };
        fetchProduct();
    }, []);

    async function buy() {

        await orderService.buy(parseInt(params.id as string, 10), quantity)
        navigate("/my-orders")
    }

    if (!product) {
        return <h1>Carregando...</h1>;
    }
    return (
        <Content.Main style={{ gap: 15 }}>
            <Layout.Header>
                <Button.StandartButton onClick={() => navigate("/home")}>
                    <Button.Text>Go Back</Button.Text>
                </Button.StandartButton>
            </Layout.Header>
            <Product.GenericImage src={ProductSvg} style={{ width: "100%", height: "50vh" }} />
            <Content.Horizontal style={{ width: "100%", justifyContent: "space-between" }}>
                <Content.Vertical style={{ alignItems: "start", paddingInline: 3, width: "auto" }}>
                    <Product.Price>{product.name}</Product.Price>
                    <Product.Description>{product.description}</Product.Description>
                    <Product.Description>Stock: {product.quantity}</Product.Description>
                </Content.Vertical>
                    <Product.Price>${(product.price * 1 / 1000).toFixed(2)}</Product.Price>
            </Content.Horizontal>
            <Content.Horizontal style={{ justifyContent: "space-between", gap: 5 }}>

                <Product.Price>${(quantity * (product.price * 1 / 1000)).toFixed(2)}</Product.Price>
                <Content.Horizontal style={{ width: "auto", gap: 5 }}>
                    <Button.Rounded onClick={() => setQuantity(quantity + 1)} circle={25} style={{ backgroundColor: "transparent", boxShadow: "none", borderWidth: 3, borderColor: "#004BFE", borderStyle: "solid" }} >
                        <Product.Price >➕</Product.Price>
                    </Button.Rounded>
                    <Text.Lg style={{ fontSize: 20 }}>
                        {quantity}
                    </Text.Lg>
                    <Button.Rounded onClick={() => setQuantity(quantity - 1)} circle={25} style={{ backgroundColor: "transparent", boxShadow: "none", borderWidth: 3, borderColor: "#004BFE", borderStyle: "solid" }} >
                        <Product.Price >➖</Product.Price>
                    </Button.Rounded>
                </Content.Horizontal>
            </Content.Horizontal>
            <Button.StandartButton onClick={buy}>
                <Button.Text>
                    Buy
                </Button.Text>
            </Button.StandartButton>
        </Content.Main>
    );
}

export default InfoProduct;