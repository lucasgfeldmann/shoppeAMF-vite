import type { FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Card from "../../components/Card";
import Product from "../../components/Product";
import ProductSvg from "../../assets/products/firstProduct.svg";
import Content from "../../components/Content";
import Button from "../../components/Button";
import "./styles.css";

const Cart: FC = () => {
    return (
        <>
            <Layout.Header>
                <Text.Header>Cart</Text.Header>
            </Layout.Header>
            <Content.Vertical style={{ gap: 15 }}>
                <Card.InfoContent>
                    <Card.Title>Shipping Address</Card.Title>
                    <Card.Description>26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city</Card.Description>
                    <Card.EditButton />
                </Card.InfoContent>
                <Product.ConteinerHorizontal style={{ gap: 10, backgroundColor: "#f2f2f2", padding: 10, borderRadius: 10 }}>
                    <Product.ImageSm src={ProductSvg} />
                    <Product.ContainerVertical style={{ height: "auto", alignSelf: "stretch", justifyContent: "space-between" }}>
                        <Product.Description>Lorem ipsum dolor sit amet consectetur.</Product.Description>
                        <Product.Especification>Pink, Size M</Product.Especification>
                        <Content.Horizontal style={{ justifyContent: "space-between" }}>
                            <Product.Price>$17.00</Product.Price>
                            <Content.Horizontal style={{ width: "auto", gap: 5 }}>
                                <Button.Rounded circle={25} style={{ backgroundColor: "transparent", boxShadow: "none", borderWidth: 3, borderColor: "#004BFE", borderStyle: "solid" }} >
                                    <Product.Price >➕</Product.Price>
                                </Button.Rounded>
                                <Text.Lg style={{ fontSize: 20 }}>
                                    2
                                </Text.Lg>
                                <Button.Rounded circle={25} style={{ backgroundColor: "transparent", boxShadow: "none", borderWidth: 3, borderColor: "#004BFE", borderStyle: "solid" }} >
                                    <Product.Price >➖</Product.Price>
                                </Button.Rounded>
                            </Content.Horizontal>
                        </Content.Horizontal>
                    </Product.ContainerVertical>
                </Product.ConteinerHorizontal>
            </Content.Vertical>
            <Button.StandartButton style={{ position: "absolute", bottom: 70, width: "auto", right: "5vw" }}>
                <Product.Price style={{ color: "#fff" }}>Total $28.00</Product.Price>
                <Button.Text>CheckOut</Button.Text>
            </Button.StandartButton>

        </>
    );
}

export default Cart;