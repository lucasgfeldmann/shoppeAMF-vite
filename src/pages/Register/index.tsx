import type { FC } from "react";
import Content from "../../components/Content";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css"
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const Register: FC = () => {
    const navigate = useNavigate()
    const authContext = useAuth()

    function goToGetStart(): void {
        navigate("/")
    }

    async function create(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")

        await authContext.register(name as string, email as string, password as string)

        navigate("/login")
    }


    return (
        <Content.NoScroll className="register-main-content">
            <form className="register-form" onSubmit={create}>
                <Text.Lg className="title-register">
                    Create Account
                </Text.Lg>
                <Content.Vertical className="register-vertical-content">
                    <Input name="name" type="text" placeholder="Your Name" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                </Content.Vertical>
                <Content.Vertical className="register-vertical-content">
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

export default Register;