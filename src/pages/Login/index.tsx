import type { FC } from "react";
import Content from "../../components/Content";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Text from "../../components/Text";
import Input from "../../components/Input";
import "./styles.css"
import { useAuth } from "../../contexts/AuthContext";

const Login: FC = () => {
    const navigate = useNavigate();
    const authContext = useAuth()
    function goToGetStart(): void {
        navigate("/");
    }

    async function login(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email")
        const password = formData.get("password")

        await authContext.login(email as string, password as string)
        navigate("/home")
    }

    return (
        <Content.NoScroll className="login-main-content">
            <form className="register-form" onSubmit={login}>
            <Content.Vertical>
                <Text.Lg className="login-texts">Login</Text.Lg>
                <Text.Md className="login-texts">Good to see you back! 🖤</Text.Md>
            </Content.Vertical>
            <Content.Vertical className="login-vertical-content">
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
            </Content.Vertical>
            <Content.Vertical className="login-vertical-content">
                <Button.StandartButton type="submit">
                    <Button.Text>Done</Button.Text>
                </Button.StandartButton>
                <Button.StandartButton onClick={goToGetStart} style={{ backgroundColor: "transparent" }}>
                    <Text.Sm>Cancel</Text.Sm>
                </Button.StandartButton>
            </Content.Vertical>
            </form>
        </Content.NoScroll>
    );
}

export default Login;