import type { FC } from "react";
import Content from "../../components/Content";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import "./styles.css";
import { useNavigate } from "react-router";

const GetStart: FC = () => {
    const navigate = useNavigate();

    function goToRegister(): void {
        navigate("/register");
    }

    function goToLogin(): void {
        navigate("/login");
    }

    return (
        <Content.NoScroll className="get-started-main-content">
            <Content.Vertical style={{ gap: 10 }}>
                <Content.Rounded
                    circle={140}
                >
                    <Icon.Logo width={140 * 0.6} />

                </Content.Rounded>
                <Text.Lg>
                    ShoppeAMF
                </Text.Lg>
            </Content.Vertical>
            <Content.Vertical>
                <Text.Md style={{ textAlign: "center" }}>
                    Beautiful eCommerce UI Kit
                </Text.Md>
                <Text.Md style={{ textAlign: "center" }}>
                    for your online store.
                </Text.Md>
            </Content.Vertical>
            <Content.Vertical style={{ gap: 10 }}>
                <Button.StandartButton onClick={goToRegister}>
                    <Button.Text>
                        Let's get started
                    </Button.Text>
                </Button.StandartButton>
                <Button.StandartButton onClick={goToLogin} style={{ backgroundColor: "transparent" }}>
                    <Content.Horizontal style={{ gap: 10 }}>
                        <Text.Sm>I already have an account</Text.Sm>
                        <Content.Rounded circle={30} style={{ backgroundColor: "#004cff" }}>
                            <Icon.Arrow width={30 * 0.6} />
                        </Content.Rounded>
                    </Content.Horizontal>
                </Button.StandartButton>
            </Content.Vertical>
        </Content.NoScroll>
    );
}

export default GetStart;