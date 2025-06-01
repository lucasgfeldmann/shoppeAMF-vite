import type { FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Product from "../../components/Product";
import ProductSvg from "../../assets/products/firstProduct.svg";
import { useNavigate } from "react-router";



const InfoProduct: FC = () => {
    const navigate = useNavigate();
    return (
        <Content.Main>
            <Layout.Header>
                <Button.StandartButton onClick={() => navigate("/product")}>
                    <Button.Text>Go Back</Button.Text>
                </Button.StandartButton>
            </Layout.Header>
            <Product.GenericImage src={ProductSvg} style={{ width: "100%", height: "70vh" }} />
            <Content.Horizontal>
                <Product.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Product.Description>
                <Button.StandartButton onClick={() => navigate("/cart")}>
                    <Button.Text>
                        Add
                    </Button.Text>
                </Button.StandartButton>
            </Content.Horizontal>
        </Content.Main>
    );
}

export default InfoProduct;