import type { FC } from "react";
import Content from "../../components/Content";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css"
import { useNavigate } from "react-router";

const Register: FC = () => {
    const navigate = useNavigate()

    function goToGetStart(): void {
        navigate("/")
    }

    function goToLogin(): void {
        navigate("/login")
    }

    return (
        <Content.NoScroll className="register-main-content">
            <Text.Lg className="title-register">
                Create Account
            </Text.Lg>
            <Content.Vertical className="register-vertical-content">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </Content.Vertical>
            <Content.Vertical className="register-vertical-content">
                <Button.StandartButton>
                    <Button.Text onClick={goToLogin}>Done</Button.Text>
                </Button.StandartButton>
                <Button.StandartButton onClick={goToGetStart} style={{ backgroundColor: "transparent" }}>
                    <Text.Sm>Cancel</Text.Sm>
                </Button.StandartButton>
            </Content.Vertical>
        </Content.NoScroll>
    );
}

export default Register;