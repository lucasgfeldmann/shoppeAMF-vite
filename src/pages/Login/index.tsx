import type { FC } from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Text from "../../components/Text";
import Input from "../../components/Input";
import "./styles.css"

const Login: FC = () => {
    const navigate = useNavigate();
    function goToGetStart(): void {
        navigate("/");
    }

    function goToProduct(): void {
        navigate("/product");
    }

    return (
        <Content.NoScroll className="login-main-content">
            <Content.Vertical>
                <Text.Lg className="login-texts">Login</Text.Lg>
                <Text.Md className="login-texts">Good to see you back! 🖤</Text.Md>
            </Content.Vertical>
            <Content.Vertical className="login-vertical-content">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </Content.Vertical>
            <Content.Vertical className="login-vertical-content">
                <Button.StandartButton onClick={goToProduct}>
                    <Button.Text>Done</Button.Text>
                </Button.StandartButton>
                <Button.StandartButton onClick={goToGetStart} style={{ backgroundColor: "transparent" }}>
                    <Text.Sm>Cancel</Text.Sm>
                </Button.StandartButton>
            </Content.Vertical>
        </Content.NoScroll>
    );
}

export default Login;